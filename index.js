function mapToNegativize(sourceArray) {
  return sourceArray.map(i => -i);
}

function mapToNoChange(sourceArray) {
  return sourceArray.map(i => i);
}

function mapToDouble(sourceArray) {
  return sourceArray.map(i => i * 2);
}

function mapToSquare(sourceArray) {
  return sourceArray.map(i => i * i);
}

function reduceToTotal(sourceArray, startingPoint = 0) {
  return sourceArray.reduce(function(total, num) {
    return total + num;
  }, startingPoint);
}
function reduceToAllTrue(sourceArray) {
  let output = true;
  sourceArray.forEach(function(i) {
    if (!i) {
      output = false;
    }
  });
  return output;
}
function reduceToAnyTrue(sourceArray) {
  let output = false;
  sourceArray.forEach(function(i) {
    if (i) {
      output = true;
    }
  });
  return output;
}
