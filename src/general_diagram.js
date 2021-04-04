const React = require('react');
const PrimitiveDiagram = require('./primitive_diagram');

class GeneralDiagram extends React.Component {

  render() {
    const {width, height} = this.props;
    return(
      <div style={{width, height, minWidth: width, overflow: 'auto'}}>
        <div
          className="scroll-container"
          onScroll={this.props.onContainerScroll}
          onMouseMove={this.props.onContainerMouseMove}
          onMouseDown={this.props.onContainerMouseDown}
          ref={this.props.scrollContainerRef}
        >
          <div
            className="large-container"
            ref={this.props.largeContainerRef}
          >
            <div
              className="container"
              style={{transform: `translate(${this.props.scrollLeft}px, 0px)`, cursor: this.props.cursorStyle}}
            >
              <PrimitiveDiagram
                {...this.props.primitiveDiagramProps}
                onDraw={this.props.onDraw} />
            </div>
          </div>
          { this.props.children }
        </div>
      </div>
    );
  }
}

module.exports = GeneralDiagram;
