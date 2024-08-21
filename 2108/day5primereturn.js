
function PRIME(num){
    if(num>1){
        count=0;
        for(i=2;i<num;i++){
            if(num%i==0){
                return "not a prime"
            }
        }return "prime"
    }return "enter a valid number"
}
input = 10
console.log(PRIME(input))
   