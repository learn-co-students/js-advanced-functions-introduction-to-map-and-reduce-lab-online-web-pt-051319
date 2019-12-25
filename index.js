// Your code here
// function mapToNegativize(sourceArray) {
//     let newArray = []
//    sourceArray.forEach(negativize);

//    function negativize(item) {
//     newArray.push(item*(-1))
//    }
//    return newArray
// }

function mapToNegativize(sourceArray) {
    let newArray = []
    for (let i = 0; i < sourceArray.length; i++) {
        newArray.push(sourceArray[i] * -1)
    }
    return newArray
}

function mapToNoChange(sourceArray) {
    let copySourceArray = [...sourceArray]
    return copySourceArray
}

function mapToDouble(sourceArray) {
    let newArray = []
   sourceArray.forEach(double);

   function double(item) {
    newArray.push(item*2)
   }
   return newArray
}

function mapToSquare(sourceArray) {
    let newArray = []
    sourceArray.forEach(square);

   function square(item) {
    newArray.push(item*item)
   }
   return newArray
}

function reduceToTotal(sourceArray, startingPoint = 0) {
    let total = startingPoint
    // sourceArray.forEach(n => total += n)
    for(let i = 0; i < sourceArray.length; i++) {
        total = sourceArray[i] + total
    }
    return total
}

function reduceToAllTrue(sourceArray) {
   for (let i = 0; i < sourceArray.length; i++) {
       if (!sourceArray[i]) {
           return false
       }

   }
   return true
}

function reduceToAnyTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (!!sourceArray[i]) {
        return true
    }
}
return false
}