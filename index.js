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

function reduceToTotal(src, startingPoint=0) {
  let total = startingPoint
  for (let i = 0; i < src.length; i++ ) {
    total = total + src[i]
  }
  return total
}

function reduceToAllTrue(src) {
  for (let i = 0; i < src.length; i++ ) {
    if (!src[i]) return false
  }
  return true
}

function reduceToAnyTrue(src) {
  for (let i = 0; i < src.length; i++ ) {
    if (src[i]) return true
  }
  return false
}
