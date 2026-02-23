// dynamically typed runtime
let age = 19;
console.log(typeof age);

let name = "Gamana";
console.log(typeof name);

console.log(typeof 'age'); // String
console.log(typeof "age");
console.log(typeof 3.25);
console.log(typeof false);

let a;
console.log(a);
console.log(typeof a);

let b = null;
console.log(b); // null
console.log(typeof b); // Object

// loosely typed - type coercion
let c = 3; // number
c = "three"; // String
console.log(c);

// Complex

// Array
let arr = [1, 2, 3];
console.log(arr);
console.log(arr[1]); // 2

// Object - key : value
let person = {
    name: "GAmana",
    age: 45,
};

console.log(person);
console.log(person.name, Object.values(person), Object.keys(person));

// Function
function fname() {
    let name = "Gamana";
    let greeting = `Good morning ${name}!`; // Template literal
    console.log(greeting);
}

fname();
