"use strict";

// Array of objects representing a list of people
const people = [
  { id: 1, name: 'John Doe', age: 25, occupation: 'Developer' },
  { id: 2, name: 'Jane Smith', age: 30, occupation: 'Designer' },
  { id: 3, name: 'Mary Johnson', age: 28, occupation: 'Manager' },
  { id: 4, name: 'Michael Brown', age: 35, occupation: 'Developer' }
];

// Array methods

// 1. push - Add an element to the end of the array
people.push({ id: 5, name: 'Emily Davis', age: 22, occupation: 'Intern' });
console.log('After push:', people);

// 2. pop - Remove the last element from the array
people.pop();
console.log('After pop:', people);

// 3. find - Find the first element that matches the condition
const person = people.find(p => p.id === 2);
console.log('Find person with id 2:', person);


// 3A. find - Find the first element that matches the condition
const personObject = people.find(pname => pname.name === "Michael Brown");
console.log('Find person with name Michael:', personObject);
console.log(`Age person with name Michael: ${personName.age}`);


// 4. filter - Create a new array with all elements that match the condition
const developers = people.filter(p => p.occupation === 'Developer');
console.log('Filter developers:', developers);

// Filter to get all the people who are developers and are 28 years old or older
const developersAbove28 = people.filter(p => p.occupation === 'Developer' && p.age >= 28);
console.log('Developers 28 years old or older:', developersAbove28);




// 5. includes - Check if an element is in the array (Note: includes is generally used with primitive arrays)
const names = people.map(p => p.name);
const includesJohn = names.includes('John Doe');
console.log('Includes John Doe:', includesJohn);

// 6. reduce - Accumulate a value by iterating over the array
const totalAge = people.reduce((sum, p) => sum + p.age, 0);
console.log('Total age:', totalAge);

// 7. sort - Sort the array based on a condition
const sortedByAge = people.slice().sort((a, b) => a.age - b.age); // Using slice() to create a copy for non-mutative sorting
console.log('Sorted by age:', sortedByAge);

// 8. map - Create a new array with the results of calling a function on every element
const namesWithOccupation = people.map(p => `${p.name} (${p.occupation})`);
console.log('Names with occupation:', namesWithOccupation);

// Array of numbers for additional examples
let numbers = [2, 5, 6];

// 9. push - Add an element to the end of the array
numbers.push(3);
console.log('Numbers after push:', numbers);

// 10. pop - Remove the last element from the array
numbers.pop();
console.log('Numbers after pop:', numbers);

// 11. find - Find the first element that matches the condition
const foundNumber = numbers.find(num => num > 5);
console.log('First number greater than 5:', foundNumber);

// 12. filter - Create a new array with all elements that match the condition
const filteredNumbers = numbers.filter(num => num > 3);
console.log('Numbers greater than 3:', filteredNumbers);

// 13. includes - Check if an element is in the array
const includesFive = numbers.includes(5);
console.log('Includes 5:', includesFive);

// 14. reduce - Accumulate a value by iterating over the array
const sumOfNumbers = numbers.reduce((sum, num) => sum + num, 0);
console.log('Sum of numbers:', sumOfNumbers);

// 15. sort - Sort the array
const sortedNumbers = numbers.slice().sort((a, b) => a - b);
console.log('Sorted numbers:', sortedNumbers);

// 16. map - Create a new array with the results of calling a function on every element
const squaredNumbers = numbers.map(num => num * num);
console.log('Squared numbers:', squaredNumbers);
