import React, {useState, useCallback, useEffect} from 'react';
import {Stage, Layer} from 'react-konva';
import {useDispatch, useSelector} from 'react-redux';

import {addRectangle, changeRectangle} from '../../redux/actions/shape';
import {getShapes} from '../../redux/selectors/shape';

import Figures from '../../components/Figures';
import SideBar from '../../components/SideBar';
import Rectangle from '../../components/Rectangle';

import styles from './Workplace.module.css';

const Workplace = () => {
  const dispatch = useDispatch();
  const shapes = useSelector(getShapes());

  const [selectedShapeId, setSelectedShapeId] = useState();
  const [selectedShape, setSelectedShape] = useState();

  const checkDeselect = useCallback((e) => {
    const clickedOnEmpty = e.target === e.target.getStage();

    if (clickedOnEmpty) {
      setSelectedShapeId(undefined);
      setSelectedShape(undefined);
    }
  }, []);

  const handleAddReactangle = useCallback(() => {
    dispatch(addRectangle());
  }, [dispatch]);

  const handleSelectRectangle = useCallback((rectanlgeId) => {
    setSelectedShapeId(rectanlgeId);
  }, []);

  const handleChangeRectangle = useCallback(
    (attrs) => {
      dispatch(changeRectangle(selectedShapeId, attrs));
      setSelectedShape({
        ...attrs,
        x: parseInt(attrs.x),
        y: parseInt(attrs.y),
        width: parseInt(attrs.width),
        height: parseInt(attrs.height),
      });
    },
    [dispatch, selectedShapeId],
  );

  useEffect(() => {
    if (selectedShapeId) {
      const shape = shapes.find((s) => s.id === selectedShapeId);

      if (shape) {
        setSelectedShape({
          ...shape,
          x: parseInt(shape.x),
          y: parseInt(shape.y),
          width: parseInt(shape.width),
          height: parseInt(shape.height),
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedShapeId]);

  return (
    <div className={styles.container}>
      <SideBar onAddReactangle={handleAddReactangle} />

      <main className={styles.main}>
        <Stage
          width={window.innerWidth * 0.6}
          height={window.innerHeight}
          onClick={checkDeselect}
          onTouchStart={checkDeselect}
        >
          <Layer>
            {shapes.map((rect) => (
              <Rectangle
                key={rect.id}
                shapeProps={rect}
                isSelected={rect.id === selectedShapeId}
                onSelect={handleSelectRectangle.bind(null, rect.id)}
                onChange={handleChangeRectangle}
              />
            ))}
          </Layer>
        </Stage>
      </main>

      <Figures shape={selectedShape} />
    </div>
  );
};

export default Workplace;
