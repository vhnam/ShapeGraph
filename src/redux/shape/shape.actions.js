import ShapeTypes from "./shape.types";

export const addRectangle = () => ({
    
    type: ShapeTypes.ADD_RECTANGLE,
    // payload: data
})

export const changeRectangle = (data) => ({
    
    type: ShapeTypes.CHANGE_RECTANGLE,
    // payload: data
})

export const deleteRectangle = (shape) => ({
    type: ShapeTypes.DELETE_RECTANGLE,
    payload: shape
})
