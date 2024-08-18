// num = prompt("Enter a number: ")
num = 545673
min=num[0],minInd=0,max=num[0],maxInd=0
for(i=1;i<num.length;i++){
    if(num[i]<min){
        min=num[i]
        minInd=i
    }
    if(num[i]>max){
        max=num[i]
        maxInd=i
    }
}
console.log("Minimum  and maxmium number in "+num+" is : "+min+ "," +max)
console.log("sum of min and max number in "+num+"is :"+(Number(min)+Number(max)))
console.log("min and max index positionis are:"+minInd+","+maxInd)