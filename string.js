// function str(num){
//     sum=0;
//     istr=""
//     for(i of num){
//         if(i%1==0){
//             sum=sum+Number(i)
//             if(i==num){
//                 istr=istr+i+"="
//             }
//             else{
//                 istr=istr+i+"+"
//             }
            
            
//         }
//     }
//     console.log(`${istr}=${sum}`)
// }
// str("234")



// let arr = [124,678,124,81,100]
// let x = arr.map((a)=>Math.round(Math.sqrt(a)))
// console.log(x)
// console.log(Math.random())


// date methods

// let obj = {
//     name:"akshay",
//     role:"develpoer",
//     city:"hyd",
// };
// let x = Object.values(obj)
// let y = Object.entries(obj>2)

// console.log(x)



// let obj1 = {
//     a:1,
//     b:2,
//     c:3,
//     d:4,
// }
// let y1 = Object.keys(obj1).reduce((acc,key)=>{
//     if(obj1[key]>2){
//         acc[key] = obj1[key];
//     }
//     return acc
// },{});
// console.log(y1)


// let obj2 = {
//     a:1,
//     b:2,
// }
// let obj22 = {
//     c:3,
//     d:4,
// }
// let z1 = Object.assign({},obj2,obj22);
// console.log(z1)


// let obj = { a: 1, b: 2, c: 3,d:4}
// let z11 = Object.values(obj)
// let z111 = z11.reduce((acc,b)=>{
//     return acc+b;
// } 
// )
// console.log(z111)


// let obj = { a: 1, b: 2, c: 3};
// let obj1 = {d:4};
// console,log(Object.getPrototypeOf())



const date = new Date()
const hours= date.getHours()
const min=date.getMinutes()
const sec = date.getSeconds()
console.log(hours+`:`+min+`:`+sec)