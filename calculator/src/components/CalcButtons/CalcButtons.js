import React from 'react';
import PropTypes from 'prop-types';
import styles from './CalcButtons.module.css';

const CalcButtons = () => (
  <div className={styles.CalcButtons}>
    <div class="btn-group">
      <button type="button" class="lg-button">C</button>
      <button type="button" class="lg-button">+/-</button>
      <button type="button" class="lg-button">%</button>
      <button type="button" class="y-button">/</button>
    </div>
    <div class="btn-group">
      <button type="button" class="dg-button">7</button>
      <button type="button" class="dg-button">8</button>
      <button type="button" class="dg-button">9</button>
      <button type="button" class="y-button">X</button>
    </div>
    <div class="btn-group">
      <button type="button" class="dg-button">4</button>
      <button type="button" class="dg-button">5</button>
      <button type="button" class="dg-button">6</button>
      <button type="button" class="y-button">-</button>
    </div>
    <div class="btn-group">
      <button type="button" class="dg-button">1</button>
      <button type="button" class="dg-button">2</button>
      <button type="button" class="dg-button">3</button>
      <button type="button" class="y-button">+</button>
    </div>
    <div class="btn-group">
      <button type="button" class="dg-button-long">0</button>
      <button type="button" class="dg-button">.</button>
      <button type="button" class="y-button">=</button>
    </div>

  </div>
);

CalcButtons.propTypes = {};

CalcButtons.defaultProps = {};

export default CalcButtons;
