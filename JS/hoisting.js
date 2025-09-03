// HOISTING
//  var, arrowfunction, function expression==> undefined
//  function declration==> complete function
// let, const==> reference error




// variable hoisting
// 
// console.log(a);
// var a = 5;

// console.log(b);
// let b = 10;

// function hoisting

// console.log(foo)//complete function
// foo(); // Hello
// function foo() {
//   console.log("Hello");
// }

//First class function

// console.log(bar)//u3.ndefined
// bar(); // ?ref error bar() is not defined
// var bar = function() {
//   console.log("Hi");
// };

// bar(); // ? //Hi

// console.log(arrowFunc)//undefined
// const arrowFunc=()=>{
//     console.log("arrow func hoisting")
// }

// function test() {
//   console.log(x); // ?
//   var x = 20;
// }
// test();


// function test() {
//   console.log(x); // ?
//   let x = 20;
// }
// test();


// console.log(x); // ?
// var x = 10;
// var x = 20;
// console.log(x); // ?

// var x = 1;
// {
//   console.log(x); // ?
//   let x = 2;
// }

// {
//   console.log(city); // 
//   const city = "Patna";
// }


// let a = 10;

// function print() {
//   console.log(a); // ?
//   let a = 20;
// }
// print();

// console.log(typeof x); // ?
// let x = 5;

// console.log(typeof y); // ?
// var y = 5;

// function outer() {
//   if (false) {
//     var a = 10;
//     let b = 20;
//   }
//   console.log(a); // ?
//   console.log(b); // ?
// }
// outer();


// console.log(add(2, 3));
// function add(a, b) {
//   return a + b;
// }

// console.log(sub(5, 2));
// var sub = function(a, b) {
//   return a - b;
// };

// console.log(sub(5, 2));

// function test() {
//   console.log(a);
//   var a = 100;
//   console.log(a);
// }
// test();


// var x = 1;

// function foo() {
//   console.log(x);
//   var x = 2;
//   console.log(x);
// }
// foo();

// var a = 1;
// function hoist() {
//   if (!a) {
//     var a = 2;
//   }
//   console.log(a);
// }
// hoist();

// function outer() {
//   console.log(x);
//   var x = 10;
//   function inner() {
//     console.log(x);
//     var x = 20;
//   }
//   inner();
// }
// outer();

// console.log(typeof a); // ?
// let a = 10;

// function sample() {
//   if (true) {
//     var x = 5;
//     let y = 10;
//   }
//   console.log(x); // ?
//   console.log(y); // ?
// }
// sample();

// console.log(lang);
// const lang = "JavaScript";

// console.log(square(4));
// var square = function(n) {
//   return n * n;
// };

// var x = 10;
// {
//   var x = 20;
// }
// console.log(x); // ?


// let x = 100;
// {
//   let x = 200;
//   console.log(x); // ?
// }
// console.log(x); // ?

// function outer() {
//   console.log(a);
//   inner();
//   var a = 5;
//   function inner() {
//     console.log("Inner function");
//   }
// }
// outer();



