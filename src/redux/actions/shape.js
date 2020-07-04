import {
  ADD_RECTANGLE,
  CHANGE_RECTANGLE,
  DELETE_RECTANGLE,
} from '../types/shape';

export const addRectangle = () => ({
  type: ADD_RECTANGLE,
});

export const changeRectangle = (id, data) => ({
  type: CHANGE_RECTANGLE,
  payload: {id, data},
});

export const deleteRectangle = (shape) => ({
  type: DELETE_RECTANGLE,
  payload: shape,
});
