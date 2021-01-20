import logo from './logo.svg';
import iphone from './images/fake-screen-protector.jpg'
import './App.css';
import React from 'react';
import Calculator from './components/CalcButtons/Calculator'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="calculator">
          <Calculator />       
        </div>   
      </header>
    </div>
  );
}

export default App;
