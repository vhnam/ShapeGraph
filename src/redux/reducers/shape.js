import Konva from 'konva';

import {
  ADD_RECTANGLE,
  DELETE_RECTANGLE,
  CHANGE_RECTANGLE,
} from '../types/shape';

const initialShapes = [];

const shapesReducer = (state = initialShapes, action) => {
  switch (action.type) {
    case ADD_RECTANGLE: {
      const id = Date.now();

      return [
        ...state,
        {
          x: Math.random(20) * 100,
          y: Math.random(20) * 100,
          width: 100,
          height: 100,
          fill: Konva.Util.getRandomColor(),
          id: id,
          name: `Rectangle ${id}`,
        },
      ];
    }
    case CHANGE_RECTANGLE: {
      let index = 0;
      const selectedShape = state.find((shape, i) => {
        if (shape.id === action.payload.id) {
          index = i;
          return shape;
        }

        return undefined;
      });

      if (selectedShape) {
        state[index] = action.payload.data;
      }

      return [...state];
    }
    case DELETE_RECTANGLE: {
      return state.filter((shape) => shape.id !== action.payload.id);
    }
    default:
      return state;
  }
};

export default shapesReducer;
