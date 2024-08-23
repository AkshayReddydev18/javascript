let arr = ["hello","world","abc"]
let x = arr.map((a)=>
    a.replace("o","O")
)
console.log(x)

let arr1 = ["xyz","foo","bar"]
let x1 = arr1.map((a)=>
    a.replaceAll("o","O")
)
console.log(x1)