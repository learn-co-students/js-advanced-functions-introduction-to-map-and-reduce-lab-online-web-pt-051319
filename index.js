// Your code here
function mapToNegativize(sourceArray) {
    let r = []
    for (let i = 0; i < sourceArray.length; i++) {
        r.push(-1 * sourceArray[i])
    }
    return r
}

function mapToNoChange(sourceArray) {
    let r = []
    for (let i = 0; i < sourceArray.length; i++) {
        r.push(sourceArray[i])
    }
    return r
}

function mapToDouble(sourceArray) {
    let r = []
    for (let i = 0; i < sourceArray.length; i++) {
        r.push(sourceArray[i] * 2)
    }
    return r
}

function mapToSquare(sourceArray) {
    let r = []
    for (let i = 0; i < sourceArray.length; i++) {
        r.push(sourceArray[i] * sourceArray[i])
    }
    return r
}

function reduceToTotal(sourceArray, startingPoint) {
    let r = startingPoint || 0;
    for (let i = 0; i < sourceArray.length; i++) {
        r = r + sourceArray[i]
    }
    return r
}

function reduceToAllTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i] === false)
            return false
    }
    return true
}

function reduceToAnyTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i] === true)
            return true
    }
    return false
}