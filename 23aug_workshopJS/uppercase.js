let arr = ["hello","world","abc"]
let x = arr.map((a)=>
    a.toUpperCase()
)
console.log(x)


let arr1 = ["xyz","abc","def"]
let y = arr1.map((a)=>
    a.toUpperCase()
)
console.log(y)


function sli(...arr){
    let x = arr.map((a)=>
        a.toUpperCase()
    
    )
    console.log(x)
}
sli("hello","hi","world","akshay")
sli("akshay","sushanth")