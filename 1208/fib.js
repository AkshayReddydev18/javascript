//  function fib(num){
// let a=0;
// let b=1;
// let i=1;
// while(i<=num){
//     // if(i==num){
//         console.log(a);
//         // break;
//     // }
//     c=a+b;
//     a=b;
//     b=c;
//     i++;
// }
// }
// fib(5)


// num = prompt("enter a number: ")
function reverse(num){
rev="";
if (num[0]=="-"){
    for(i=num.length-1;i>=1;i--){
        rev=rev+num[i]
    }
    rev="-"+rev;
    console.log(Number(num))
}
else{
    for(i=num.length-1;i>=0;i--){
        rev=rev+num[i]
    }
    console.log(Number(rev))
}
}
reverse(6568)