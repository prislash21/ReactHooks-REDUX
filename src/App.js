import React from 'react';

import './styles.css';

import UseState from './components/UseState';
import UseStateTwo from './components/UseStateTwo';
import UseStateThree from './components/UseStateThree';
import UseStateFour from './components/UseStateFour';
import UseEffect from './components/UseEffect';
import UseEffectMouse from './components/UseEffectMouse';

function App() {
  return (
    <div className='App'>
      <UseState />
      <UseStateTwo />
      <UseStateThree />
      <UseStateFour />
      <UseEffect />
      <UseEffectMouse />
    </div>
  );
}

export default App;
