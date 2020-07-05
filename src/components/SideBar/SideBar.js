import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';

import {deleteRectangle} from '../../redux/actions/shape';
import {getShapes} from '../../redux/selectors/shape';

import getValue from '../../helpers/getValue';

import styles from './SideBar.module.css';

const SideBar = ({onAddReactangle}) => {
  const dispatch = useDispatch();

  const shapes = useSelector(getShapes());

  const handleDeleteRectangle = useCallback(
    (rectangle) => {
      dispatch(deleteRectangle(rectangle));
    },
    [dispatch],
  );

  return (
    <div className={styles.container}>
      <div className={styles.action}>
        <button onClick={onAddReactangle} className={styles.btnAdd}>
          &#43;
        </button>
      </div>
      <ul className={styles.list}>
        {shapes.map((shape) => (
          <li key={shape.id} className={styles.item}>
            <span
              className={styles.color}
              style={{
                backgroundColor: getValue(shape, 'fill'),
              }}
            />
            <button
              className={styles.btnRemove}
              onClick={handleDeleteRectangle.bind(null, shape)}
            >
              &times;
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

SideBar.propTypes = {
  onAddReactangle: PropTypes.func,
};

export default SideBar;
