// Your code here
function mapToNegativize(sourceArray) {
    return sourceArray.map((e) => {return e * -1})
  }

  function mapToNoChange(dune) {
      return dune.map((e) => {return e })
  }

  function mapToDouble(sourceArray) {
      return sourceArray.map((e) => {return e * 2})
  }

  function mapToSquare(sourceArray) {
      return sourceArray.map((e) => { return e * e})
  }

  function reduceToTotal(sourceArray, startingPoint = 0) {
    return sourceArray.reduce((t, e) => {return t + e}, startingPoint);
  }

  function reduceToAllTrue(sourceArray) {
    return sourceArray.reduce((t, e) => {return t && !!e}, true);
  }

  function reduceToAnyTrue(sourceArray) {
    return sourceArray.reduce((t, e) => {return t || !!e}, false);
  }
  

