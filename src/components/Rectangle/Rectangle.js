import React, {Fragment, useRef, useEffect, useCallback} from 'react';
import PropTypes from 'prop-types';
import {Rect, Transformer} from 'react-konva';
import {throttle} from 'lodash';

const Rectangle = ({shapeProps, onSelect, isSelected, onChange}) => {
  const rectangleRef = useRef();
  const transformRef = useRef();

  const handleResize = useCallback((oldBox, newBox) => {
    if (newBox.width < 5 || newBox.height < 5) {
      return oldBox;
    }
    return newBox;
  }, []);

  const handleDrag = useCallback(
    (e) => {
      onChange({
        ...shapeProps,
        x: e.target.x(),
        y: e.target.y(),
      });
    },
    [onChange, shapeProps],
  );

  const handleTransform = useCallback(
    (e) => {
      const node = rectangleRef.current;
      const scaleX = node.scaleX();
      const scaleY = node.scaleY();

      node.scaleX(1);
      node.scaleY(1);

      onChange({
        ...shapeProps,
        x: node.x(),
        y: node.y(),
        width: Math.max(5, node.width() * scaleX),
        height: Math.max(node.height() * scaleY),
      });
    },
    [onChange, shapeProps],
  );

  useEffect(() => {
    if (isSelected) {
      transformRef.current.nodes([rectangleRef.current]);
      transformRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <Fragment>
      <Rect
        {...shapeProps}
        ref={rectangleRef}
        draggable
        onClick={onSelect}
        onTap={onSelect}
        onDragEnd={handleDrag}
        onDragMove={throttle(handleDrag, 100)}
        onTransformEnd={handleTransform}
        onTransform={throttle(handleTransform, 100)}
      />

      {isSelected && (
        <Transformer ref={transformRef} boundBoxFunc={handleResize} />
      )}
    </Fragment>
  );
};

Rectangle.propTypes = {
  shapeProps: PropTypes.object,
  onSelect: PropTypes.func,
  isSelected: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Rectangle;
