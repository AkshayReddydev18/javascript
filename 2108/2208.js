// let arr=[1,2,3];

// let x = arr.map((a,b,c)=>{
//     console.log(a,b,c);
//     return "hi";
// });

// console.log(x);




// map method will returns the  new array with same length of input array
// for each wont returns anything.so no need to assign a variable to it.
// 


// let arr = [1,2,3];
// // arr.map((a)=>{console.log(2*a)})

// // let x=arr.filter((a,b,c)=>{return(a>2)});

// let x=arr.map((a)=>{return (2*a)});
// console.log(x)


let arr=["hello","world"]
let x=arr.map((a,b,c)=>
    a.toUpperCase()
)
console.log(x)
