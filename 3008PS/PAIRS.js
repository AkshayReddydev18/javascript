function sep(x){
    arr = x.split(" ").map(Number);
    // console.log(arr);
emp=[];
uni=[];
dup=[];
res=0
for(i of arr) {
    if(!emp.includes(i)){
        emp.push(i);
    }
}
// console.log(emp);
for(i of emp){
    c=0;
    for(j of arr){
        if(i==j){
            c++;
        }
    }
    if(c==1){
        uni.push(i);
        // console.log(i,`->`,c)
        
            
        }
    
    else{
        dup.push(i);
        // console.log(i,`->`,c)
        res+=Math.floor(c/2)
    }
}
console.log(res)
}
 sep("30 50 30 50 20 50 50 20 50 50 50")