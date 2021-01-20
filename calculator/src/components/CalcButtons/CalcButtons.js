import React from 'react';
import PropTypes from 'prop-types';
import styles from './CalcButtons.module.css';
import { getElementError } from '@testing-library/react';

const CalcButtons = () => (
  <div className={ styles['parent-of-buttons'] } >
    <div className={ styles['btn-group'] }>
      <button type="button" className={ styles['lg-button']} onClick={allClear}>AC</button>
      <button type="button" className={ styles['lg-button']} onClick={reverseSign}>+/-</button>
      <button type="button" className={ styles['lg-button']} onClick={applyModulus}>%</button>
      <button type="button" className={ styles['y-button']} onClick={applyAddition}>÷</button>
    </div>
    <div className={ styles['btn-group'] }>
      <button type="button" className={ styles['dg-button']} onClick={enterNumber} }>7</button>
      <button type="button" className={ styles['dg-button']} onClick={enterNumber } } >8</button>
      <button type="button" className={ styles['dg-button']} onClick={enterNumber } }>9</button>
      <button type="button" className={ styles['y-button']}  onClick={applyMultiplication }>X</button>
    </div>
    <div className={ styles['btn-group'] }>
      <button type="button" className={ styles['dg-button'] }  onClick={enterNumber}>4</button>
      <button type="button" className={ styles['dg-button'] } onClick={enterNumber}>5</button>
      <button type="button" className={ styles['dg-button'] } onClick={enterNumber}>6</button>
      <button type="button" className={ styles['y-button']  }  onClick={applySubtraction()}>-</button>
    </div>
    <div className={ styles['btn-group'] }>
      <button type="button" className={ styles['dg-button']} onClick={enterNumber}>1</button>
      <button type="button" className={ styles['dg-button']} onClick={enterNumber}>2</button>
      <button type="button" className={ styles['dg-button']} onClick={enterNumber}>3</button>
      <button type="button" className={ styles['y-button']} onClick={applyAddition}>+</button>
    </div>
    <div className={ styles['btn-group'] }>
      <button type="button" className={ styles['dg-button']} onClick={enterNumber}>0</button>
      <button type="button" className={ styles['dg-button']} onClick={addDecimal}>.</button>
      <button type="button" className={ styles['y-button']} onClick={applyEquals}>=</button>
    </div>
  </div>
);




CalcButtons.propTypes = {};

CalcButtons.defaultProps = {};

export default CalcButtons;
