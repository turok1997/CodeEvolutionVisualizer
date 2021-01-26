const React = require('react');
const CommitRangeView = require('./commit_range_view');
const ItemList = require('./item_list');

function loadData(url) {
  return fetch(url)
          .then((result) => result.json());
}

function getItems(data) {
  const items = [];
  const classNameSet = new Set();
  for (let i = 0; i < data.commits.length; i++) {
    const commit = data.commits[i];
    for (let j = 0; j < commit.changedClasses.length; j++) {
      classNameSet.add(commit.changedClasses[j].className);
    }
    items.push({
      label: className,
      color: classNameColorMapping[className].color,
      checked: true,
    });
  }
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

class CommitRangeViewFull extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: undefined,
      disabledClasses: {},
      classToColorMapping: {},
      data: {
        commits: [],
      },
    };
  }
  
  onDataReady(data) {
    const items = [];
    const classNameItemMapping = {};
    for (let i = 0; i < data.commits.length; i++) {
      const commit = data.commits[i];
      for (let j = 0; j < commit.changedClasses.length; j++) {
        const changedClass = commit.changedClasses[j];
        const className = changedClass.className;
        if (!classNameItemMapping[className]) {
          classNameItemMapping[className] = {
            label: className,
            color: getRandomColor(),
            checked: true,
          };
        }
      }
    }
    const alpahebticallySortedItems = Object.keys(classNameItemMapping)
      .map(className => classNameItemMapping[className])
      .sort((item1, item2) => item1.label.localeCompare(item2.label));

    const classToColorMapping = {};
    alpahebticallySortedItems.forEach(item => classToColorMapping[item.label] = item.color);

    this.setState({ data, classToColorMapping });
    this.setState({ items: alpahebticallySortedItems });
  }

  handleItemClick(changedItemIndex) {
    console.log("Item " + changedItemIndex + " was clicked");
    const items = this.state.items.map((item, index) => {
      if (index == changedItemIndex) {
        item.checked = !item.checked;
      }
      return item;
    });
    const disabledClasses = { ...this.state.disabledClasses };
    if (!items[changedItemIndex].checked) {
      disabledClasses[items[changedItemIndex].label] = true;
    } else {
      delete disabledClasses[items[changedItemIndex].label];
    }
    this.setState({ items });
    this.setState({ disabledClasses });
  }

  componentDidMount() {
    loadData(this.props.url)
      .then(data => {
        data.commits = data.commits.concat(data.commits).concat(data.commits).concat(data.commits);
        /*data.commits = data.commits.concat(data.commits).concat(data.commits).concat(data.commits);
        data.commits = data.commits.concat(data.commits).concat(data.commits).concat(data.commits);
        data.commits = data.commits.concat(data.commits).concat(data.commits).concat(data.commits);
        data.commits = data.commits.concat(data.commits).concat(data.commits).concat(data.commits);
        data.commits = data.commits.concat(data.commits).concat(data.commits).concat(data.commits);
        data.commits = data.commits.concat(data.commits).concat(data.commits).concat(data.commits);
        data.commits = data.commits.concat(data.commits).concat(data.commits).concat(data.commits);
        data.commits = data.commits.concat(data.commits).concat(data.commits).concat(data.commits);*/
        console.log(data);
        this.onDataReady(data);
      })
      .catch(error => console.log(error));
  }

  render() {
    console.log("redrawing full");
    console.log(this.state);
    return(
      <div className="minu-container">
        <div className="box-1">
          <ItemList items={this.state.items} onItemChange={this.handleItemClick.bind(this)} />
        </div>
        <div className="box-2">
          <CommitRangeView
            data={this.state.data}
            disabledClasses={this.state.disabledClasses}
            classToColorMapping={this.state.classToColorMapping} />
        </div>
      </div>
    );
  }
}

module.exports = CommitRangeViewFull;