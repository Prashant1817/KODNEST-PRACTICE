function square() {
    let num = 5;
    const res = num * num;
    console.log("The square of a " + num + " is " + res);
 }
 square();



 function add1() {
    let a = 10;
    let b = 20;
    let c = a + b;
    console.log(c);
 }
 add1();


function Largest()
{
    let num1 = 10;
    let num2 = 5;
    let num3 = 8;
    let res = (num1 > num2)? num1 : (num2 > num3) ? num2 : (num3 > num1)? num3 : num1;
    console.log(res);
}
Largest();


// function without input and output
function sub() {
    let c = 30;
    let d = 40;
    let res = d - c;
    console.log(res);
}
sub();

// function without input and with output

// function add() {
//     let a = 10;
//     let b = 20;
//     let c = a + b;
//     return(c);
//  }
//  add();


// function reverseString(str) {
//     let reversed = "";

//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }

//     return reversed;
// }

// console.log(reverseString("hello"));


// function isPalindrome(str) {
//     let reversed = str.split("").reverse().join("");
//     return str === reversed;
// }

// console.log(isPalindrome("madam")); 
// console.log(isPalindrome("hello"));


// function countVowelsConsonants(str) {
//     let vowels = 0;
//     let consonants = 0;

//     str = str.toLowerCase();

//     for (let ch of str) {
//         if (ch >= 'a' && ch <= 'z') {
//             if ("aeiou".includes(ch)) {
//                 vowels++;
//             } else {
//                 consonants++;
//             }
//         }
//     }

//     console.log("Vowels:", vowels);
//     console.log("Consonants:", consonants);
// }

// countVowelsConsonants("Hello World");



// function removeSpaces(str) {
//     return str.replace(/\s/g, "");
// }

// console.log(removeSpaces("Hello World")); // HelloWorld


// function with input and without output
function add2(a, b) {
    console.log(a + b);
}
add2(10,30);


// function with input and output

function add3(a, b) {
    return a + b;
}
console.log(10,10);






