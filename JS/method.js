// const now=new Date();
// console.log(now)
// console.log(now.getFullYear())
// console.log(now.getMonth())
// console.log(now.getMinutes())
// console.log(now.toLocaleDateString())

// let num=12.454;
// let arr=[12,23,21,1212]
// console.log(Math.floor(num))
// console.log(Math.ceil(num))
// console.log(Math.round(num))
// console.log(Math.random())
// console.log(Math.max(...arr))
// console.log(Math.min(...arr))
// console.log(Math.sqrt(16))

// random number from 1 to 10
// let randomNumber=Math.floor(Math.random()*10)+1
// console.log(randomNumber)


// // random number from 20 to 50
// const randomRange=Math.floor(Math.random()*(50-20+1))+20
// console.log(randomRange)

// let arr=12.484897496;
// console.log(arr.toFixed(arr))

// console.log(parseInt("56.78642"))
// console.log(parseFloat("13"))

// const str="            samiksha congratulations      ";
// // console.log(str.length)
// // console.log(str.toLowerCase())
// // console.log(str.toUpperCase())
// // console.log(str.includes("h"))
// // console.log(str.indexOf("a"))
// // console.log(str.replace("s","a"))
// // console.log(str.split(" "))
// let newstr=str.trim()
// console.log(newstr)
// console.log(str.trimStart())
// console.log(str.trimEnd())


// const developer="frontend";
// // console.log(developer.slice(2,5))
// // console.log(developer.slice(-2))

// // console.log(developer.substring(2,5))
// console.log(developer.substring(-3))

// console.log(parseFloat("23"))


const person = { name: "Alice", age: 25, city: "Delhi" };
 console.log(Object.keys(person))
  console.log(Object.values(person))

  // const target = { a: 1 };
// const source = { b: 2, c: 3 };
// const merged = Object.assign(target, source);

// console.log(merged); // { a: 1, b: 2, c: 3 }



console.log(person.hasOwnProperty("age"));
console.log(delete person.city);
console.log(person)


