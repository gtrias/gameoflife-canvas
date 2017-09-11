import React, { Component } from 'react';
import Canvas from './components/canvas'
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  componentWillMount () {
    const { dispatch } = this.props
    dispatch({type: 'INITIALIZE_GRID'})

    const intervalSpeed = 500

    setInterval(function() {
      // Do something every 5 seconds
      dispatch({type: 'NEXT_GRID_STATE'})
    }, intervalSpeed);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Canvas
            grid={this.props.grid}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    grid: state.grid
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
