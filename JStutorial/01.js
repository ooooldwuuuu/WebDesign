"use strict";

// let greetingStr = "Hello, JS!";
// const COLOR_RED = "#F00"; //constants that are known prior to execution named uppercase
// const constValTen = 10; //constants that are calculated in run-time, but do not change after the assignment nemad normally.

// console.log(greetingStr);
//constValTen = 11; //error

let testFunc1 = function(){
    console.log("Hi");
    return 100;
};
testFunc1();
let testVal1 = testFunc1();
let testVal2 = testFunc1;
console.log(typeof(testVal1));
console.log(typeof(testVal2));
testVal2();
// console.log(testVal1);