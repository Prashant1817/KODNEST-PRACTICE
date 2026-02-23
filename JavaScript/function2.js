// function Declaration - named function hoisted

function square(num) {
    console.log(num  * num);
}
square(1);


// Function Expression 
let square1 = function(num) {
    console.log(num * num);
}
square1(3);


// Arrow Function
let square2 = (num) =>
    console.log(num * num);
square2(4);


let add = () => console.log(2+5);
add();




//IIFE - Immediate Invoked function Expression

(function() {
    console.log(2+9);
})();


(() => console.log(10 + 2)) ();


(function(num) {
    console.log(num * num);
    console.log(2+9);
})(5);




// Simple Intrest Program

function intrest(p, t, r) {
    console.log((p * t * r) / 100);
}
intrest(100, 2, 40);