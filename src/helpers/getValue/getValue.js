const getValue = (shape, key) => {
  if (shape && shape[key]) {
    return shape[key].toString();
  }

  return '';
};

export default getValue;
