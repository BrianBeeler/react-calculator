import logo from './logo.svg';
import iphone from './images/fake-screen-protector.jpg'
import './App.css';
import React from 'react';
import CalcButtons from './components/CalcButtons/CalcButtons'



function App() {
  return (
    <div className="App">
      <CalcButtons /> 
      <header className="App-header">
        <img src={iphone} className="iphone-screen" alt="logo" />
      </header>
    </div>
  );
}

export default App;
