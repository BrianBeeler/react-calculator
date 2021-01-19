import React from 'react';
import PropTypes from 'prop-types';
import styles from './CalcButtons.module.css';

const CalcButtons = () => (
  <div className={styles.CalcButtons}>
    <div class="btn-group">
      <button type="button" class="lg-button">AC</button>
      <button type="button" class="lg-button">AC</button>
      <button type="button" class="lg-button">AC</button>
      <button type="button" class="y-button">AC</button>
    </div>
    <div class="btn-group">
      <button type="button" class="dg-button">AC</button>
      <button type="button" class="dg-button">AC</button>
      <button type="button" class="dg-button">AC</button>
      <button type="button" class="y-button">AC</button>
    </div>
    <div class="btn-group">
      <button type="button" class="dg-button">AC</button>
      <button type="button" class="dg-button">AC</button>
      <button type="button" class="dg-button">AC</button>
      <button type="button" class="y-button">AC</button>
    </div>
    <div class="btn-group">
      <button type="button" class="dg-button">AC</button>
      <button type="button" class="dg-button">AC</button>
      <button type="button" class="dg-button">AC</button>
      <button type="button" class="y-button">AC</button>
    </div>
    <div class="btn-group">
      <button type="button" class="dg-button-long">AC</button>
      <button type="button" class="dg-button">AC</button>
      <button type="button" class="y-button">AC</button>
    </div>

  </div>
);

CalcButtons.propTypes = {};

CalcButtons.defaultProps = {};

export default CalcButtons;
