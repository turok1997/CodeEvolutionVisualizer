var neo4j = require('neo4j-driver');
var express = require('express');
var neo4jconfig = require('../neo4jconfig');
var router = express.Router();

router.get('/', function(req, res, next) {
  const driver = neo4j.driver(neo4jconfig.uri, neo4j.auth.basic(neo4jconfig.user, neo4jconfig.password));
  const session = driver.session();
  let dataFromDb = {};
  const query = `
  MATCH (app:App {name: "` + req.query.applicationName + `"})
    WHERE app.branch='master' OR app.branch="master\\\\\\n"
  WITH app as last_commit
  ORDER BY app.author_timestamp DESC
  LIMIT 1
  MATCH (app:App {name: "` + req.query.applicationName + `"})
    WHERE app.commit='` + req.query.commit + `'
  OPTIONAL MATCH (next_commit:App)<-[:CHANGED_TO]-(app)
    WHERE (next_commit)-[:CHANGED_TO*0..]->(last_commit)
  WITH app, next_commit
  ORDER BY next_commit.author_timestamp ASC
  LIMIT 1
  OPTIONAL MATCH (prev_commit:App)-[:CHANGED_TO]->(app)
  WITH app,
    prev_commit,
    next_commit
  ORDER BY prev_commit.author_timestamp DESC
  LIMIT 1
  MATCH (app)-[:APP_OWNS_CLASS]->(class:Class)
  OPTIONAL MATCH (class)-[:CLASS_OWNS_METHOD]->(m:Method)
  OPTIONAL MATCH (caller_class:Class)-[:CLASS_OWNS_METHOD]->(caller:Method)-[:CALLS]->(m)
    WHERE (app)-[:APP_OWNS_CLASS]->(caller_class)
  WITH app,
    prev_commit,
    next_commit,
    class,
    m,
    caller_class,
    caller.name as caller_name,
    count(caller) as number_of_calls
  WITH app,
    prev_commit,
    next_commit,
    class,
    m,
    caller_class,
    collect({callerMethodName: caller_name, number_of_calls: toString(number_of_calls)}) as caller_methods,
    sum(number_of_calls) as total_calls
  WITH app,
    prev_commit,
    next_commit,
    class,
    m,
    CASE
      WHEN caller_class IS NULL THEN []
      ELSE collect({
        callerClassName: caller_class.name,
        totalCallAmount: toString(total_calls),
        callerMethods: caller_methods
      })
    END as callers,
    sum(total_calls) as total_calls
  WITH app,
    prev_commit,
    next_commit,
    class.name as className,
    CASE
      WHEN m IS NULL THEN []
      ELSE collect({
       methodName: m.name,
       totalCallAmount: toString(total_calls),
       callers: callers
      })
    END as methods,
    sum(total_calls) as total_calls
  CALL {
    WITH app
    MATCH (app)-[:APP_OWNS_CLASS]->(c:Class)
    WHERE NOT (app)<-[:CHANGED_TO]-(:App)-[:APP_OWNS_CLASS]->(c)
    OPTIONAL MATCH (:Class)-[class_changed_rel:CLASS_CHANGED_TO]->(c)
    WITH app,
      c.name as className,
      CASE
        WHEN class_changed_rel IS NULL THEN c.number_of_lines
        ELSE sum(class_changed_rel.added_lines+class_changed_rel.changed_lines+class_changed_rel.deleted_lines)
      END as changedLinesCount
      WHERE changedLinesCount > 0
    WITH className, changedLinesCount
    ORDER BY className
    RETURN collect( { className: className, changedLinesCount: changedLinesCount } ) as changedClasses, sum(changedLinesCount) as totalChangedLinesCount
  }
  RETURN app.commit as commitHash,
    prev_commit.commit as previousCommitHash,
    next_commit.commit as nextCommitHash,
    app.author as author,
    app.message as message,
    app.author_timestamp as authorTimestamp,
    app.version_number as versionNumber,
    app.branch as branchName,
    changedClasses,
    totalChangedLinesCount,
    collect({
      className: className,
      totalCallAmount: toString(total_calls),
      methods: methods
    }) as classes
  `;
  console.log(query);
  session.run(query).subscribe({
    onNext: record => {
      dataFromDb = {
        commitHash: record.get('commitHash'),
        author: record.get('author'),
        message: record.get('message'),
        authorTimestamp: record.get('authorTimestamp'),
        versionNumber: record.get('versionNumber').low,
        changedClasses: record.get('changedClasses').map(changedClass => {
          changedClass.changedLinesCount = changedClass.changedLinesCount.low;
          return changedClass;
        }),
        totalChangedLinesCount: record.get('totalChangedLinesCount').low,
        branchName: record.get('branchName'),
        previousCommitHash: record.get('previousCommitHash'),
        nextCommitHash: record.get('nextCommitHash'),
        classes: record.get('classes'),
      };
    },
    onCompleted: () => {
      console.log(dataFromDb);
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(dataFromDb));
    }
  });
});

router.get('/class_names', (req, res, next) => {
  const driver = neo4j.driver(neo4jconfig.uri, neo4j.auth.basic(neo4jconfig.user, neo4jconfig.password));
  const session = driver.session();
  const dataFromDb = [];
  session.run(`
    MATCH (app:App)-[:APP_OWNS_CLASS]->(c:Class)
    WHERE app.commit='` + req.query.commit + `'
    RETURN distinct c.name as className
    ORDER BY className
  `).subscribe({
    onNext: record => {
      dataFromDb.push(record.get('className'));
    },
    onCompleted: () => {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(dataFromDb));
    },
  });
});

module.exports = router;
