// const arr = [];
// const arr2 = new Array();  // also works

//check  value is array or not
// Array.isArray(value)

// let arr=[1,2,3,1,5,6];

// // search methods
// console.log(arr.length);
// console.log(arr.indexOf(1))
// console.log(arr.lastIndexOf(1))
// console.log(arr.includes(1))


//add//remove

// arr.push(10,11,13)
// arr.pop()
// arr.shift()
// arr.unshift(14)
// // arr.splice(2,4)//affect orignal array
// let newarr=arr.slice(1,3)
// console.log(newarr)

// let fruits = ["apple", "banana", "cherry", "date", "fig"];

// let f=fruits.slice(1,3)

// console.log(f)

//transformation 
//map,filter,reduce

//sort and reversing

// let fruits = ["apple","orange", "banana","graps", "cherry", "date", "fig"];
// fruits.sort()
// fruits.reverse()
// console.log(fruits)

// let arr=[1,2,3,1,5,6];
// arr.sort()
// arr.reverse()
// console.log(arr)

//Join & String Conversion toString()
//  let arr=[1,2,3,1,5,6];
//  let newa=arr.join("**")
//  console.log(newa)
//  console.log(arr)

//   let fruits = ["apple","orange", "banana","graps", "cherry", "date", "fig"]
//   let f=fruits.join("***")
//   console.log(fruits.join("------"))

//   //every and some 

//let numbers = [2, 4, 6, 8];
// let allEven = numbers.every(n => n % 2 === 0);
// console.log(allEven); // true (because all numbers are even)

// let numbers = [1, 3, 5, 8];
// let hasEven = numbers.some(n => n % 2 === 0);
//console.log(hasEven); // true (because 8 is even)


  //every//matches all the condition ===>true
  //some//any one match//===>true


  //find and findIndexOf

//   let numbers = [3, 8, 12, 5, 13];

// let result = numbers.find(n => n > 10);
// console.log(result); // 12 (the value)

// let numbers = [3, 8, 12, 5];

// let index = numbers.findIndex(n => n > 10);
// console.log(index); // 2 (the index of 12)

// let ar=[1,2,3,4];

// let result=ar.filter((item)=>item==2);
// console.log(result)


// function add(){
//     console.log("adding")
//     return 100+100
// }

// function minus(){
//     console.log("adding..")
//     return 200-200
// }

// let sum=(add(),minus())
// console.log(sum)



// slice() vs splice()
// Feature	slice()	splice()
// Purpose	Extracts a portion of an array	Adds/removes/replaces elements in array
// Modifies original array?	❌ No (returns a new array)	✅ Yes (modifies original array)
// Return value	New array (copied portion)	Array of deleted items
// Syntax	array.slice(start, end)	array.splice(start, deleteCount, ...items)

// ✅ Example of slice()
// js
// Copy
// Edit
// const arr = [10, 20, 30, 40, 50];
// const sliced = arr.slice(1, 4);

// console.log(sliced); // [20, 30, 40]
// console.log(arr);    // [10, 20, 30, 40, 50] (original unchanged)
// 🧠 slice(1, 4) means extract from index 1 up to but not including index 4.

// ✅ Example of splice()
// js
// Copy
// Edit
// const arr = [10, 20, 30, 40, 50];
// const spliced = arr.splice(1, 2, 99, 100);

// console.log(spliced); // [20, 30] (removed items)
// console.log(arr);     // [10, 99, 100, 40, 50] (modified)
// 🧠 splice(1, 2, 99, 100) means:

// Start at index 1
// Remove 2 items
// Insert 99 and 100 in their place



// const fruits = ["apple", "banana", "cherry", "date", "elderberry"];
// // ➤ Output: ["apple", "banana", "cherry"]

// const newFruit=fruits.slice(0,3)
// console.log(newFruit)

// const nums = [1, 2, 3, 4];
// // ➤ Create a copy of the array
// const newNums=nums.slice()
// console.log(nums)


// const num = [1, 2, 3, 4, 5];
// // ➤ Output: [4, 5]

// const newNum=num.slice(-2)
// console.log(newNum)


const fruits = ["apple", "banana", "cherry", "date", "elderberry"];
// ➤ Remove "banana" and "cherry"

// const deleteFruit=fruits.splice(1,2)
// console.log(deleteFruit)
// console.log(fruits)

// const insertFruit=fruits.splice(2,0,"mango")
// console.log(fruits)

// const replaceFruit=fruits.splice(1,1,"grape")
// // console.log(replaceFruit)

// console.log(fruits)


