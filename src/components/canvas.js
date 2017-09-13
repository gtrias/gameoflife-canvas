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
    var sh = 10
    // square width
    var sw = 10
    const ctx = this.refs.canvas.getContext('2d');

    var width = window.innerWidth;
    var height = window.innerHeight;
    this.refs.canvas.width = width
    this.refs.canvas.height = height

    grid.grid.forEach((row, rowIndex) => {
      row.forEach((col, index) => {
        let x = index * sw
        let y = rowIndex * sh
        if (col !== 0) {
          // ctx.fillStyle = "#33ff00";
          ctx.fillRect(x, y, sw, sh);
        } else {
          ctx.rect(x, y, sw, sh);
        }
      })
    })

    // ctx.strokeStyle = "#33ff00";
    // ctx.strokeStyle = "#1c1c1c";
    ctx.stroke();
  }

  render() {
    return (
      <canvas ref="canvas" id="bgCanvas" />
    );
  }
}

export default Canvas;
