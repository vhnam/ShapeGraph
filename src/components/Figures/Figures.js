import React from 'react';
import PropTypes from 'prop-types';

import TextField from '../TextField';

import styles from './Figures.module.css';

const Figures = ({x, y, w, h}) => (
  <div className={styles.container}>
    <div className={styles.wrapper}>
      <TextField label="X" defaultValue={x.toString()} disabled={true} />
    </div>
    <div className={styles.wrapper}>
      <TextField label="Y" defaultValue={y.toString()} disabled={true} />
    </div>
    <div className={styles.wrapper}>
      <TextField label="W" defaultValue={w.toString()} disabled={true} />
    </div>
    <div className={styles.wrapper}>
      <TextField label="H" defaultValue={h.toString()} disabled={true} />
    </div>
  </div>
);

Figures.propTypes = {
  x: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  y: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  w: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  h: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Figures;
