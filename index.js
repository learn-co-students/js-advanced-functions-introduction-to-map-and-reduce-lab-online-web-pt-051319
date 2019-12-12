const mapToNegativize = function(arr) {
  const negArr = []
  arr.forEach(n => negArr.push(n * (-1)))
  return negArr
};

const mapToNoChange = function(arr) {
  const newArr = []
  arr.forEach(n => newArr.push(n))
  return newArr
};

const mapToDouble = function(arr) {
  const newArr = []
  arr.forEach(n => newArr.push(n * 2))
  return newArr
};

const mapToSquare = function(arr) {
  const newArr = []
  arr.forEach(n => newArr.push(n * n))
  return newArr
};

const reduceToTotal = function(arr, start=0) {
  const collectArr = start
  arr.forEach(n => collectArr += n )
  return collectArr
};
