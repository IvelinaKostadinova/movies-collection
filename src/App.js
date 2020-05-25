import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import CustomButton from './components/CustomButton';
import CustomBlock from './components/CustomBlock';
import CustomPureComponent from './components/CustomPureBlock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CustomButton color="red"></CustomButton>
        <CustomBlock text="World"></CustomBlock>
        <CustomPureComponent text="World"></CustomPureComponent>
        <HelloWorld></HelloWorld>
      </header>
    </div>
  );
}

export default App;
