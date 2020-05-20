import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestRobots } from '../actions';

import App from './App'
import './App.css';

class AppContainer extends Component {
  constructor() {
    super()
    this.state = {
      count: 1
    }
  }

  render(){
    return (
      <App 
        { ...this.props }
      />
    );

  }
}

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
