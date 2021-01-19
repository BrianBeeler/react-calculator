import logo from './logo.svg';
import iphone from './images/fake-screen-protector.jpg'
import './App.css';
import React from 'react';
import CalcButtons from './components/CalcButtons/CalcButtons'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="calculator">
          <div className="display">
            <p>Sample Display</p>  
          </div>  
          <div className="buttons-container">
              <CalcButtons className="calc-buttons"/>
          </div>
          
        </div>   
      </header>
    </div>
  );
}

export default App;
