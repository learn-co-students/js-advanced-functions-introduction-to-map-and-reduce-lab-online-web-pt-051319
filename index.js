// Return array with opposite values of input array
function mapToNegativize(sourceArray) {
    let newArr = []
    sourceArray.forEach(el => newArr.push(-el))
    return newArr
    // like return sourceArray.map(el => -el)
  }
  
  // Return original array
  function mapToNoChange(sourceArray) {
    return sourceArray
  }
  
  // Return array with doubled values of input array 
  function mapToDouble(sourceArray) {
    let newArr = []
    sourceArray.forEach(el => newArr.push(el * 2))
    return newArr
    // like return sourceArray.map(el => el * 2)
  }
  
  // Return array with squared values of input array 
  function mapToSquare(sourceArray) {
    let newArr = []
    sourceArray.forEach(el => newArr.push(el ** 2))
    return newArr
    // like return sourceArray.map(el => el ** 2)
  }
  
  // Return running total
  function reduceToTotal(sourceArray, startingPoint = 0) {
    let total = startingPoint
    sourceArray.forEach(el => total += el)
    return total
    // like return sourceArray.reduce(function(total, el){ return el + total}, startingPoint)
  }
  
  // Return true if all elements are truthy; else return false
  function reduceToAllTrue(sourceArray) {
    let truthy = true
    sourceArray.forEach(el => {
      !!el ? undefined: truthy = false
    })
    return truthy
    // like return sourceArray.every(el => !!el)
  }
  
  // Return true if any element truthy; else return false 
  function reduceToAnyTrue(sourceArray) {
    let truthy = false
    sourceArray.forEach(el => {
      !!el ? truthy = true : undefined
    })
    return truthy
    // like return sourceArray.some(el => !!el)
  }