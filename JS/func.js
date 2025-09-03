// ✅ 1. Function Parameters and Return Types
// 🟢 Parameters
// Inputs passed to the function when calling it.

// 🟢 Return Type
// The value that the function gives back using the return keyword.



// function abc(){
//     let a=2;
//     let b=3;
//     console.log(a+b)
// }
// abc()

// function abc(){
//     let a=2;
//     let b=6;
//     return a+b
// }

// let newResult=abc()

// console.log(newResult)


// function result(){
//     return 12
// }

// let newResult2=result();
// console.log(newResult2)

// function add(a, b) {
//   return a + b;
// }
// console.log(add(5, 3)); // 8


// function greet(name) {
//   return "Hello, " + name;
// }
// // console.log(greet("Samiksha")); // "Hello, Samiksha"

// let myName=greet("simmi")
// console.log(myName)

// function isEven(num) {
//   return num % 2 === 0;
// }
// console.log(isEven(4)); // true

// function getUser(name, age) {
//   return {
//     name: name,
//     age: age
//   };
// }
// console.log(getUser("Samiksha", 25));
// { name: "Samiksha", age: 25 }

// function getFruits() {
//   return ["apple", "banana", "mango"];
// }
// console.log(getFruits()); // ["apple", "banana", "mango"]


// function checkAge(age) {
//   if (age < 18) {
//     return "Too young";
//   }
//   return "Allowed";
// }
// console.log(checkAge(16)); // "Too young"


// function getData(flag) {
//   if (!flag) return null;
//   return { data: "Something" };
// }
// console.log(getData(true)); // null


// const result = (function(x, y) {
//   return x + y;
// })(3, 7);

// console.log(result); // ?


// function outer() {
//   return function() {
//     return "Inner result";
//   };
// }
// const fn = outer();
// console.log(fn()); // ?


// function test() {
//   return;
// }
// console.log(test());

// function test() {
//   return{
//     name: "Samiksha"
//   }
// }
// console.log(test());

// const add = (a, b) => a + b;
// console.log(typeof add(2, 3));

// function outer() {
//   return function inner() {
//     return "Hello";
//   }
// }
// console.log(outer()()); // ?

// function show() {
//   console.log("Hi");
// }
// const result = show();
// console.log(result); // ?

// function makeArray() {
//   return [1, 2, 3];
// }
// console.log(makeArray().length); // ?

// function isPositive(num) {
//   return num > 0;
// }
// console.log(isPositive(-5)); // ?



// function demo() {
//   try {
//     return "Try";
//   } catch (e) {
//     return "Catch";
//   } finally {
//     return "Finally";
//   }
// }
// console.log(demo()); // ?

// function logMessage() {
//   console.log("Logging...");
// }
// let result = logMessage();
// console.log(typeof result); // ?


// function sum(a = 1, b = 2) {
//   return a + b;
// }
// console.log(sum());        // 3
// console.log(sum(5));       // 7
// console.log(sum(5, 10));   // 15

// ✅ What is an IIFE?
// IIFE stands for Immediately Invoked Function Expression.
// It’s a function that:

// Is defined
// And executed immediately after its creation
//private scope


// (function() {
//   console.log("IIFE runs!");
// })();
// // Output: IIFE runs!

// (function(name) {
//   console.log("Hello, " + name);
// })("Samiksha");
// // Output: Hello, Samiksha

// const result = (function(a, b) {
//   return a + b;
// })(5, 3);

// console.log(result); // 8

// (() => {
//   console.log("Arrow IIFE!");
// })();
// // Output: Arrow IIFE!

// const counter = (function() {
//   let count = 0;
//   return {
//     increment: () => ++count,
//     decrement: () => --count
//   };
// })();

// console.log(counter.increment()); // 1
// console.log(counter.increment()); // 2
// console.log(counter.decrement()); // 1

// ✅ count is private — cannot be accessed from outside.

// var x = 10;

// (function() {
//   var x = 20;
//   console.log(x);
// })();

// console.log(x);

// function() {
//   console.log("Invalid?");
// }();



// ✅ What is a Callback Function?
// A callback function is a function passed as an argument to another function and is called (invoked) later inside that function.

// Think of it as:
// "You do your task, and when done, call this function I gave you."

// function delayedMessage() {
//   console.log("This is delayed!");
// }

// setTimeout(delayedMessage, 2000);



// function greeting(name) {
//   console.log("Hello, " + name);
// }


// function processUserInput(callback) {
//   const name = "Samiksha";
//   callback(name); // calling the callback
// }

// processUserInput(greeting);

// setTimeout(function () {
//   console.log("Executed after 2 seconds");
// }, 2000);


// const nums = [1, 2, 3];
// nums.forEach(function(num) {
//   console.log(num * 2);
// });

// function print(callback) {
//   console.log("First");
//   callback();
//   console.log("Last");
// }

// print(function () {
//   console.log("Middle");
// });
//First
//Middle
//Last

// ⚠️ Callback Hell
// doTask1(function () {
//   doTask2(function () {
//     doTask3(function () {
//       // 😵 messy code
//     });
//   });
// });

// function one(cb) {
//   console.log("One");
//   cb();
// }

// function two() {
//   console.log("Two");
// }

// one(two); // ?

// ✅ What is Function Currying?
// Currying is a technique of transforming a function with multiple arguments into a sequence of functions that each take one argument.

// function add(a, b) {
//   return a + b;
// }
// console.log(add(2, 3)); // 5

// function add(a) {
//   return function(b) {
//     return a + b;
//   };
// }
// console.log(add(2)(3)); // 5

// ✅ The first call takes a,
// ✅ The second call takes b.


// ✅ What is a Pure Function?
// A pure function is a function that:

// Always returns the same output for the same input.

// Has no side effects (it doesn't modify external state, variables, DOM, API, etc.)

// 🔷 Example of a Pure Function

// function add(a, b) {
//   return a + b;
// }
// ✅ Same inputs = same output
// ✅ No side effects (doesn’t touch outside world)

// ❌ What is an Impure Function?
// An impure function:

// May return different results for the same input.

// Has side effects (modifies external variables, logs to console, changes DOM, etc.)

// 🔶 Example of an Impure Function

// let counter = 0;

// function increment() {
//   counter++;
//   return counter;
// }
// ❌ Depends on external variable (counter)
// ❌ Mutates state = impure






