//A in name
// let count=0;
// let arrName=["Samiksha","Aman","Rishabh","Arpit","Sagar","Anirudh"];
// for(let i=0;i<arrName.length;i++){
//     let str=arrName[i];
//     if(str[0]=="A"){
//         count++;
//     }
// }
// console.log(count)

// let count=0
// let arrName=["Samiksha","Aman","Rishabh","Arpit","Sagar","Anirudh"];
// for(let i=0;i<arrName.length;i++){
//     let element=arrName[i];
//     for(let j=0;i<element.length;j++){
//         if(element[j]=="a"){
//             count++;
//             break;
//         }
//     }
// }
// console.log(count)

//space count
// let str=" sami    ";
// let count=0;
// if(str.length>0){
//     for(let i=0;i<str.length;i++){
//         if(str[i]==" "){
//             count++
//         }
//     }
// }
// console.log(count)


let str="simmi";
let obj={};
for(let i=0;i<str.length;i++){
    let element=str[i];
    if(obj[element]==undefined){
        obj[element]=1
    }
    else{
        obj[element]++
    }
}
let sum=0;
for( let num in obj){
    if(obj[num]==2){
        sum=sum+obj[num]
    }
}
console.log(obj)
console.log(sum)