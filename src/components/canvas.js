import React, { Component } from 'react';

class Canvas extends Component {
  componentDidUpdate() {
    this.updateCanvas(
      this.props.grid
    );
  }

  updateCanvas(grid) {
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

    grid.grid.forEach((row, rowIndex) => {
      row.forEach((col, index) => {
        let x = index * 20
        let y = rowIndex * 20
        ctx.rect(x, y, sw, sh);
      })
    })

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
