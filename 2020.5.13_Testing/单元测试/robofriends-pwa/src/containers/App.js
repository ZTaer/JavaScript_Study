import React, { Component } from 'react';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import Header from '../components/Header';

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      count: 1
    }
  }

  componentDidMount() {
    this.props.onRequestRobots();
  }

  filteredRobots = () => {
    return this.props.robots ?
      this.props.robots.filter( robot => {
        return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
    }) :
    []
  }

  render() {
    const { searchChange, isPending } = this.props;
    return (
      <div className='tc'>
        <Header count={this.state.count}/>

        <SearchBox searchChange={searchChange} />
        <Scroll>
          { isPending ? <h1>Loading</h1> :
            <ErrorBoundry>
              <CardList robots={this.filteredRobots()} />
            </ErrorBoundry>
          }
        </Scroll>
      </div>
    );
  }
}

export default App;
