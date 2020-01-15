// Your code here

function mapToNegativize(sourceArray) {
    let newArray = []
    sourceArray.map(function(number) {
        newArray.push(number * -1)
    })
    return newArray
}

function mapToNoChange(sourceArray) {
    let newArray = []
    sourceArray.map(function(number) {
        newArray.push(number)
    })
    return newArray
}

function mapToDouble(sourceArray) {
    let newArray = []
    sourceArray.map(function(number) {
        newArray.push(number * 2)
    })
    return newArray
}

function mapToSquare(sourceArray) {
    let newArray = []
    sourceArray.map(function(number) {
        newArray.push(number * number)
    })
    return newArray
}

function reduceToTotal(sourceArray, startingPoint = 0) {
    let total = startingPoint
    for (let i = 0; i < sourceArray.length; i++) {
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