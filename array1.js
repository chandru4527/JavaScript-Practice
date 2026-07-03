// 1.sum of array 
const arr1 = [1, 2, 3, 4, 5]
const result1 = arr1.reduce((item, sum) => sum + item)
console.log("total sum result :", result1)

// reverse array
const rev = arr1.reverse()
console.log('reverse :', rev)

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
const arr6 = [1, 2, 3, 5,];
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

for (i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

// 11. count vowel leters 

const srt = 'javascript';
const vowel = 'aeiou'
let cont = 0;

for (let char of srt) {
    if (vowel.includes(char)) {
        cont++
    }
}
console.log('vowels :', cont)

// 12 capital the first letter
const name = 'chandru'

const cap1 = name.charAt(0).toUpperCase() + name.slice(1)
console.log(cap1)


// 13. merge two arrays
const ar1 = [1, 2, 3]
const ar2 = [4, 5, 6]
// method one spred operater
const arr8_1 = [...ar1, ...ar2]
console.log(arr8_1)

// method 2 concat
const arr8_2 = ar1.concat(ar2)
console.log(arr8_2)


// get only names
const users1 = [
    { name: "John" },
    { name: "Mike" }
];

const names = users1.map(user => user.name)
console.log(names)

// get obj key and values only
const user1 = {
    name: "Chandru",
    age: 22
};

// keys only
console.log('obj keys :', Object.keys(user1))
console.log('obj values :', Object.values(user1))

// above 18 age
const users2 = [
    { name: "A", age: 15 },
    { name: "B", age: 25 },
    { name: "C", age: 30 }
]

const age_18 = users2.filter(item => item.age > 18)
console.log('age 18 + :', age_18)

// add new property
let user2 = { name: "John" }

const new_property = { ...user2, role: "developer" }
console.log('new property :', new_property);

// sort user by age 
const users3 = [
    { name: "ck", age: 30 },
    { name: "chandru", age: 20 }
]

const sort_age = users3.sort((a, b) => a.age - b.age)
console.log('sort by age', sort_age);

// find most repeated word
const frt = ["apple", "banana", "apple", "apple"]

const maxfrt = frt.filter(item => frt.indexOf(item) !== frt.lastIndexOf(item))
console.log('max frt and count :', maxfrt[0], maxfrt.length);


// group of user by age 
const users4 = [
    { name: "A", age: 20 },
    { name: "B", age: 20 },
    { name: "C", age: 25 }
]

let age20 = []
let age25 = []

users4.forEach(item => {
    if (item.age === 20)
        age20.push(item)

    if (item.age === 25) {
        age25.push(item)
    }
})

console.log('age 20 :', age20, 'age 25 :', age25)
// method 2
const grouped = Object.groupBy(users4, user => user.age)

console.log(grouped)

// arry make empty
const arr9 = [1, 2, 3]
delete arr9[2]
arr9.push(4)
console.log(arr9, "length", arr9.length)   // [1,2,empty,40]


// what is the output
const arr10 = [10, 20, 30]

arr10[1] = arr10[2]
arr10.push(40)
arr10[0] = arr10[0] + 5

console.log(arr10)   // [15,30,30,40]


// ===== event loop =====
console.log('start')

// setTimeout(() => {
//     console.log('middle')
// }, 0)

console.log('end')


// remove stars in string
const srt2 = 'g**gle'
const ar = srt2.split('')
console.log(ar.filter(item => item !== "*").join(''));

// move all zeros to end
const arr11 = [4, 0, 2, 0, 3, 0, 7, 0, 0]

const zeros = []
const nonzeros = []

for (num of arr11) {

    if (num === 0) {
        zeros.push(num)
    } else {
        nonzeros.push(num)
    }
}

const newarr = [...nonzeros, ...zeros]

console.log(newarr)

// obj to arr 
const obj = {
    name: "Chandru",
    age: 22
}

const newar = Object.entries(obj)
console.log(newar);

// arry to obj 
const newobj = Object.fromEntries(newar)
console.log(newobj);


// move all negative number
const arr12 = [-1, 0, 2, -4, 3, -2, -3, 1];

const lesszero = []
const greatzero = []

for (num of arr12) {

    // single line
    num < 0 ? lesszero.push(num) : greatzero.push(num)

}
const newalign = [...greatzero.sort(), ...lesszero.sort()]

console.log(lesszero)
console.log(greatzero)
console.log(newalign)

// guess the output
const x = [1, 2, 3]
let y = x
y += [4]

console.log(typeof y, y)  // string output 1,2,34

// geuss  the output 
let z = true + false
console.log("data type :", typeof z, z)

let a = [''] + ['']
console.log("data type :", typeof a, a)

let b = [] + {}
console.log("data type :", typeof b, b)

let c = {} + []
console.log("data type :", typeof c, c)

let d = '5' - 3
console.log("data type :", typeof d, d)

let e = '5' + 3
console.log("data type :", typeof e, e)

let f = 0.1 + 0.2 === 0.3
console.log("data type :", typeof f, f)

let g = [] == []
console.log("data type :", typeof g, g)

let h = [, , ,].length
console.log("data type :", typeof h, h)

let i2 = ''
let i3 = 0
let i4 = i2 + i3
console.log("data type :", typeof i4, i4)
console.log(i2 === i3)

