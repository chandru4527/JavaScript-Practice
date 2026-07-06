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
    passed = std.marks.reduce((acc, mark) => acc + mark, 0) / std.marks.length >= 50 ? true : false
    return { ...std, passed }
})
console.log("5.stds with passed :", passed_status)

//2. filter method give the array of elements which satisfy the condition and return the array of elements

// vi.Students with attendance above 90.
const h_ats = students.filter(std => std.attendance > 90)
console.log("6.stds h_ats :", h_ats)

// vii.Female students.
const female_std = students.filter(std => std.gender === "Female")
console.log("7.female stds :", female_std)

// viii.Active students.
const active_std = students.filter(std => std.active)
console.log('8.active stds :', active_std)

// xi.CSE students.
const cse_std = students.filter(std => std.department === 'CSE')
console.log('9.cse stds :', cse_std)

// x.Students aged above 20.
const aged20_std = students.filter(std => std.age >= 20)
console.log('10.aged 20 stds :', aged20_std)

//3. find method   check the first element which satisfy the condition give the value of that element
//xi.Find student with id 3.
const std3 = students.find(std => std.id === 3)
console.log('std id  3', std3)

// xii.Find student named "Priya".
const std_priya = students.find(std => std.name === 'Priya')
console.log('std name priya', std_priya)

// xiii.Find first inactive student.
const inactive_std = students.find(std => !std.active)
console.log('first inactive std', inactive_std)

// xiv.Find first student with attendance below 70.
const std_below70_ats = students.find(std => std.attendance < 70)
console.log('first std below 70 ats', std_below70_ats)

//4. some method check if any element satisfy the condition give value true or false
// xv.Is any student absent below 60 attendance?
const std_below60_ats = students.some(std => std.attendance < 60)
console.log('any std below 60 ats', std_below60_ats)

// xvi.Is anyone scoring above 95 average?
const std_above95_avg = students.some(std => std.marks.reduce((acc, mark) => acc + mark, 0) / std.marks.length > 95)
console.log('any std above 95 avg', std_above95_avg)

// xvii.Is there any IT student?
const std_IT = students.some(std => std.department === 'IT')
console.log('any std in IT dept', std_IT)

// 5. every method check if all elements satisfy the condition give value true or false
// xviii.Are all students active?
const all_active_std = students.every(std => std.active)
console.log('all stds active', all_active_std)

// xix.Are all attendance above 60?
const all_above60_ats = students.every(std => std.attendance > 60)
console.log('all stds above 60 ats', all_above60_ats)

// xx.Are all students older than 18?
const all_above18_age = students.every(std => std.age > 18)
console.log('all stds above 18 age', all_above18_age)

// reduce method perform the operation on each element and return the single value
// Total attendance.
const total_ats = students.reduce((acc, std) => acc + std.attendance, 0)
console.log('total ats :', total_ats)

// Average attendance.
const average_ats = students.reduce((acc, std) => acc + std.attendance, 0) / students.length
console.log('average ats :', average_ats)

// Total age.
const std_total_age = students.reduce((acc , std) => acc + std.age,0)
console.log('std total age :' , std_total_age)

// Highest attendance.
const std_high_ats = students.reduce((max , std) => Math.max(max , std.attendance) ,0)
console.log('high ats',std_high_ats);

// Lowest attendance.
const std_low_ats = students.reduce((min , std) => Math.min(min , std.attendance),100)
console.log('low ats :',std_low_ats);

// Count active students.
const count_activestd = students.reduce((count , std) => std.active ? count + 1 : count , 0)
console.log('count active std :' , count_activestd)

// Count inactive students.
const count_inactivestd = students.reduce((count , std) => !std.active ? count + 1 : count , 0)
console.log('count inactive std :' , count_inactivestd)

// Total marks of all students.
const total_marks_allstd = students.reduce((acc , std) =>acc + std.marks.reduce((macc, mark ) => macc + mark ,0),0)
console.log('total std marks',total_marks_allstd);

// Student with highest average.
const high_average_std = students.reduce((acc,std) =>  {
    const avg = std.marks.reduce((acc,mark) => acc + mark ,0) / std.marks.length

    return avg > (acc.avg || 0) ? { ...std , avg} : acc
},{})
console.log('highest average student:', high_average_std)

// Student with lowest average.
const low_average_std = students.reduce((acc,std) =>  {
    const avg = std.marks.reduce((acc,mark) => acc + mark ,0) / std.marks.length    
 return avg < (acc.avg || Infinity) ? { ...std , avg} : acc
},{})
console.log('lowest average student:', low_average_std)

// sort method sort the array of elements based on the condition and return the array of elements
// Sort by age.
const sort_by_age = students.sort((a,b) => a.age - b.age)
console.log('sort by age :', sort_by_age)

// Sort by attendance.
const sort_by_ats = students.sort((a,b) => a.attendance - b.attendance)
console.log('sort by ats :', sort_by_ats)

// Sort alphabetically.
const sort_by_name = students.sort((a,b) => a.name.localeCompare(b.name))   
console.log('sort by name :', sort_by_name)

// Sort by average marks.
const sort_by_avg_marks = students.sort((a,b) => {
    const avgA = a.marks.reduce((acc, mark) => acc + mark, 0) / a.marks.length
    const avgB = b.marks.reduce((acc, mark) => acc + mark, 0) / b.marks.length
    return avgA - avgB
})
console.log('sort by avg marks :', sort_by_avg_marks)

// Highest scorer first.
const sort_by_highest_scorer = students.sort((a,b) => {
    const totalA = a.marks.reduce((acc, mark) => acc + mark, 0)
    const totalB = b.marks.reduce((acc, mark) => acc + mark, 0)
    return totalB - totalA
})
console.log('sort by highest scorer :', sort_by_highest_scorer)

