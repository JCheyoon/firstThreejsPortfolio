const DirectionOffset = ({ forward, backward, left, right }) => {
  let directOffset = 0; //w (center or starting point)
  if (forward) {
    if (left) {
      directOffset = Math.PI / 4;
    } else if (right) {
      directOffset = -Math.PI / 4;
    }
  } else if (backward) {
    if (left) {
      directOffset = Math.PI / 4 + Math.PI / 2;
    } else if (right) {
      directOffset = -Math.PI / 4 - Math.PI / 2;
    } else {
      directOffset = Math.PI;
    }
  } else if (left) {
    directOffset = Math.PI / 2;
  } else if (right) {
    directOffset = -Math.PI / 2;
  }
  return directOffset;
};

export default DirectionOffset;
