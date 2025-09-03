
// About Array
// create an array

// let array1 = ["apple", "banana", "mango"];

// let array2=new Array(10,20,30)
// console.log(array2)

// let array3=[];
// array3[0]=30;
// console.log(array3)



// let arr=[1,2,3,1,5,6];

// console.log(arr.length)
// console.log(arr.indexOf(5))
// console.log(arr.includes(10))

// arr.push(15)
// arr.pop()
// arr.unshift(22)
// arr.shift()

// console.log(arr)



// forEach,map,filter,reduce

// let newarr=arr.find((i)=>{
//   return i>3
// })
// console.log(newarr)

// arr.findIndex()//return first Index match

// let newarr=arr.every((i)=>{
//   return i%2==0
// })

// console.log(newarr) //work like AND

// arr.some()// work like OR

// let arr1=[2,3,1,4,5];
// let arr2=[6,7,8,9];

// console.log(arr1.concat(arr2))

// console.log(arr1.join("--"))

// console.log(arr1.sort())
// console.log(arr1.reverse())

// console.log(Array.isArray(arr1))


// let arr=[23,654,98,44,45,232]

// // console.log(arr.sort())

// arr.sort((a,b)=>a-b)
// console.log("asending order",arr)

// arr.sort((a,b)=>b-a)
// console.log("desending order",arr)


// slice()

// const arr = [10, 20, 30, 40, 50, 60];
//  // [30, 40, 50]
//  console.log(arr.slice(2,5))

// const arr = [1, 2, 3, 4, 5, 6];
//  // [4, 5, 6]
//  console.log(arr.slice(-3))

// const arr = [5, 10, 15];
// // [5, 10, 15]
// console.log(arr.slice())

// const arr = [100, 200, 300, 400];
// const result = arr.slice(2); // [300, 400]
// console.log(result)

// const arr = [0, 1, 2, 3, 4, 5, 6];
// const result = arr.slice(2, 5); // [2, 3, 4]
// console.log(result)



// splice()

// remove
// const arr = [10, 20, 30, 40];
// console.log(arr.splice(1,2));

// insert
// const arr = [1, 2, 5, 6];
// arr.splice(2,0,"x","y")
// console.log(arr)

//replace
// const arr = [0, 1, 2, 3];
// arr.splice(1,2,"a","b")
// console.log(arr)

//remove last element
// const arr=[10,20,30];
// arr.splice(-1,1)
// console.log(arr)

//remove all elements
// const arr = [1, 2, 3, 4];
// arr.splice(0,arr.length)
// console.log(arr)



