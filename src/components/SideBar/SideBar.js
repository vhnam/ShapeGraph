import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';

import {deleteRectangle} from '../../redux/actions/shape';
import {getShapes} from '../../redux/selectors/shape';

import styles from './SideBar.module.css';

const SideBar = ({onAddReactanle}) => {
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
        <button onClick={onAddReactanle} className={styles.btnAdd}>
          &#43;
        </button>
      </div>
      <ul>
        {shapes.map((shape, id) => (
          <li key={id}>
            {shape.name}
            <button onClick={handleDeleteRectangle.bind(null, shape)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

SideBar.propTypes = {
  onAddReactanle: PropTypes.func,
};

export default SideBar;
