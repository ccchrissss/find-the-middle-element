function gimme(triplet) {

  // console.log('triplet', triplet)
  let indexOfMiddleNum
  let sortedArr = triplet.toSorted( (a,b) => a - b )

  // console.log('sortedArr', sortedArr)
  // console.log('triplet', triplet)

  indexOfMiddleNum = triplet.indexOf(sortedArr[1])

  return indexOfMiddleNum
}

console.log( gimme([6, 2, 9]) )
console.log( gimme([4, -3, 10]) )
console.log( gimme([2.1, 3.2, 1.4]) )
console.log( gimme( [10, 9, 8]) )

// parameters: triplet    // an array containing 3 elements, each a number
// return: indexOfMiddleNum   // a number
// e.g. gimme([6, 2, 9])
// results in 0

// declare a varaible called indexOfMiddleNum
// declare a variable called sortedArr, assign it to triplet.toSorted( (a,b) => a - b )
// assign indexOfMiddleNum to triplet.indexOf(sortedArr[1])
// return indexOfMiddleNum