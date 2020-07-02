import React from "react";
import "./SiteBarLeft.css";
import { deleteRectangle } from "../../redux/shape/shape.actions";
import { connect } from "react-redux";

const SiteBarLeft = (props) => {
    return (
            <ul>
                {props.shapes.map((shape, id) => {
                    return (
                        <div key={id}>
                            {shape.name}
                            <button onClick={() => props.deleteRectangle(shape)}>
                                X
                            </button>
                        </div>
                    );
                })}
            </ul>
        
    );
};

const mapStateToProps = (state) => ({
    shapes: state.shape,
});

const mapDispatchToProps = (dispatch) => ({
    deleteRectangle: (data) => dispatch(deleteRectangle(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SiteBarLeft);
