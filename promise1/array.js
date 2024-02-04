let a = [1, 4, 5, 7, 0]
console.log(a)
console.log("print value with index :", a[0])//index start with Zero.
console.log("length of arr{a.length} :", a.length)//length start with one.
a[0] = 2;
console.log("a[0]=2 , array are mutable", a)//array can be change.
console.log(`array are oject in javascript ${typeof (a)}`)
//loops in array
let num = [3, 5, 1, 2, 4]

//simple for loop in array but this is old style...  
// for(let i= 0;i<num.length;i++){
//     console.log(num[i])
// }
//...new style "for-of-loop" is this given bellow:-
for (let i of num) {
    console.log(i)
}
//for-in-loop
for (let i in num) {
    console.log(i)
}

//forEachLoop
num.forEach((i) => {
    console.log(i * i)
})

//array.from 
let name = 'harry'
let arr = Array.from(name)
console.log(arr)

//then we study map , filter and reduce first class function 

//--------------------------------------
//map => creates a new array by performing some operations on each array element.
let arr1 = [1, 2, 3, 4]
let arr2 = arr1.map((value, index, array) => {
    //console.log(value,index,array)
    return value * value
})
console.log(arr2)
//----------------------------------------
//----------------------------------------
//filter => creates a new array of elements which pass the condition define by the user.
let arr3 = [45, 23, 21, 0, 3, 5]
let a2 = arr3.filter((a) => {
    return a < 10
})
console.log(a2)
//----------------------------------------
//----------------------------------------
//reduce => reduce an array to a Single value by performing some operations. 
let arrR = [1, 2, 3, 4, 5]
const reduce_func = (h1, h2) => {
    return h1 + h2
}
let newarr3 = arrR.reduce(reduce_func)
console.log("yyyyyy", newarr3)
//---------------------------------------

let r = arrR.map((h1, h2) => {
    return h1 + h2
})
console.log("zzzzz", r)