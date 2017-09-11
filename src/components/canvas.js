import React, { Component } from 'react';

class Canvas extends Component {
  componentDidMount() {
    this.updateCanvas(
      this.props.grid
    );
  }

  updateCanvas(grid) {
    console.log(grid)
    // Padding
    var p = 0;
    // square height
    var sh = 20
    // square width
    var sw = 20
    const ctx = this.refs.canvas.getContext('2d');

    var width = window.innerWidth;
    var height = window.innerHeight;
    this.refs.canvas.width = width
    this.refs.canvas.height = height

    for (var x = 0; x <= width; x += sw) {
      ctx.moveTo(0.5 + x + p, p);
      ctx.lineTo(0.5 + x + p, height + p);
    }

    for (var x = 0; x <= height; x += sh) {
      ctx.moveTo(p, 0.5 + x + p);
      ctx.lineTo(width + p, 0.5 + x + p);
    }

    ctx.strokeStyle = "black";
    ctx.stroke();
  }

  render() {
    return (
      <canvas ref="canvas" id="bgCanvas" />
    );
  }
}

export default Canvas;
