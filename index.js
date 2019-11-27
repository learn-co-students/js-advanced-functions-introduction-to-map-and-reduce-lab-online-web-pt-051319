const mapToNegativize = (a, b = []) => {
	return a.length == 0 ? b : mapToNegativize(a.slice(1), [...b, a[0] * -1])
}

const mapToNoChange = a => a.slice()

const mapToDouble = (a, b = []) => {
	return a.length == 0 ? b : mapToDouble(a.slice(1), [...b, a[0] * 2])
}

const mapToSquare = (a, b = []) => {
	return a.length == 0 ? b : mapToSquare(a.slice(1), [...b, a[0] ** 2])
}

const reduceToTotal = (a, i = 0) => {
	return a.length == 0 ? i : reduceToTotal(a.slice(1), i + a.slice().shift())
}

const reduceToAllTrue = (a, b = true) => {
	return b && a.length > 0 ? reduceToAllTrue(a.slice(1), !!a[0]) : b
}

const reduceToAnyTrue = (a, b = false) => {
	return !b && a.length > 0 ? reduceToAnyTrue(a.slice(1), !!a[0]) : b
}
