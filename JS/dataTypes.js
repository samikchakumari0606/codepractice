// console.log(typeof 42);           // ?
// console.log(typeof "hello");      // ?
// console.log(typeof true);         // ?
// console.log(typeof undefined);    // ?
// console.log(typeof null);         // ? object

// typeof null; // "object"
// When JavaScript was first created in 1995, values in memory were represented with type tags. These tags were used to identify the type of the value.
// The type tag for object was 000.
// null was represented as a null pointer (which was 0x00 in memory).
// So when typeof null was evaluated, the internal tag matched object.

// let a;
// let b = null;

// console.log(a == b);  // ?
// console.log(a === b); // ?


// console.log(Boolean(0));       // ?
// console.log(Boolean(""));      // ?
// console.log(Boolean(null));    // ?
// console.log(Boolean(undefined)); // ?
// console.log(Boolean("false")); // ?

// let a = "abc" / 3;
// console.log(a);         // ?
// console.log(typeof a);  // ?

// let val = "hello" - 5;
// console.log(isNaN(val));        // ?
// console.log(Number.isNaN(val)); // ?

// console.log(Number("123"));      // ?
// console.log(Number("123abc"));   // ?
// console.log(parseInt("123abc")); // ?
// console.log(parseFloat("123.45text")); // ?


// console.log("5" - 2); // ?
// console.log("5" + 2); // ?
// console.log(true + 1); // ?
// console.log(false + "1"); // ?

// let s1 = Symbol("id");
// let s2 = Symbol("id");
// console.log(s1 === s2); // ?

// let big = 1234567890123456789012345678901234567890n;
// console.log(typeof big); // ?

// function test(value) {
//   if (value == null) {
//     console.log("Null or undefined");
//   } else {
//     console.log("Has value");
//   }
// }
// test(null);        // ?
// test(undefined);   // ?
// test(0);           // ?
// test("");          // ?


// let x = 10;
// let y = x;
// y = 20;
// console.log(x); // ?
// console.log(y); // ?

// const name = "Samiksha";
// const greeting = `Hello, ${name}`;
// console.log(greeting);        // ?
// console.log(typeof greeting); // ?

// const values = [0, "", "0", null, undefined, NaN, "false", false];

// values.forEach(v => {
//   if (v) {
//     console.log(`${v} is truthy`);
//   } else {
//     console.log(`${v} is falsy`);
//   }
// });

// console.log(null == undefined);  // ?
// console.log(null === undefined); // ?
// console.log([] == false);        // ?
// console.log("" == 0);            // ?



// REFRENCE DATA TYPE

// let obj1 = { name: "Samiksha" };
// let obj2 = obj1;

// obj2.name = "Kumari";

// console.log(obj1.name); // ?

// let x = 10;
// let y = x;
// y = 20;
// console.log(x); // ?
// console.log(y); // ?

// let arr1 = [1, 2, 3];
// let arr2 = arr1;

// arr2.push(4);

// console.log(arr1); // ?
// console.log(arr2); // ?

// let user = { name: "Samiksha", age: 25 };
// let clone = { ...user };

// clone.name = "Kumari";

// console.log(user.name);  // ?
// console.log(clone.name); // ?

// let obj1 = {
//   name: "Samiksha",
//   address: 
//   { city: "Patna" }//ref data type
// };

// let obj2 = { ...obj1 };
// obj2.address.city = "Delhi";

// console.log(obj1.address.city); // ?


// let a = { x: 1 };
// let b = { x: 1 };

// console.log(a == b);  // ?
// console.log(a === b); // ?

// function update(obj) {
//   obj.age = 30;
// }

// let user = { name: "Samiksha" };
// update(user);

// console.log(user.age); // ?

// let obj = { name: "Samiksha" };
// let ref = obj;

// obj = null;

// console.log(ref); // ?


// let a = [1, 2, 3];
// let b = a;

// b[0] = 99;

// console.log(a); // ?

// function greet() {
//   return "Hello!";
// }

// let sayHello = greet;

// console.log(sayHello()); // ?


// let arr1 = [1, 2, 3];
// let arr2 = arr1;

// arr2.push(4);

// console.log(arr1); // ?
// console.log(arr2); // ?

// let a = [1, 2, 3];
// let b = [1, 2, 3];

// console.log(a == b);  // ?
// console.log(a === b); // ?


// let original = [1, 2, 3];
// let copy = [...original];

// copy[0] = 99;

// console.log(original); // ?
// console.log(copy);     // ?

// let obj = {
//   items: [1, 2, 3]
// };

// let ref = obj.items;
// ref.push(4);

// console.log(obj.items); // ?

// let a = [1, 2, 3];
// let b = a;

// b = [4, 5, 6];

// console.log(a); // ?
// console.log(b); // ?

// let shared = [1, 2];
// let obj1 = { data: shared };
// let obj2 = { data: shared };

// obj1.data.push(3);

// console.log(obj2.data); // ?

// let x = [1, 2];
// let y = x;

// console.log(x === y); // ?
// console.log(x == y);  // ?

// let arr = [1, 2];
// function change(a) {
//   a.push(3);     // Mutates original
//   a = [4, 5, 6]; // Reassigns local copy
// }
// change(arr);

// console.log(arr); // ?

let arr1 = [1, 2, 3];
let arr2 = arr1;

arr1 = [];

console.log(arr1); // ?
console.log(arr2); // ?





