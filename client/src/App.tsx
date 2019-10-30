import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppState } from './store';
import { DemoComponent } from './components';
import { demoGet, demoPost } from './actions/demo-actions'
import './App.css';

interface AppComponentProps {
  // Props are defined here
}

class App extends Component<AppComponentProps> {
  render() {
    return (
      <div className="App">
        <DemoComponent />
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  demoReducer: state.demoReducer
  // Any other reducers go here
});

export default connect(
  mapStateToProps,
  { demoGet, demoPost }
)(App);
