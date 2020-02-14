import React from 'react';

import UseStateExample from './components/use-state-example/use-state-example.component';
import UseEffectExample from './components/use-effect-example/use-effect-example.component';

import './App.css';

const App = props => {
  return (
    <div>
      <UseStateExample />
      <hr/>
      <UseEffectExample />
    </div>
  );
};

export default App;
