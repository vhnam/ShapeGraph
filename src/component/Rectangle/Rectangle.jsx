import React from "react";
import { connect } from "react-redux";
import { addRectangle } from "../../redux/shape/shape.actions";
import { Rect, Transformer } from "react-konva";
import "./Rectangle.css";

const Rectangle = ({ shapeProps, isSelected, onSelect, onChange }) => {
    const shapeRef = React.useRef();
    const trRef = React.useRef();

    React.useEffect(() => {
        if (isSelected) {
            // we need to attach transformer manually
            trRef.current.setNode(shapeRef.current);
            trRef.current.getLayer().batchDraw();
        }
    }, [isSelected]);

    return (
        // <div className="mid">
        <React.Fragment>
            <Rect
                onClick={onSelect}
                onTap={onSelect}
                ref={shapeRef}
                {...shapeProps}
                draggable
                // onDragEnd={e => {
                //   onChange({
                //     ...shapeProps,
                //     x: e.target.x(),
                //     y: e.target.y()
                //   });
                // }}
                onTransform={(e) => {
                    console.log(e);
                }}
                // onTransformEnd={e => {
                //   // transformer is changing scale of the node
                //   // and NOT its width or height
                //   // but in the store we have only width and height
                //   // to match the data better we will reset scale on transform end
                //   const node = shapeRef.current;
                //   const scaleX = node.scaleX();
                //   const scaleY = node.scaleY();

                //   // we will reset it back
                //   node.scaleX(1);
                //   node.scaleY(1);
                //   onChange({
                //     ...shapeProps,
                //     x: node.x(),
                //     y: node.y(),
                //     // set minimal value
                //     width: Math.max(5, node.width() * scaleX),
                //     height: Math.max(node.height() * scaleY)
                //   });
                // }}
            />
            {isSelected && (
                <Transformer
                    ref={trRef}
                    boundBoxFunc={(oldBox, newBox) => {
                        // limit resize
                        if (newBox.width < 5 || newBox.height < 5) {
                            return oldBox;
                        }
                        return newBox;
                    }}
                />
            )}
        </React.Fragment>
        // </div>
    );
};

const mapStateToProps = (state) => ({
    stateShape: state.shape,
});

const mapDispatchToProps = (dispatch) => ({
    dispatchAddRec: (data) => dispatch(addRectangle(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Rectangle);
