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
const arr3 = [1, 2, 2, 3, 3, 4, 4, 3];

const removed = [... new Set(arr3)]

console.log('removed :', removed)

// find duplicates 

const duplicated = [... new Set(arr3.filter(item => arr3.indexOf(item) !== arr3.lastIndexOf(item)))]
console.log('duplicate :', duplicated)

// 4.asending and desending order 
const arr4 = [8, 3, 5, 6, 2, 1, 7]

// asending
const assending = arr4.sort();
console.log("asending :", assending)

// desending 
const desending = arr4.sort((a, b) => b - a)
console.log("desending :", desending)

// ------ string method -------
const str = ['javascript'];
const sting = str.toString().split('').join('')
const remove = [... new Set(sting)]
console.log(sting);
console.log(remove.join(''));
let sort = remove.sort().join('')
console.log(sort)

// repeated letter 

const rep = sting.split("")
const repeat = [... new Set(rep.filter(item => rep.indexOf(item) !== rep.lastIndexOf(item)))]
console.log('reapeat :', repeat)

// 5. rotate array k times
const k = 2;
const arr5 = [1, 2, 3, 4, 5, 6]
const arrlen = arr5.length

const rotate = [...arr5.splice(arrlen - k, k), ...arr5]

console.log('k times', rotate)


// 6. count element or letter
const fruits = ['apple', 'orange', 'apple', 'banana', 'banana']
const count = {};
fruits.forEach(item => {
    count[item] = (count[item] || 0) + 1
})

console.log(count)


// 7. single digit number to array
const digit = 12345
const numarr = digit.toString().split("").map(Number)
console.log(numarr);

// hashed number unhashed number
const sum = numarr.reduce((num, item) => item + num, 0)
console.log(digit % sum === 0 ? `harshed number is ${sum}` : "unharshed number")


// 8. find missing number
const arr6 = [1, 2, 3, 5];
const n = 5;
const actul = (n * (n + 1) / 2)
const expt = arr6.reduce((num, item) => num + item, 0)
const miss = actul - expt
arr6.push(miss)
console.log("add miss", arr6);
const ord = arr6.sort((a, b) => a - b)
console.log("order :", ord)


// 9 even number and add numbers
const arr7 = [1, 2, 3, 4, 5, 6];
// even
const even = arr7.filter(item => item % 2 === 0)
console.log("even number :", even)

// odd number
const odd = arr7.filter(item => item % 2 !== 0)
console.log("odd number :", odd)


// 10 print all element
const arr = [10, 20, 30, 40, 50];

for(i = 0 ; i < arr.length; i++){
    console.log(arr[i])
}
