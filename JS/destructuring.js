// const arr = [10, 20, 30, 40];
// const [a, b,c,d] = arr;
// console.log(a, b,c,d);


// const arr = [1, 2, 3, 4, 5];
// const [x, , y, ...rest] = arr;
// console.log(x, y, rest);

//?
// const values = [100];
// const [a=200, b = 2] = values;
// console.log(a, b);


// const person = { name: 'Alice', age: 25 };
// const { name, age } = person;
// console.log(name, age);

// const user = { username: 'john_doe' };
// const { username, password = 'default_pass' } = user;
// console.log(username, password);


// const settings = { width: 100, height: 200 };
// const { width: w, height: h } = settings;
// console.log(w, h);

// const person = {
//   name: "Bob",
//   address: {
//     city: "Delhi",
//     zip: 110001
//   }
// };

// const {address: { city, zip }} = person;

// console.log(city, zip);


// function display({ name, age }) {
//   console.log(name, age);
// }

// display({ name: 'Samiksha', age: 26 });


// function sum([a, b]) {
//   return a + b;
// }
// console.log(sum([10, 5]));


// const data = {
//   user: {
//     id: 101,
//     info: {
//       email: "user@example.com"
//     }
//   }
// };


// const {user: {info: { email }}} = data;

// console.log(email);

// let text1 = 'swap';
// let text2 = 'me';
// [text1, text2] = [text2, text1];
// console.log(text1,text2)


// function displayName({first, last}) {
//   console.log(`${first} ${last}`);
// }

// const person = {
//     first: 'Elon',
//     last: 'Musk',
//     twitter: '@elonmusk',
//     company: 'Space X'
// }
// displayName(person);



// const a = [10, 20, 30, 40]

// console.log("Example 1");
// const [x, y, z, w] = a;
// console.log(x);
// console.log(y);
// console.log(z);
// console.log(w);

// const [p, q, , r] = a;
// console.log("Example 2");
// console.log(p);
// console.log(q);
// console.log(r);

// const [s, t] = a;
// console.log("Example 3");
// console.log(s);
// console.log(t);




// let [fst, , ...last] = ["a", "b", "c", "d"];

// console.log(fst);
// console.log(last);

// let x = 10, y = 20;

// // Swapping 
// [x, y] = [y, x];

// console.log(x);
// console.log(y);

// function NamesList() {
//     return ["a", "b", "c", "d"]
// }

// let [fst, snd] = NamesList();

// console.log(fst);
// console.log(snd);


// let marks = { x: 21, y: -34, z: 47 };

// const { x, y, z } = marks;

// console.log(x);
// console.log(y);
// console.log(z);

// ({ x, y} = { x: 10, y: 20 });
// console.log(x); // 10
// console.log(y); // 20

// ({x, y, ...restof} = {x: 10, y: 20, m: 30, n: 40});
// console.log(x); // 10
// console.log(y); // 20
// console.log(restof); // {m: 30, n: 40}


// const marks = {
//     section1: { alpha: 15, beta: 16 },
//     section2: { alpha: -31, beta: 19 }
// };

// const {section1:{alpha,beta}}=marks
// console.log(alpha,beta)


// let obj = {
//     name: "GFG",
//     add: {
//         country: "India",
//         state: {
//             code: "JS",
//             pincode: "820800",
//             article: {
//                 topic: "destructuring"
//             }
//         }
//     }
// }

// const {name}=obj;
// console.log(name);

// const {add:{country}}=obj;
// console.log(country)

// const {add:{state:{code}}}=obj;
// console.log(code)


// const {add:{state:{article:{topic}}}}=obj;
// console.log(topic)

// let a, b, rest;
// [a, b] = [10, 20];

// console.log(a);
// // Expected output: 10

// console.log(b);
// // Expected output: 20

// [a, b, ...rest] = [10, 20, 30, 40, 50];

// console.log(rest);
// // Expected output: Array [30, 40, 50]


// const obj = { 
//     a: 1, 
//     b:{ 
//         c: 2
//      }
//    };

// const {a, b: { c: d },} = obj;
// // Two variables are bound: `a` and `d`
// console.log(a,c)

// const obj = { 
//     a: 1,
//     b: {
//          c: 2 
//        }
//     };
// const { a } = obj; // a is constant
// let {b: { c: d },} = obj; // d is re-assignable
// console.log(a,d)

// const numbers = [];
// const obj = { a: 1, b: 2 };
// // ({ a: numbers[0], b: numbers[1] } = obj);


// // The properties `a` and `b` are assigned to properties of `numbers`
// console.log(numbers)


// const { a, ...others } = { a: 1, b: 2, c: 3 };
// console.log(others); // { b: 2, c: 3 }

// const [first, ...others2] = [1, 2, 3];
// console.log(others2); // [2, 3]


// const foo = ["one", "two"];


// const [red, yellow, green, blue] = foo;
// console.log(red); // "one"
// console.log(yellow); // "two"
// console.log(green); // undefined
// console.log(blue); // undefined


// let a = 1;
// let b = 3;

// [a, b] = [b, a];
// console.log(a); // 3
// console.log(b); // 1

// const arr = [1, 2, 3];
// [arr[2], arr[1]] = [arr[1], arr[2]];
// console.log(arr); // [1, 3, 2]


// function f() {
//   return [1, 2, 3];
// }

// const [a, , b] = f();
// console.log(a); // 1
// console.log(b); // 3

// const [c] = f();
// console.log(c); // 1



//binding pattern
const [a, b, ...{ length }] = [1, 2, 3];
console.log(a, b, length); // 1 2 1


// const o = { p: 42, q: true };
// const { p: foo, q: bar } = o;

// console.log(foo); // 42
// console.log(bar); // true

// const user = {
//   id: 42,
//   displayName: "jdoe",
//   fullName: {
//     firstName: "Jane",
//     lastName: "Doe",
//   },
// };

// function userId({ id }) {
//   return id;
// }

// console.log(userId(user)); // 42

// function userDisplayName({ displayName: dname }) {
//   return dname;
// }

// console.log(userDisplayName(user)); // "jdoe"


// const props = [
//   { id: 1, name: "Fizz" },
//   { id: 2, name: "Buzz" },
//   { id: 3, name: "FizzBuzz" },
// ];

// const [ { name }] = props;

// console.log(name); // "FizzBuzz"


// const user = {
//   id: 42,
//   isVerified: true,
// };

// const { id, isVerified } = user;

// console.log(id); // 42
// console.log(isVerified); // true

// spread and rest operator

// const person = {
//   name: 'Ravi',
//   age: 30,
//   city: 'Mumbai',
//   country: 'India'
// };

// const { name, ...otherDetails } = person;
// console.log(name);
// console.log(otherDetails);

// const colors = ['red', 'green', 'blue', 'yellow'];
// const [first, ...restColors] = colors;

// console.log(restColors);

// const arr1 = [1, 2];
// const arr2 = [3, 4];
// const merged = [...arr1, ...arr2];

// console.log(merged);

// const user = { name: 'Neha', age: 24 };
// const clone = { ...user };

// clone.age = 30;

// console.log(user.age, clone.age);


// function multiply(a, b, c) {
//   return a * b * c;
// }

// const nums = [2, 3, 4];
// console.log(multiply(...nums));


// function processNumbers(...nums) {
//   const [first, ...rest] = nums;
//   return rest.map(n => n * 2);
// }

// console.log(processNumbers(1, 2, 3, 4));


// const defaults = { theme: 'dark', font: 'Arial' };
// const userSettings = { font: 'Helvetica' };

// const finalSettings = { ...defaults, ...userSettings };
// console.log(finalSettings);

// const original = { name: 'Amit', address: { city: 'Delhi' } };
// const copy = { ...original };

// copy.address.city = 'Mumbai';

// console.log(original.address.city); // ???















