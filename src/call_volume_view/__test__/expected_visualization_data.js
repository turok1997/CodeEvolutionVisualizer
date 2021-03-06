module.exports = [
  {
     "data":{
        "color":"#eee"
     },
     "pipes":[
        {
           "type":"rect",
           "startX":-5,
           "startY":0,
           "height":45,
           "width":2,
           "color":"#eee"
        },
        {
           "type":"arc",
           "thickness":2,
           "radius":2,
           "centerX":-5,
           "centerY":45,
           "angle":90,
           "color":"#eee",
           "scaleX":1
        },
        {
           "type":"rect",
           "startX":-5,
           "startY":45,
           "width":50,
           "height":2,
           "color":"#eee",
           "scaleX":-1,
           "scaleY":1
        },
        {
           "type":"arc",
           "thickness":1,
           "radius":1,
           "centerX":-55,
           "centerY":45,
           "angle":90,
           "color":"#eee",
           "scaleX":-1,
           "scaleY":2
        }
     ],
     "leaves":[
        {
           "data":{
              "name":"sendAsyncUDPQuery(to:port:timeout:completion:)"
           },
           "stem":{
              "type":"rect",
              "fill":"#eee",
              "startX":-12,
              "startY":45,
              "width":1,
              "height":2,
              "scaleX":-1,
              "scaleY":-1
           },
           "node":{
              "type":"arc",
              "fill":"#eee",
              "x":-12.5,
              "y":42.2,
              "outerRadius":1,
              "innerRadius":0,
              "angle":360
           }
        },
        {
           "data":{
              "name":"offset(from:)"
           },
           "stem":{
              "type":"rect",
              "fill":"#eee",
              "startX":-26,
              "startY":45,
              "width":1,
              "height":2,
              "scaleX":-1,
              "scaleY":-1
           },
           "node":{
              "type":"arc",
              "fill":"#eee",
              "x":-26.5,
              "y":42.2,
              "outerRadius":1,
              "innerRadius":0,
              "angle":360
           }
        },
        {
           "data":{
              "name":"query(pool:version:port:numberOfSamples:maximumServers:timeout:progress:)"
           },
           "stem":{
              "type":"rect",
              "fill":"#eee",
              "startX":-40,
              "startY":45,
              "width":1,
              "height":2,
              "scaleX":-1,
              "scaleY":-1
           },
           "node":{
              "type":"arc",
              "fill":"#eee",
              "x":-40.5,
              "y":42.2,
              "outerRadius":1,
              "innerRadius":0,
              "angle":360
           }
        },
        {
           "data":{
              "name":"query(ip:port:version:timeout:numberOfSamples:completion:)"
           },
           "stem":{
              "type":"rect",
              "fill":"#eee",
              "startX":-55,
              "startY":45,
              "width":1,
              "height":3,
              "scaleX":-1,
              "scaleY":-1
           },
           "node":{
              "type":"arc",
              "fill":"#eee",
              "x":-55.5,
              "y":40.3,
              "outerRadius":2,
              "innerRadius":0,
              "angle":360
           }
        }
     ]
  },
  {
     "data":{
        "color":"#ccc"
     },
     "pipes":[
        {
           "type":"rect",
           "startX":-3,
           "startY":0,
           "height":45,
           "width":1,
           "color":"#ccc"
        },
        {
           "type":"arc",
           "thickness":1,
           "radius":3,
           "centerX":-5,
           "centerY":45,
           "angle":90,
           "color":"#ccc",
           "scaleX":1
        },
        {
           "type":"rect",
           "startX":-5,
           "startY":48,
           "width":21,
           "height":1,
           "color":"#ccc",
           "scaleX":-1,
           "scaleY":-1
        },
        {
           "type":"arc",
           "thickness":1,
           "radius":1,
           "centerX":-26,
           "centerY":48,
           "angle":90,
           "color":"#ccc",
           "scaleX":-1,
           "scaleY":-1
        }
     ],
     "leaves":[
        {
           "data":{
              "name":"onTimeout()"
           },
           "stem":{
              "type":"rect",
              "fill":"#ccc",
              "startX":-12,
              "startY":48,
              "width":1,
              "height":2,
              "scaleX":-1,
              "scaleY":1
           },
           "node":{
              "type":"arc",
              "fill":"#ccc",
              "x":-12.5,
              "y":50.8,
              "outerRadius":1,
              "innerRadius":0,
              "angle":360
           }
        },
        {
           "data":{
              "name":"resolve(host:timeout:completion:)"
           },
           "stem":{
              "type":"rect",
              "fill":"#ccc",
              "startX":-26,
              "startY":48,
              "width":1,
              "height":2,
              "scaleX":-1,
              "scaleY":1
           },
           "node":{
              "type":"arc",
              "fill":"#ccc",
              "x":-26.5,
              "y":50.8,
              "outerRadius":1,
              "innerRadius":0,
              "angle":360
           }
        }
     ]
  },
  {
     "data":{
        "color":"#ddd"
     },
     "pipes":[
        {
           "type":"rect",
           "startX":-2,
           "startY":0,
           "height":59,
           "width":1,
           "color":"#ddd"
        },
        {
           "type":"arc",
           "thickness":1,
           "radius":1,
           "centerX":-2,
           "centerY":59,
           "angle":90,
           "color":"#ddd",
           "scaleX":1
        },
        {
           "type":"rect",
           "startX":-2,
           "startY":59,
           "width":21,
           "height":1,
           "color":"#ddd",
           "scaleX":-1,
           "scaleY":1
        },
        {
           "type":"arc",
           "thickness":1,
           "radius":1,
           "centerX":-23,
           "centerY":59,
           "angle":90,
           "color":"#ddd",
           "scaleX":-1,
           "scaleY":1
        }
     ],
     "leaves":[
        {
           "data":{
              "name":"scheduledTimer(withTimeInterval:repeated:handler:)"
           },
           "stem":{
              "type":"rect",
              "fill":"#ddd",
              "startX":-9,
              "startY":59,
              "width":1,
              "height":2,
              "scaleX":-1,
              "scaleY":-1
           },
           "node":{
              "type":"arc",
              "fill":"#ddd",
              "x":-9.5,
              "y":56.2,
              "outerRadius":1,
              "innerRadius":0,
              "angle":360
           }
        },
        {
           "data":{
              "name":"invokeFrom(timer:)"
           },
           "stem":{
              "type":"rect",
              "fill":"#ddd",
              "startX":-23,
              "startY":59,
              "width":1,
              "height":2,
              "scaleX":-1,
              "scaleY":-1
           },
           "node":{
              "type":"arc",
              "fill":"#ddd",
              "x":-23.5,
              "y":56.2,
              "outerRadius":1,
              "innerRadius":0,
              "angle":360
           }
        }
     ]
  },
  {
     "data":{
        "color":"#ff1100"
     },
     "pipes":[
        {
           "type":"rect",
           "startX":-1,
           "startY":0,
           "height":59,
           "width":1,
           "color":"#ff1100"
        },
        {
           "type":"arc",
           "thickness":1,
           "radius":2,
           "centerX":-2,
           "centerY":59,
           "angle":90,
           "color":"#ff1100",
           "scaleX":1
        },
        {
           "type":"rect",
           "startX":-2,
           "startY":61,
           "width":63,
           "height":1,
           "color":"#ff1100",
           "scaleX":-1,
           "scaleY":-1
        },
        {
           "type":"arc",
           "thickness":1,
           "radius":1,
           "centerX":-65,
           "centerY":61,
           "angle":90,
           "color":"#ff1100",
           "scaleX":-1,
           "scaleY":-1
        }
     ],
     "leaves":[
        {
           "data":{
              "name":"drawClock(hour:minute:second:title:x:)"
           },
           "stem":{
              "type":"rect",
              "fill":"#ff1100",
              "startX":-9,
              "startY":61,
              "width":1,
              "height":2,
              "scaleX":-1,
              "scaleY":1
           },
           "node":{
              "type":"arc",
              "fill":"#ff1100",
              "x":-9.5,
              "y":63.8,
              "outerRadius":1,
              "innerRadius":0.7,
              "angle":360
           }
        },
        {
           "data":{
              "name":"tick()"
           },
           "stem":{
              "type":"rect",
              "fill":"#ff1100",
              "startX":-23,
              "startY":61,
              "width":1,
              "height":2,
              "scaleX":-1,
              "scaleY":1
           },
           "node":{
              "type":"arc",
              "fill":"#ff1100",
              "x":-23.5,
              "y":63.8,
              "outerRadius":1,
              "innerRadius":0.7,
              "angle":360
           }
        },
        {
           "data":{
              "name":"printDigit(digit:y:x:)"
           },
           "stem":{
              "type":"rect",
              "fill":"#ff1100",
              "startX":-37,
              "startY":61,
              "width":1,
              "height":2,
              "scaleX":-1,
              "scaleY":1
           },
           "node":{
              "type":"arc",
              "fill":"#ff1100",
              "x":-37.5,
              "y":63.8,
              "outerRadius":1,
              "innerRadius":0.7,
              "angle":360
           }
        },
        {
           "data":{
              "name":"start()"
           },
           "stem":{
              "type":"rect",
              "fill":"#ff1100",
              "startX":-51,
              "startY":61,
              "width":1,
              "height":2,
              "scaleX":-1,
              "scaleY":1
           },
           "node":{
              "type":"arc",
              "fill":"#ff1100",
              "x":-51.5,
              "y":63.8,
              "outerRadius":1,
              "innerRadius":0.7,
              "angle":360
           }
        },
        {
           "data":{
              "name":"loop()"
           },
           "stem":{
              "type":"rect",
              "fill":"#ff1100",
              "startX":-65,
              "startY":61,
              "width":1,
              "height":2,
              "scaleX":-1,
              "scaleY":1
           },
           "node":{
              "type":"arc",
              "fill":"#ff1100",
              "x":-65.5,
              "y":63.8,
              "outerRadius":1,
              "innerRadius":0,
              "angle":360
           }
        }
     ]
  },
  {
     "data":{
        "color":"#bbb"
     },
     "pipes":[
        {
           "type":"rect",
           "startX":0,
           "startY":0,
           "height":68,
           "width":1,
           "color":"#bbb"
        },
        {
           "type":"arc",
           "thickness":1,
           "radius":2,
           "centerX":2,
           "centerY":68,
           "angle":90,
           "color":"#bbb",
           "scaleX":-1
        },
        {
           "type":"rect",
           "startX":2,
           "startY":70,
           "width":21,
           "height":1,
           "color":"#bbb",
           "scaleX":1,
           "scaleY":-1
        },
        {
           "type":"arc",
           "thickness":1,
           "radius":1,
           "centerX":23,
           "centerY":70,
           "angle":90,
           "color":"#bbb",
           "scaleX":1,
           "scaleY":-1
        }
     ],
     "leaves":[
        {
           "data":{
              "name":"mvprintw(y:_:_:)"
           },
           "stem":{
              "type":"rect",
              "fill":"#bbb",
              "startX":9,
              "startY":70,
              "width":1,
              "height":2,
              "scaleX":1,
              "scaleY":1
           },
           "node":{
              "type":"arc",
              "fill":"#bbb",
              "x":9.5,
              "y":72.8,
              "outerRadius":1,
              "innerRadius":0.7,
              "angle":360
           }
        },
        {
           "data":{
              "name":"clear(x:y:width:height:)"
           },
           "stem":{
              "type":"rect",
              "fill":"#bbb",
              "startX":23,
              "startY":70,
              "width":1,
              "height":2,
              "scaleX":1,
              "scaleY":1
           },
           "node":{
              "type":"arc",
              "fill":"#bbb",
              "x":23.5,
              "y":72.8,
              "outerRadius":1,
              "innerRadius":0,
              "angle":360
           }
        }
     ]
  },
  {
     "data":{
        "color":"#aaa"
     },
     "pipes":[
        {
           "type":"rect",
           "startX":1,
           "startY":0,
           "height":68,
           "width":1,
           "color":"#aaa"
        },
        {
           "type":"arc",
           "thickness":1,
           "radius":1,
           "centerX":2,
           "centerY":68,
           "angle":90,
           "color":"#aaa",
           "scaleX":-1
        },
        {
           "type":"rect",
           "startX":2,
           "startY":68,
           "width":35,
           "height":1,
           "color":"#aaa",
           "scaleX":1,
           "scaleY":1
        },
        {
           "type":"arc",
           "thickness":1,
           "radius":1,
           "centerX":37,
           "centerY":68,
           "angle":90,
           "color":"#aaa",
           "scaleX":1,
           "scaleY":1
        }
     ],
     "leaves":[
        {
           "data":{
              "name":"sync(from:samples:first:completion:)"
           },
           "stem":{
              "type":"rect",
              "fill":"#aaa",
              "startX":9,
              "startY":68,
              "width":1,
              "height":2,
              "scaleX":1,
              "scaleY":-1
           },
           "node":{
              "type":"arc",
              "fill":"#aaa",
              "x":9.5,
              "y":65.2,
              "outerRadius":1,
              "innerRadius":0.7,
              "angle":360
           }
        },
        {
           "data":{
              "name":"loadFromDefaults()"
           },
           "stem":{
              "type":"rect",
              "fill":"#aaa",
              "startX":23,
              "startY":68,
              "width":1,
              "height":2,
              "scaleX":1,
              "scaleY":-1
           },
           "node":{
              "type":"arc",
              "fill":"#aaa",
              "x":23.5,
              "y":65.2,
              "outerRadius":1,
              "innerRadius":0.7,
              "angle":360
           }
        },
        {
           "data":{
              "name":"reset()"
           },
           "stem":{
              "type":"rect",
              "fill":"#aaa",
              "startX":37,
              "startY":68,
              "width":1,
              "height":2,
              "scaleX":1,
              "scaleY":-1
           },
           "node":{
              "type":"arc",
              "fill":"#aaa",
              "x":37.5,
              "y":65.2,
              "outerRadius":1,
              "innerRadius":0,
              "angle":360
           }
        }
     ]
  },
  {
     "data":{
        "color":"#777"
     },
     "pipes":[
        {
           "type":"rect",
           "startX":2,
           "startY":0,
           "height":45,
           "width":2,
           "color":"#777"
        },
        {
           "type":"arc",
           "thickness":2,
           "radius":2,
           "centerX":4,
           "centerY":45,
           "angle":90,
           "color":"#777",
           "scaleX":-1
        },
        {
           "type":"rect",
           "startX":4,
           "startY":47,
           "width":82,
           "height":2,
           "color":"#777",
           "scaleX":1,
           "scaleY":-1
        },
        {
           "type":"arc",
           "thickness":1,
           "radius":1,
           "centerX":86,
           "centerY":47,
           "angle":90,
           "color":"#777",
           "scaleX":1,
           "scaleY":-2
        }
     ],
     "leaves":[
        {
           "data":{
              "name":"dateFromNTPFormat(_:)"
           },
           "stem":{
              "type":"rect",
              "fill":"#777",
              "startX":11,
              "startY":47,
              "width":1,
              "height":2,
              "scaleX":1,
              "scaleY":1
           },
           "node":{
              "type":"arc",
              "fill":"#777",
              "x":11.5,
              "y":49.8,
              "outerRadius":1,
              "innerRadius":0.7,
              "angle":360
           }
        },
        {
           "data":{
              "name":"intervalFromNTPFormat(_:)"
           },
           "stem":{
              "type":"rect",
              "fill":"#777",
              "startX":25,
              "startY":47,
              "width":1,
              "height":2,
              "scaleX":1,
              "scaleY":1
           },
           "node":{
              "type":"arc",
              "fill":"#777",
              "x":25.5,
              "y":49.8,
              "outerRadius":1,
              "innerRadius":0.7,
              "angle":360
           }
        },
        {
           "data":{
              "name":"prepareToSend(transmitTime:)"
           },
           "stem":{
              "type":"rect",
              "fill":"#777",
              "startX":39,
              "startY":47,
              "width":1,
              "height":2,
              "scaleX":1,
              "scaleY":1
           },
           "node":{
              "type":"arc",
              "fill":"#777",
              "x":39.5,
              "y":49.8,
              "outerRadius":1,
              "innerRadius":0,
              "angle":360
           }
        },
        {
           "data":{
              "name":"isValidResponse()"
           },
           "stem":{
              "type":"rect",
              "fill":"#777",
              "startX":53,
              "startY":47,
              "width":1,
              "height":2,
              "scaleX":1,
              "scaleY":1
           },
           "node":{
              "type":"arc",
              "fill":"#777",
              "x":53.5,
              "y":49.8,
              "outerRadius":1,
              "innerRadius":0,
              "angle":360
           }
        },
        {
           "data":{
              "name":"intervalToNTPFormat(_:)"
           },
           "stem":{
              "type":"rect",
              "fill":"#777",
              "startX":68,
              "startY":47,
              "width":1,
              "height":3,
              "scaleX":1,
              "scaleY":1
           },
           "node":{
              "type":"arc",
              "fill":"#777",
              "x":68.5,
              "y":51.7,
              "outerRadius":2,
              "innerRadius":0,
              "angle":360
           }
        },
        {
           "data":{
              "name":"dateToNTPFormat(_:)"
           },
           "stem":{
              "type":"rect",
              "fill":"#777",
              "startX":86,
              "startY":47,
              "width":1,
              "height":6,
              "scaleX":1,
              "scaleY":1
           },
           "node":{
              "type":"arc",
              "fill":"#777",
              "x":86.5,
              "y":56.4,
              "outerRadius":4,
              "innerRadius":0,
              "angle":360
           }
        }
     ]
  },
  {
     "data":{
        "color":"#666"
     },
     "pipes":[
        {
           "type":"rect",
           "startX":4,
           "startY":0,
           "height":45,
           "width":0,
           "color":"#666"
        },
        {
           "type":"arc",
           "thickness":0,
           "radius":0,
           "centerX":4,
           "centerY":45,
           "angle":90,
           "color":"#666",
           "scaleX":-1
        },
        {
           "type":"rect",
           "startX":4,
           "startY":45,
           "width":21,
           "height":0,
           "color":"#666",
           "scaleX":1,
           "scaleY":1
        },
        {
           "type":"arc",
           "thickness":1,
           "radius":1,
           "centerX":25,
           "centerY":45,
           "angle":90,
           "color":"#666",
           "scaleX":1,
           "scaleY":0
        }
     ],
     "leaves":[
        {
           "data":{
              "name":"systemUptime()"
           },
           "stem":{
              "type":"rect",
              "fill":"#666",
              "startX":11,
              "startY":45,
              "width":1,
              "height":2,
              "scaleX":1,
              "scaleY":-1
           },
           "node":{
              "type":"arc",
              "fill":"#666",
              "x":11.5,
              "y":42.2,
              "outerRadius":1,
              "innerRadius":0.7,
              "angle":360
           }
        },
        {
           "data":{
              "name":"toDictionary()"
           },
           "stem":{
              "type":"rect",
              "fill":"#666",
              "startX":25,
              "startY":45,
              "width":1,
              "height":2,
              "scaleX":1,
              "scaleY":-1
           },
           "node":{
              "type":"arc",
              "fill":"#666",
              "x":25.5,
              "y":42.2,
              "outerRadius":1,
              "innerRadius":0.7,
              "angle":360
           }
        }
     ]
  }
];