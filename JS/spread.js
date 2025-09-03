// const page1 = ['item1', 'item2'];
// const page2 = ['item3', 'item4'];
// // ➤ Combine using spread

// const page3=[...page1,...page2];
// console.log(page3)

// const fruits = ['apple', 'banana', 'mango'];
// const indexToRemove = 1;
// // ➤ Output: ['apple', 'mango']

// fruits.splice(indexToRemove,1)
// console.log(fruits)

// const user = { name: 'Alice', age: 25 };
// // ➤ Change age to 30 immutably

// const newUser={...user,age:30}
// console.log(newUser)


// const state = {
//   user: {
//     name: 'Sam',
//     location: 'India'
//   },
//   loggedIn: true
// };
// // ➤ Update `location` to 'USA' immutably

// let myState={...state,user:{...state.user},location:"USA"}

// console.log(myState)



// const items = [{ name: 'Pen' }, { name: 'Book' }];
// // ➤ Add selected: false to each item

// const updateItem=items.map((item)=>({
// ...item,
// selected:false
// }))

// console.log(updateItem)