import logo from './logo.svg';
import iphone from './images/fake-screen-protector.jpg'
import './App.css';
import React from 'react';
import Calculator from './components/CalcButtons/Calculator'



function App() {
  return (
    <div className="App" style={{
      backgroundColor: '#add8e6',
      zIndex: '-5',
      position: 'absolute',
      width: '100%',
    }}>
      <header className="App-header" >
        <div className="calculator">
          <Calculator />       
        </div>   
      </header>
    </div>
  );
}

export default App;
