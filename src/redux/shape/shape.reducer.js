import { shape } from "prop-types";

const { default: ShapeTypes } = require("./shape.types");

const INITIAL_STATE = [];
function randomColor() {
    return Math.floor(Math.random() * 16777215).toString(16);
}
function getRandomColor() {
    let colorValues = ["red", "blue", "green", "yellow"];
    return colorValues[Math.floor(Math.random() * colorValues.length)];
}
let countID = 0;
const shapeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ShapeTypes.ADD_RECTANGLE: {
            const createRectangle = {
                x: Math.random(20) * 100,
                y: Math.random(20) * 100,
                width: 100,
                height: 100,
                // fill: `${getRandomColor()}`,
                fill: `#${randomColor()}`,
                id: ++countID,
                name: `Rectangle ${countID}`,
            };
            console.log(randomColor);
            return [
                ...state,
                // action.payload
                createRectangle,
            ];
        }
        case ShapeTypes.DELETE_RECTANGLE: {
            return state.filter(shape => shape.id !== action.payload.id)
        }

        default:
            return state;
    }
};

export default shapeReducer;
