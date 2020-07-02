import React from "react";
import "./App.css";
import Rectangle from "./component/Rectangle/Rectangle";
import { Stage, Layer, Rect, Transformer } from "react-konva";
import { ReactReduxContext, Provider } from "react-redux";
import FiguresRight from "./component/FiguresRight/FiguresRight";
import SiteBarLeft from "./component/SiteBarLeft/SiteBarLeft";
import { connect } from "react-redux";
import { addRectangle } from "../src/redux/shape/shape.actions";

function App(props) {
    // const [rectangles, setRectangles] = React.useState([]);
    const [selectedId, selectShape] = React.useState(null);

    const checkDeselect = (e) => {
        // deselect when clicked on empty area
        const clickedOnEmpty = e.target === e.target.getStage();
        if (clickedOnEmpty) {
            selectShape(null);
        }
    };

    // console.log("after: ", props.stateShape)

    return (
        <div className='layout'>
            <div className='SiteBarLeft col-3'>
                <SiteBarLeft />
            </div>

            <div className='Mid'>
                <button onClick={props.dispatchAddRec}>+</button>
                <ReactReduxContext.Consumer>
                    {({ store }) => (
                        <Stage
                            width={window.innerWidth}
                            height={window.innerHeight}
                            onMouseDown={checkDeselect}
                            onTouchStart={checkDeselect}
                        >
                            <Provider store={store}>
                                <Layer class="layer">
                                    {props.stateShape.map((rect, i) => {
                                        return (
                                            <Rectangle
                                                key={i}
                                                shapeProps={rect}
                                                isSelected={
                                                    rect.id === selectedId
                                                }
                                                onSelect={() => {
                                                    selectShape(rect.id);
                                                }}
                                                onChange={(newAttrs) => {
                                                    const rects = props.stateShape.slice();
                                                    rects[i] = newAttrs;
                                                    // setRectangles(rects);
                                                }}
                                            />
                                        );
                                    })}
                                </Layer>
                            </Provider>
                        </Stage>
                    )}
                </ReactReduxContext.Consumer>
            </div>
            <div>
                <FiguresRight />
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    stateShape: state.shape,
});

const mapDispatchToProps = (dispatch) => ({
    // dispatchAddRec: (data) => dispatch(addRectangle(data))
    dispatchAddRec: () => dispatch(addRectangle()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
