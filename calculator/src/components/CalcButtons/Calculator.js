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
      operationNumber: null,
      firstClick: true
    }
  }


  render() {
    return (
      <div>
        <div className="display">
          <p>{this.state.display}</p>  
        </div> 
        <div className={ styles["phone-bg-color"] } style={{
          position: "absolute",
          width: "450px",
          height: "970px",
          backgroundColor: "azure",
          zIndex: "-1",
          top: "15px",
          left: "24px",
          borderRadius: "70px",
        }}></div>
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

  
  /**
   * Helper function that applies the stored operation, and changes the state
   * 
   */


  applyOperation() {
 

    let newDisplay = this.state.display;

    if (this.state.currentOperator === 'addition') {
      newDisplay = this.state.display*1 + 1*this.state.operationNumber
    }
    else if (this.state.currentOperator === 'division') {
      newDisplay =  (1*this.state.operationNumber) / (this.state.display*1)
    }
    else if (this.state.currentOperator === 'multiplication' ) {
      newDisplay = (this.state.display*1) * (1*this.state.operationNumber)
    }
    else if (this.state.currentOperator === 'subtraction') {
      newDisplay =  1*this.state.operationNumber - 1*this.state.display 
    } 

    else if (this.state.currentOperator === 'modulus') {
      newDisplay = (1*this.state.operationNumber) % (1*this.state.display)
    }
    

    newDisplay = this.checkOverflow(newDisplay)


    // Floating point errors
    if (newDisplay % 1 < 0.00000001) {
      debugger;
      newDisplay = Math.round(newDisplay)
    }

    this.setState({
      display: newDisplay,
      firstClick: true
    })
  }

  /**
   * The functionality used when a number key is pressed, changes state
   *  
   * @param {*} number - the number pressed on the calculator
   */  

  enterNumber  = (number) => {

    if (this.state.display === 0 || this.state.display === "0") {
      this.state.display = ''
    }

    if (this.state.currentOperator && this.state.firstClick) {
      this.setState({
        operationNumber: this.state.display,
        display: number,
        firstClick: false
      })



    }

    else if ( !isNaN(this.state.display) || this.state.display === '' ) {
      number = this.state.display+""+number
      number = this.checkOverflow(number)
      this.setState({
        display: number
      })
    }
    

  }

  /**
   * Helper to change display to an overflow area if the display is too long
   * @param {*} display 
   */

  checkOverflow = (display) => {
    if ( (display+"").length > 15 ) {
      return "Overflow Error"
    }
    else {
      return display
    }
  }

  /**
   * Resets the contents of calculator display
   */

  allClear = () => {
    this.setState({
      display: 0,
      currentOperator: null,
      operationNumber: null,
      firstClick: true
    })
    console.log("Allclear")
  }

  /**
   * This is the funcationality for the minus sign on the calculator
   */

  reverseSign = () => {
    let display = this.state.display*-1
    display = this.checkOverflow(display)

    this.setState({
      display: display
    })

  }

  /**
   *  This is the functionality for the modulus button on the calculator
   */

  applyModulus  = () => {

    if (this.state.operationNumber && this.state.currentOperator) {
      this.applyOperation()
    }

    this.setState({
      currentOperator: 'modulus'
    })
  }

  /**
   * This is the functionality for the addition button on the calculator
   */

  applyAddition  = () => {

    if (this.state.operationNumber && this.state.currentOperator) {
      this.applyOperation()
    }

    this.setState({
      currentOperator: 'addition'
    })
  }


  /**
   *  This is the functionality for multiplication button on the calculator
   */

  applyMultiplication  = () => {

    if (this.state.operationNumber && this.state.currentOperator) {
      this.applyOperation()
    }

    this.setState({
      currentOperator: 'multiplication'
    })
  }


  /**
   * This is the functionality for the subtraction button, on the calculator
   */

  applySubtraction  = () => {

    if (this.state.operationNumber && this.state.currentOperator) {
      this.applyOperation()
    }

    this.setState({
      currentOperator: 'subtraction'
    })
  }

  /**
   * This is the functionality for the division button on the calculator
   */

  applyDevision = () => {

    if (this.state.operationNumber && this.state.currentOperator) {
      this.applyOperation()
    }

    this.setState({
      currentOperator: 'division'
    })
  }

  /**
   * This is the function for adding a decimal point to the display
   */

  addDecimal  = () => {
    if (!isNaN(this.state.display)) {
      if ( !(this.state.display+"").includes(".")) {
        let display = this.state.display+''+'.'
        display = this.checkOverflow(display)
        
        this.setState({
          display: display
        })
      }
    }
  }

  /**
   * This is the handler for when the equal sign is clicked
   */
  applyEquals = () => {

    if (this.state.operationNumber && this.state.currentOperator) {
      this.applyOperation()
    }
    this.setState({
      currentOperator: null,
      operationNumber: null,
    })
\
  }

};



Calculator.propTypes = {};

Calculator.defaultProps = {

};

export default Calculator;
