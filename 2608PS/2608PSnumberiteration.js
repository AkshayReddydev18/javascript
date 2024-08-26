function sep(x){
    arr = x.split("").map(Number);
console.log(arr);
emp=[];
uni=[];
dup=[];
for(i of arr) {
    if(!emp.includes(i)){
        emp.push(i);
    }
}
console.log(emp);
for(i of emp){
    c=0;
    for(j of arr){
        if(i==j){
            c++;
        }
    }
    if(c==1){
        uni.push(i);
        console.log(i,`->`,c)
    }
    else{
        dup.push(i);
        console.log(i,`->`,c)
    }
}
}
 sep("2342345")