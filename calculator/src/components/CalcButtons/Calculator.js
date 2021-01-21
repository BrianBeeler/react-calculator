import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Calculator.module.css';
import { getElementError } from '@testing-library/react';

class Calculator extends Component {

  constructor() {
    super()
    this.state = {
      display: 0,
      currentOperator: null,
      operationNumber: null
    }
  }


  render() {
    return (
      <div>
        <div className="display">
          <p>{this.state.display}</p>  
        </div> 

        <div className="buttons-container">
          <div className={ styles['parent-of-buttons'] } >

            {/* Row 1 */}
            <div className={ styles['btn-group'] }>
              <button type="button" className={ styles['lg-button']} onClick={this.allClear}>AC</button>
              <button type="button" className={ styles['lg-button']} onClick={this.reverseSign}>+/-</button>
              <button type="button" className={ styles['lg-button']} onClick={this.applyModulus}>%</button>
              <button type="button" className={ styles['y-button']} onClick={this.applyDevision}>÷</button>
            </div>
            
            {/* Row 2 */}
            <div className={ styles['btn-group'] }>
              <button type="button" className={ styles['dg-button']} onClick={ () =>{ this.enterNumber(7) }} >7</button>
              <button type="button" className={ styles['dg-button']} onClick={ () =>{ this.enterNumber(8) } }>8</button>
              <button type="button" className={ styles['dg-button']} onClick={ () =>{ this.enterNumber(9) } } >9</button>
              <button type="button" className={ styles['y-button']}  onClick={this.applyMultiplication}>X</button>
            </div>
            <div className={ styles['btn-group'] }>
              <button type="button" className={ styles['dg-button'] }  onClick={() =>{ this.enterNumber(4) }}>4</button>
              <button type="button" className={ styles['dg-button'] } onClick={() =>{ this.enterNumber(5)  }}>5</button>
              <button type="button" className={ styles['dg-button'] } onClick={() =>{ this.enterNumber(6)  }}>6</button>
              <button type="button" className={ styles['y-button']  }  onClick={this.applySubtraction}>-</button>
            </div>

            <div className={ styles['btn-group'] }>
              <button type="button" className={ styles['dg-button']} onClick={() =>{ this.enterNumber(1) }}>1</button>
              <button type="button" className={ styles['dg-button']} onClick={() =>{ this.enterNumber(2) }}>2</button>
              <button type="button" className={ styles['dg-button']} onClick={() =>{ this.enterNumber(3) }}>3</button>
              <button type="button" className={ styles['y-button']} onClick={this.applyAddition}>+</button>
            </div>
            
            <div className={ styles['btn-group'] }>
              <button type="button" className={ styles['dg-button', 'double-long']} onClick={() =>{ this.enterNumber(0) }}>0</button>
              <button type="button" className={ styles['dg-button']} onClick={this.addDecimal}>.</button>
              <button type="button" className={ styles['y-button']} onClick={this.applyEquals}>=</button>
            </div>
            
          </div>
        </div>
      </div>
    )
  }

  applyOperation() {
    debugger; 
    let newDisplay = this.state.display;

    if (this.state.currentOperator === 'addition') {
      newDisplay = this.state.display*1 + 1*this.state.operationNumber
    }
    else if (this.state.currentOperator === 'division') {
      newDisplay = this.state.display*1 % this.state.operationNumber
    }
    else if (this.state.currentOperator === 'multiplication' ) {
      newDisplay = this.state.display*1 * this.state.operationNumber
    }
    else if (this.state.currentOperator === 'subtraction') {
      newDisplay =  1*this.state.operationNumber - this.state.display*1 
    } 
    this.setState({
      display: newDisplay
    })
  }

    

  enterNumber  = (number) => {
    if (this.state.display === 0 || this.state.display === "0") {
      console.log("should run")
      this.state.display = ''
    }

    if (this.state.currentOperator) {
      this.setState({
        operationNumber: this.state.display,
        display: number,
      })
    }

    else if ( !isNaN(this.state.display) || this.state.display === '') {
      console.log("should also run", number)
      number = this.state.display+""+number
      this.setState({
        display: number
      })
    }
    

  }

  allClear = () => {
    this.setState({
      display: 0,
      currentOperator: null,
      operationNumber: null
    })
    console.log("Allclear")
  }

  reverseSign = () => {
    this.setState({
      display: this.state.display*-1
    })

    console.log("Reverse sign")
  }

  applyModulus  = () => {
    this.setState({
      currentOperator: 'modulus'
    })
  }

  applyAddition  = () => {
    
    if (this.state.operationNumber && this.state.currentOperator) {
      this.applyOperation()
    }

    this.setState({
      currentOperator: 'addition'
    })
  }

  applyMultiplication  = () => {
    this.setState({
      currentOperator: 'multiplication'
    })
  }

  applySubtraction  = () => {

    if (this.state.operationNumber && this.state.currentOperator) {
      this.applyOperation()
    }

    this.setState({
      currentOperator: 'subtraction'
    })
  }

  applyDevision = () => {
    this.setState({
      currentOperator: 'division'
    })
  }

  addDecimal  = () => {
  }

  applyEquals = () => {
    console.log("apply equals")
  }

};

// Click Handlers

Calculator.propTypes = {};

Calculator.defaultProps = {

};

export default Calculator;
