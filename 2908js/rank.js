// wap the rank of numbers in array in with duplicates sortedmanner rank
str = "2 34 54 67 3 78 2 67" 
num = str.split(" ").map(Number)
emp=[]
res=""
for(i of num){
    lesser=0
    for(j of num){
        if(j<i){
            lesser++
        }
    } 
    res=res+(lesser+1)+" "
}
    console.log(res.trim())
    