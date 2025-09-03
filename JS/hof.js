// forEach

//Log each element of an array with its index:
// Output: "Fruit at index 0 is apple" ...

// const fruits = ['apple', 'banana', 'mango'];

// fruits.forEach((item,index)=>{
//     console.log(`${item} is at ${index}`)
// })

//Add a constant value to each number and store it in another array (note: forEach doesn’t return anything)

// const numbers = [1, 2, 3]; 
// // Create [6, 7, 8] by adding 5 to each
// let updatedArr=[]

// numbers.forEach((item)=>{
//        updatedArr.push(item+5)
// })

// console.log(numbers)

//Capitalize the first letter of every name in an array of strings:
// const names = ['alice', 'bob', 'charlie'];

// names.forEach((item)=>{
//     console.log(item.charAt(0).toUpperCase())
//     console.log(item.charAt(0).toUpperCase() + item.slice(1))
// })


// Extract only names into a new array: ['Alice', 'Bob']
// const users = [
//   { name: 'Alice', age: 22 },
//   { name: 'Bob', age: 25 },
// ];


// let newArr=[]

// users.forEach((item)=>{
//      newArr.push(item.name)
// })

// console.log(newArr)

// const users = [
//   { name: 'Alice', age: 17 },
//   { name: 'Bob', age: 22 },
//   { name: 'Charlie', age: 16 },
//    { name: 'Charlii', age: 19 }
// ];

// users.forEach((item)=>{
//        if(item.age>=18){
//         console.log(item)
//        } 
// })


// const products = [
//   { id: 1, name: 'Phone' },
//   { id: 2, name: 'Tablet' },
//   { id: 3, name: 'Laptop' },
// ];
// // Output: "Phone, Tablet, Laptop"

// let newArr=[]

// products.forEach((item)=>{
//       newArr.push(item.name)
// })

// let result=newArr.join(",")
// console.log(result)


// const users = [
//   { name: 'Alice' },
//   { name: 'Bob' }
// ];

// users.forEach((item)=>{
    
//     item.isActive=true

//     console.log(item)
// })

// const comments = [
//   { user: 'Sam', text: 'Nice work!' },
//   { user: 'John', text: 'Looks good' },
// ];
// // Add a property `timestamp: Date.now()`

// comments.forEach((item)=>{
//     console.log(`timestamp  ${Date.now()}`, item)
// })





// const numbers = [1, 2, 3];
// // Output: [2, 4, 6]

// let newArr=numbers.map((item)=>{
//     return item*2
// })
// console.log(newArr)


// const names = ['alice', 'bob', 'charlie'];
// // Output: ['ALICE', 'BOB', 'CHARLIE']

// let newNames=names.map((item)=>{
//         return item.toUpperCase()
// })
// console.log(newNames)


// const words = ['apple', 'banana', 'kiwi'];
// // Output: [5, 6, 4]
// let newWords=words.map((item)=>{
//     return item.length
// })
// console.log(newWords)


// const users = [
//   { id: 1, name: 'Alice' },
//   { id: 2, name: 'Bob' },
// ];
// // Output: ['Alice', 'Bob']


// let newUser=users.map((item)=>{
//     return item.name
// })
// console.log(newUser);

// const products = [
//   { id: 1, name: 'Phone' },
//   { id: 2, name: 'Tablet' },
// ];
// // Output: each object should now include `isSelected: false`

// let newProduct=products.map((item)=>{

//      item.isSelected=false

//      return item
// })

// console.log(newProduct)


// const users = [
//   { firstName: 'Alice', lastName: 'Smith' },
//   { firstName: 'Bob', lastName: 'Jones' },
// ];

// // Output: ['Alice Smith', 'Bob Jones']

// let newUser=users.map((item)=>{
//     return item.firstName +" "+  item.lastName
// })
// console.log(newUser)


// const orders = [
//   { id: 1, status: 1 },
//   { id: 2, status: 2 },
// ];
// // Convert status: 1 → "Pending", 2 → "Shipped"

// let newOrder=orders.map((item)=>{
// })
// console.log(newOrder)


// const items = ['Home', 'About', 'Contact'];
// // Output: ['<li>Home</li>', '<li>About</li>', '<li>Contact</li>']

// const newItems=items.map((item)=>{
//     return  `<li> ${item} </li>`
// })
// console.log(newItems)


// const prices = [100, 200, 300];
// // Output: [118, 236, 354]

// let newPrice=prices.map((item)=>{
//     return item+item * 0.18
// })
// console.log(newPrice)









// const names = ['Sam', 'Alice', 'John', 'Charlie'];
// // Output: ['Alice', 'Charlie']

// const nameFilter=names.filter((item)=>{
//     return item.length>4
// })
// console.log(nameFilter)


// const users = [
//   { name: 'Alice', age: 17 },
//   { name: 'Bob', age: 22 },
//   { name: 'Tom', age: 19 }
// ];
// // Output: only users age >= 18

// let userFilter=users.filter((item)=>{
//     return item.age >= 18
// })
// console.log(userFilter);


// const users = [
//   { name: 'Alice', active: true },
//   { name: 'Bob', active: false },
//    { name: 'Angel', active: true },
// ];
// // Output: only active users

// let newUser=users.filter((item)=>{
//      if(item.active==true){
//         return item
//      }
        //  return item.active

// })
// console.log(newUser)


// const todos = [
//   { task: 'Code', done: true },
//   { task: 'Sleep', done: false },
// ];
// // Output: only tasks with done === true

//   todo.filter((item)=>{
//     return item.done
//   })

// const products = [
//   { name: 'Phone', price: 15000 },
//   { name: 'Charger', price: 500 },
//   { name: 'Headphones', price: 1200 }
// ];
// //price range between 1000-5000

// let myProducts=products.filter((item)=>{
//     if(item.price>=1000 || item.price>=5000){
//         return item
//     }
// })

// console.log(myProducts)

// const cities = ['Delhi', 'Mumbai', 'Bangalore', 'Kolkata'];
// const input = 'ba';
// // Output: ['Bangalore'] (case-insensitive match)


// const newCities=cities.filter((item)=>{
//    return item.toLowerCase().includes(input.toLowerCase())
// })
// console.log(newCities)


// const posts = [
//   { title: 'Post A', likes: 80, published: true },
//   { title: 'Post B', likes: 120, published: true },
// ];
// // Output: only published posts with likes > 100

// const newPosts=posts.filter((item)=>{
//     if(item.likes>100 && item.published){
//         return item
//     }

// return item.likes>100 && item.published
// })
// console.log(newPosts);

// const students = [
//   { name: 'Alice', score: 75, isAbsent: false },
//   { name: 'Bob', score: 40, isAbsent: false },
//   { name: 'Charlie', score: 80, isAbsent: true }
// ];

// const presentAndPassed = students.filter(student => student.score > 60 && !student.isAbsent);

// console.log(presentAndPassed);
// Output: [{ name: 'Alice', score: 75, isAbsent: false }]


// const products = [
//   { name: 'Phone', inStock: true },
//   { name: 'Tablet', inStock: false },
//   { name: 'Laptop', inStock: true }
// ];
// // ➤ Output: Only products with inStock: true

// let pro=products.filter((item)=>{
//     return item.inStock
// })
// console.log(pro)


// const users = [
//   { name: 'Alice', online: true },
//   { name: 'Bob', online: false }
// ];
// // ➤ Output: [{ name: 'Alice', online: true }]
//  let user=users.filter((item)=>{
//     return item.online
//  })
//  console.log(user)


// const items = [
//   { name: 'Milk', expiry: '2025-07-01' },
//   { name: 'Bread', expiry: '2025-08-10' }
// ];
// const today = '2025-07-26';
// // ➤ Output: Only items with expiry > today

// const newItem=items.map((item)=>{
  
//     if(item.expiry>today) {
//         return item
//     }
// })
// console.log(newItem)

// const search = "phone";
// const products = [
//   { name: 'iPhone 13' },
//   { name: 'Laptop' },
//   { name: 'Smartphone X' }
// ];
// // ➤ Output: Products whose name includes "phone" (case-insensitive)

// let newpro=products.filter((item)=>{
//     return item.name.toLowerCase().includes(search.toLowerCase())
// })
// console.log(newpro)





//reduce
// const numbers = [10, 20, 30];
// // ➤ Output: 60
// let newNumber=numbers.reduce((a,b)=>{
//         return a+b
// })
// console.log(newNumber)



// const nums = [2, 3, 4];
// // ➤ Output: 24
// let newNumber=nums.reduce((a,b)=>{
//         return a*b
// })
// console.log(newNumber)


// const cart = [
//   { name: 'Shirt', price: 500 },
//   { name: 'Shoes', price: 1200 },
//   { name: 'Watch', price: 2000 }
// ];
// // ➤ Output: Total = 3700

// let newCart=cart.reduce((sum,item)=>{
//         return sum+item.price
// },0)
// console.log(newCart)




// const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
// // Output: { apple: 3, banana: 2, orange: 1 }


// const numbers = [5, 12, 7, 99, 34];
// //  // Output: 99

// let max_num=numbers.reduce((acc,item)=>{
//      return acc>item?acc:item
// })
// console.log(max_num)

//  const nested = [[1, 2], [3, 4], [5]];
// // Output: [1, 2, 3, 4, 5]

// let concatArr=nested.reduce((acc,item)=>{
//         return acc.concat(item)
// },[])
// console.log(concatArr)
