function fib(num){
a=0,b=1,nonfib=0
while(nonfib<num){
    for(i=a+1;i<b;i++){
        if(i<=num){
        nonfib++;
        console.log(i)
        if(nonfib==num)
        break;
        }
    }
    c=a+b;
    a=b;
    b=c;
}
}
fib(13)