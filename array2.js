// 1 qutions
const students = [
    {
        id: 1,
        name: "Chandru",
        age: 20,
        department: "CSE",
        marks: [90, 85, 95],
        attendance: 95,
        gender: "Male",
        active: true,
    },
    {
        id: 2,
        name: "Priya",
        age: 19,
        department: "IT",
        marks: [70, 75, 80],
        attendance: 88,
        gender: "Female",
        active: true,
    },
    {
        id: 3,
        name: "Rahul",
        age: 21,
        department: "ECE",
        marks: [55, 60, 58],
        attendance: 70,
        gender: "Male",
        active: false,
    },
    {
        id: 4,
        name: "Anjali",
        age: 20,
        department: "CSE",
        marks: [95, 98, 99],
        attendance: 99,
        gender: "Female",
        active: true,
    },
    {
        id: 5,
        name: "Kiran",
        age: 22,
        department: "EEE",
        marks: [40, 45, 50],
        attendance: 65,
        gender: "Male",
        active: false,
    },
];
//1. map methods give the array of elements after performing the operation on each element and return the array of elements

// i.Get all student names.
const stdname = students.map(std => std.name)
console.log('1.students name :', stdname)

// ii.Convert names to uppercase.
const nameuppercase = students.map(std => std.name.toUpperCase())
console.log('2.stds name uppercase :', nameuppercase)

// iii.Get only attendance percentages.
const atts = students.map(std => std.attendance)
console.log("3. students attendance :", atts)

// iv.Create objects containing only name and department.
const nameDept = students.map(std => ({ name: std.name, department: std.department }))
console.log('4.name and dept :', nameDept)

// v.Add passed: true if average marks ≥ 50.
const passed_status = students.map(std => {
    passed = std.marks.reduce((acc,mark) => acc + mark ,0)/ std.marks.length  >= 50 ? true : false
    return {...std,passed}
})
console.log("5.stds with passed :" , passed_status)

//2. filter method give the array of elements which satisfy the condition and return the array of elements

// vi.Students with attendance above 90.
const h_ats = students.filter(std => std.attendance > 90)
console.log("6.stds h_ats :",h_ats)

// vii.Female students.
const female_std = students.filter(std => std.gender === "Female")
console.log("7.female stds :",female_std)

// viii.Active students.
const active_std = students.filter(std => std.active)
console.log('8.active stds :',active_std)

// xi.CSE students.
const cse_std = students.filter(std => std.department === 'CSE')
console.log('9.cse stds :',cse_std)

// x.Students aged above 20.
const aged20_std = students.filter(std => std.age >= 20)
console.log('10.aged 20 stds :',aged20_std)

// find method   check the first element which satisfy the condition give the value of that element
//xi.Find student with id 3.
const std3 = students.find(std => std.id === 3)
console.log('std id  3', std3)

// xii.Find student named "Priya".
const std_priya = students.find(std => std.name === 'Priya')
console.log('std name priya',std_priya)

// xiii.Find first inactive student.
const inactive_std = students.find(std => !std.active)
console.log('first inactive std',inactive_std)

// xiv.Find first student with attendance below 70.
const std_below70_ats= students.find(std => std.attendance <70)
console.log('first std below 70 ats',std_below70_ats)

// some method check if any element satisfy the condition give value true or false
// xv.Is any student absent below 60 attendance?
const std_below60_ats = students.some(std => std.attendance < 60)
console.log('any std below 60 ats',std_below60_ats)

// xvi.Is anyone scoring above 95 average?
const std_above95_avg = students.some(std => std.marks.reduce((acc,mark) => acc + mark ,0)/ std.marks.length > 95)
console.log('any std above 95 avg',std_above95_avg)

// xvii.Is there any IT student?
const std_IT = students.some(std => std.department === 'IT')
console.log('any std in IT dept',std_IT)