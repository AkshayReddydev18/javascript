rows=+prompt("enter rows:")
cols=+prompt("enter cols:")
matrixA=[],ta=[];
for(i=0;i<rows;i++){
x = []
for(j=0;j<cols;j++){
    console.log("Enter "+i+""+j+"element: ")
    ele = +prompt()
    x.push(ele)
}
matrixA.push(x)
}
for(i of matrixA){
    console.log(i.join(" "))
}
console.log("transpose of matrix")
for(i=0;i<rows;i++){
    str=""
    for(j=0;j<cols;j++){
        str=str+matrixA[j][i]+""
    }
    console.log(str)
}