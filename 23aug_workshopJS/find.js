let arr = ["hello", "world", "abc", "defghi"]
let arr1 = ["xyz", "foo", "bar"]
let x = arr.find((a)=>
    a.includes("o")
)
let x1 = arr1.find((a)=>
a.includes("o")
)
console.log(x)
console.log(x1)