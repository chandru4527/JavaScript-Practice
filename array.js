// 1.sum of array 
const arr1 = [1, 2, 3, 4, 5]
const result1 = arr1.reduce((item, sum) => sum + item)
console.log("total sum result :", result1)

// 2.lergest,small number in array
const arr2 = [5, 10, 25, 8];
const large = arr2.sort((a, b) => b - a)


console.log('large :', large[0])

// secound large number
console.log('second large :', large[1])

// small number
const small = arr2.sort((a, b) => a - b)
console.log('small :', small[0])

// second small
console.log('second small :', small[1])


// 3.remove and find duplicates 
const arr3 = [1, 2, 2, 3, 3, 4, 3];

const removed = [... new Set(arr3)]

console.log('removed :', removed)

// find duplicates 

const duplicated = [... new Set(arr1.filter(item => arr3.indexOf(item) !== arr3.lastIndexOf(item)))]
console.log('duplicate :', duplicated)

// 4.asending and desending order 
const arr4 = [8, 3, 5, 6, 2, 1, 7]


// asending
const assending = arr4.sort();
console.log("asending :", assending)

// desending 
const desending = arr4.sort((a, b) => b - a)
console.log("desending :", desending )

// string method 
const str = ['javascript'];
const sting = str.toString().split('').join('')
const remove = [... new Set(sting)]
console.log(sting);
console.log(remove.join(''));
let sort = remove.sort().join('')
console.log(sort)