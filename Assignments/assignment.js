// Student Management System
// Problem Statement
// You are given an array of student objects.


const students = [
  { id: 101, name: "Aman", marks: 82, course: "Java" },
  { id: 102, name: "Priya", marks: 95, course: "Python" },
  { id: 103, name: "Rahul", marks: 67, course: "Java" },
  { id: 104, name: "Neha", marks: 76, course: "Web" },
  { id: 105, name: "Rohan", marks: 88, course: "Python" }
];

console.log("Original data: ");
console.table(students);


// Task 1 – Add a Student (push)
// Add the following student at the end of the array.
// {id:106, name:"Simran", marks:91, course:"Java"}
// Print the updated array.

students.push({
    id: 106,
    name: "Simran",
    marks: 91,
    course: "Java"
});

console.log("\nafter push")
console.log(students.length);    

// Task 2 – Remove Last Student (pop)
// Remove the last student from the array.
// Print the removed student.

let removed = students.pop();

console.log("\nRemoved students: ");
console.log(removed);

// Task 3 – Add Student at Beginning (unshift)
// Add
// {id:100, name:"Ankit", marks:80, course:"Web"}
// at the beginning of the array.
// Print the array.

students.unshift({
    id: 100,
    name: "Ankit",
    marks: 80,
    course: "Web" 
});

console.log("\nAfter unshift: ");
console.log(students);

// Task 4 – Remove First Student (shift)
// Remove the first student.
// Print the removed student.

let removedFirst = students.shift();

console.log("\nRemoved first student: ");
console.log(removedFirst);

// Task 5 – Update Array Using splice()
// Remove the student having
// id = 103
// and insert
// {id:107, name:"Karan", marks:78, course:"Java"}
// at the same position.
// Print the updated array.

let index = students.findIndex(student => student.id === 103);

students.splice(index,1,{
    id: 107,
    name: "Karan",
    marks : 78,
    course: "Java"
});

console.log("\nAfter splice: ");
console.log(students);

// Task 6 – Create a New Array Using slice()
// Create a new array containing only the first three students.
// Print it.

let three = students.slice(0,3);

console.log("\nFirst three students: ");
console.log(three);

// Task 7 – Array Iteration (for...of)
// Display all students in the format
// Aman - Java - 82
// Priya - Python - 95
// Rahul - Java - 67

console.log("\nStudent Detials: ");

for(let student of students){
    console.log(`${student.name} - ${student.course} - ${student.marks}`);
}

// Task 8 – forEach()
// Print only the student names using forEach().
// Expected Output
// Aman
// Priya
// Rahul
// Neha
// Rohan

console.log("\nStudent names: ");

students.forEach(student =>{
    console.log(student.name);
});

// Task 9 – map()
// Create a new array containing only student names.
// Expected Output
// [
// "Aman",
// "Priya",
// "Rahul",
// "Neha",
// "Rohan"
// ]

let names = students.map(student => student.name);

console.log("\nNames: ");
console.log(names);

// Task 10 – filter()
// Create a new array of students whose marks are greater than or equal to 80.
// Print the new array.

let toppers = students.filter(student => student.marks>=80);

console.log("\nStudents with marks >=80");
console.log(toppers);

// Task 11 – reduce()
// Find
// (a) Total Marks
// Example Output
// Total Marks = 408
// (b) Average Marks
// Example Output
// Average = 81.6

let totalmarks = students.reduce((sum, student) =>{
    return sum + student.marks;
},0);

let avg = totalmarks/students.length;

console.log("\nTotal marks: ",totalmarks);
console.log("avg marks: ",avg);

// Task 12 – sort()
// Sort students by marks (Ascending)
// Expected Output
// 67
// 76
// 82
// 88
// 95

let asc = students.sort((a,b)=>{
    return a.marks-b.marks;
});

console.log("\nAscending marks: ");
console.log(asc);

// Sort students by marks (Descending)
// Expected Output
// 95
// 88
// 82
// 76
// 67

let desc = students.sort((a,b)=>{
    return b.marks-a.marks;
});

console.log("\nDescenidng order: ");
console.log(desc);