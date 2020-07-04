import React from 'react';
import PropTypes from 'prop-types';

import styles from './TextField.module.css';

const TextField = ({label, ...others}) => (
  <div className={styles.container}>
    <input className={styles.input} {...others} />
    <span className={styles.label}>{label}</span>
  </div>
);

TextField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  defaultValue: PropTypes.string,
};

export default TextField;
