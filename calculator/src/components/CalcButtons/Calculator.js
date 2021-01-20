import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Calculator.module.css';
import { getElementError } from '@testing-library/react';

class Calculator extends Component {

  constructor() {
    super()
    this.state = {
      display: "None"
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
              <button type="button" className={ styles['lg-button']} onClick={allClear}>AC</button>
              <button type="button" className={ styles['lg-button']} onClick={reverseSign}>+/-</button>
              <button type="button" className={ styles['lg-button']} onClick={applyModulus}>%</button>
              <button type="button" className={ styles['y-button']} onClick={applyDevision}>÷</button>
            </div>
            
            {/* Row 2 */}
            <div className={ styles['btn-group'] }>
              <button type="button" className={ styles['dg-button']} onClick={ () =>{ enterNumber(7) }} >7</button>
              <button type="button" className={ styles['dg-button']} onClick={ () =>{ enterNumber(8) } }>8</button>
              <button type="button" className={ styles['dg-button']} onClick={ () =>{ enterNumber(9) } } >9</button>
              <button type="button" className={ styles['y-button']}  onClick={applyMultiplication}>X</button>
            </div>
            <div className={ styles['btn-group'] }>
              <button type="button" className={ styles['dg-button'] }  onClick={() =>{ enterNumber(4) }}>4</button>
              <button type="button" className={ styles['dg-button'] } onClick={() =>{ enterNumber(5)  }}>5</button>
              <button type="button" className={ styles['dg-button'] } onClick={() =>{ enterNumber(6)  }}>6</button>
              <button type="button" className={ styles['y-button']  }  onClick={applySubtraction}>-</button>
            </div>

            <div className={ styles['btn-group'] }>
              <button type="button" className={ styles['dg-button']} onClick={() =>{ enterNumber(1) }}>1</button>
              <button type="button" className={ styles['dg-button']} onClick={() =>{ enterNumber(2) }}>2</button>
              <button type="button" className={ styles['dg-button']} onClick={() =>{ enterNumber(3) }}>3</button>
              <button type="button" className={ styles['y-button']} onClick={applyAddition}>+</button>
            </div>
            
            <div className={ styles['btn-group'] }>
              <button type="button" className={ styles['dg-button', 'double-long']} onClick={() =>{ enterNumber(0) }}>0</button>
              <button type="button" className={ styles['dg-button']} onClick={addDecimal}>.</button>
              <button type="button" className={ styles['y-button']} onClick={applyEquals}>=</button>
            </div>
            
          </div>
        </div>
      </div>
    )
  }
};

// Click Handlers

const allClear = () => {
  console.log("Allclear")
}
const reverseSign = () => {
  console.log("Reverse sign")
}
const applyModulus  = () => {
  console.log("Apply Mod")
}
const applyAddition  = () => {
  console.log("Apply addition")
}
const enterNumber  = (number) => {
  console.log("Enter number",number)
}
const applyMultiplication  = () => {
  console.log("Apply multiplication")
}
const applySubtraction  = () => {
  console.log("apply subtraction")
}

const applyDevision = () => {
  console.log("apply devision")
}

const addDecimal  = () => {
  console.log("add decimal")
}
const applyEquals = () => {
  console.log("apply equals")
}


Calculator.propTypes = {};

Calculator.defaultProps = {

};

export default Calculator;
