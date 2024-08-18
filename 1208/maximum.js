// num = prompt("Enter a number: ")
num=357876;
min=num[0],max=num[0]
for(i=1;i<num.length;i++){
if(num[i]<min){
min=num[i]
}
if(num[i]>max){
max=num[i]
}
}
console.log("Minimum number in "+num+" is : "+min ,+max)
