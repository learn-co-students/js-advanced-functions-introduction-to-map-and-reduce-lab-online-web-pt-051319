// Your code here
// --------map--------
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

// --------reduce--------
function reduceToTotal(sourceArray, startingPoint = 0) {
    let toTotal = startingPoint
    for (let i = 0; i < sourceArray.length; i++) {
        toTotal = sourceArray[i] + toTotal
    }
    return toTotal
}

function reduceToAllTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i] == false) {
            return false
        }
    }
    return true
}

function reduceToAnyTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
       if (sourceArray[i] == true) {
           return true
       }
    }
    return false
}