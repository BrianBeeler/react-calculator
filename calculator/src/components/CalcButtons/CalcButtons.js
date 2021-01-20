import React from 'react';
import PropTypes from 'prop-types';
import styles from './CalcButtons.module.css';

const CalcButtons = () => (
  <div className={ styles['parent-of-buttons'] } >
    <div className={ styles['btn-group'] }>
      <button type="button" className={ styles['lg-button'] }>C</button>
      <button type="button" className={ styles['lg-button'] }>+/-</button>
      <button type="button" className={ styles['lg-button'] }>%</button>
      <button type="button" className={ styles['y-button']  }>/</button>
    </div>
    <div className={ styles['btn-group'] }>
      <button type="button" className={ styles['dg-button'] }>7</button>
      <button type="button" className={ styles['dg-button'] } >8</button>
      <button type="button" className={ styles['dg-button'] }>9</button>
      <button type="button" className={ styles['y-button'] }>X</button>
    </div>
    <div className={ styles['btn-group'] }>
      <button type="button" className={ styles['dg-button'] }>4</button>
      <button type="button" className={ styles['dg-button'] }>5</button>
      <button type="button" className={ styles['dg-button'] }>6</button>
      <button type="button" className={ styles['y-button'] }>-</button>
    </div>
    <div className={ styles['btn-group'] }>
      <button type="button" className={ styles['dg-button']}>1</button>
      <button type="button" className={ styles['dg-button']}>2</button>
      <button type="button" className={ styles['dg-button']}>3</button>
      <button type="button" className={ styles['y-button']}>+</button>
    </div>
    <div className={ styles['btn-group'] }>
      <button type="button" className={ styles['dg-button']}>0</button>
      <button type="button" className={ styles['dg-button']}>.</button>
      <button type="button" className={ styles['y-button']}>=</button>
    </div>

  </div>
);




CalcButtons.propTypes = {};

CalcButtons.defaultProps = {};

export default CalcButtons;
