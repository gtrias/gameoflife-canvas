import React, { Component } from 'react';
import Canvas from './components/canvas'
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  componentWillMount () {
    this.props.dispatch({type: 'INITIALIZE_GRID'})
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
