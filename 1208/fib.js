 function fib(num){
let a=0;
let b=1;
let i=1;
while(i<=num){
    // if(i==num){
        console.log(a);
        // break;
    // }
    c=a+b;
    a=b;
    b=c;
    i++;
}
}
fib(5)