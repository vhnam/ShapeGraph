import React, {useCallback} from 'react';
import PropTypes from 'prop-types';

import getValue from '../../helpers/getValue';

import TextField from '../TextField';

import styles from './Figures.module.css';

const Figures = ({shape}) => {
  const getValueFromShape = useCallback(
    (key) => {
      return getValue(shape, key);
    },
    [shape],
  );

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <TextField
          label="X"
          defaultValue={getValueFromShape('x')}
          disabled={true}
        />
      </div>
      <div className={styles.wrapper}>
        <TextField
          label="Y"
          defaultValue={getValueFromShape('y')}
          disabled={true}
        />
      </div>
      <div className={styles.wrapper}>
        <TextField
          label="W"
          defaultValue={getValueFromShape('width')}
          disabled={true}
        />
      </div>
      <div className={styles.wrapper}>
        <TextField
          label="H"
          defaultValue={getValueFromShape('height')}
          disabled={true}
        />
      </div>
      <div className={styles.wrapper}>
        <div className="row">
          <div className="col-3">
            <div
              className={styles.color}
              style={{
                backgroundColor: getValueFromShape('fill'),
              }}
            />
          </div>
          <div className="col-9">
            <TextField
              defaultValue={getValueFromShape('fill')}
              disabled={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Figures.propTypes = {
  shape: PropTypes.object,
};

export default Figures;
