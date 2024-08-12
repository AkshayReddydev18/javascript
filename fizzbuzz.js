for(let i=1; i<=20; i++){
    if((i%2)==0 && i%3==0){
        console.log(i+"fizzbuzz");
    }
    else if(i%2==0){
        console.log(i+"fizz");
    }
    else if(i%3==0){
        console.log(i+"buzz");
    }
    // else if(i%5==0){
    //     console.log(i);
    // }
    else{
        console.log(i);
    }
    // for( let j=1; j<=100; j++)
    // if(i%1==0 && i%i==0 && i%j==0){
    //     console.log(i+"prime");
    // }
}
