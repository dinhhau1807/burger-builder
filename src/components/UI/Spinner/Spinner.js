import React from 'react';

import classes from './Spinner.module.css';

const spinner = () => (
  <div className={classes['Atom-spinner']}>
    <div className={classes['Spinner-inner']}>
      <div className={classes['Spinner-line']}></div>
      <div className={classes['Spinner-line']}></div>
      <div className={classes['Spinner-line']}></div>
      <div className={classes['Spinner-circle']}>&#9679;</div>
    </div>
  </div>
);

export default spinner;
