import React from 'react';
import logo from './logo.svg';
import './App.css';
import LifeCycle from './components/lifecycleTest/lifecycleTest.component';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      text: '',
      door: false,
    };

  }

  render(){
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <button className="btn" onClick={ ()=>this.setState({ door: !this.state.door }) } >
            切换隐藏显示
        </button>
        <button className="btn" onClick={ ()=>this.setState({ text: this.state.text+'-hello-' }) } >
          增加-hello-数量
        </button>

        { this.state.door ? <LifeCycle state={ this.state } /> : null } 

      </header>
      </div>
    );
  }
}

export default App;
