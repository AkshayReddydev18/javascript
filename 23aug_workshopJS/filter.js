let arr = ["hello", "world", "abc", "defghi"]
let arr1 = ["xyz", "abcdef"]
let x = arr.filter((a)=>
    a.length>5
)
let x1 = arr1.filter((a)=>
    a.length>5
)
console.log(x)
console.log(x1)