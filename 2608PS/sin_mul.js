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
    }
    else{
        dup.push(i);
    }
}


 newuni = (uni.length>1)?`uniques are: ${uni}`:`unique is: ${uni}`;
 newdup = (dup.length>1)?`duplicates are:${dup}`:`duplicate is: ${dup}`;
 console.log(newuni);
 console.log(newdup);
}
 sep("2342345")