// Your code here
function mapToNegativize(array) {
    let newArray = []
    array.map(function(number) {
        
        newArray.push(number * -1)
    })
    return newArray
}

function mapToNoChange(array) {
    let newArray = []
    array.map(function(number) {
        newArray.push(number)
    })
    return newArray
}

function mapToDouble(array) {
    let newArray = []
    array.map(function(number) {
        newArray.push(number * 2)
    })
    return newArray
}

function mapToSquare(array) {
    let newArray = []
    array.map(function(number) {
        newArray.push(number * number)
    })
    return newArray
}

function reduceToTotal(array, start=0) {
    let total = start
    //array.reduce(function(number, total) 
    for (let i = 0; i < array.length; i++) {
        total = total + array[i]
    }
    return total
}

function reduceToAllTrue(array, start=0) {
    for (let i = 0; i < array.length; i++) {
        if (!array[i]) return false
    }
    return true
}

function reduceToAnyTrue(array, start=0) {
    for (let i = 0; i < array.length; i++) {
        if (array[i]) return true
    }
    return false
}