function fib(num){
a=0,b=1,nonfib=0
while(nonfib<num){
    for(i=a+1;i<b;i++){
        nonfib++;
        if(nonfib==num){
        console.log(`Number of non fibonacci series ${num} position is: ${i}`)
        }
    }
    c=a+b;
    a=b;
    b=c;
}
}
fib(5)
fib(10)