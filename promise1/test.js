const prompt = require('prompt-sync')();
//Difference between Normal && arrow Function

//normal function
// console.log("TOP",add)
// function add(a, b) {
//     let sum = a + b;
//     return sum
// }
// let fNum = prompt("Please enter first number:");
// let sNum = prompt("Please enter second number:");
// let a = parseInt(fNum), b = parseInt(fNum)
// let StringA1 = a.toString();
// let  StringB2 = b.toString();
// console.log(StringA1)
// console.log(`Sum of two given Intger: ${add(a, b)}`);
// console.log(`Sum of two given String: ${add(StringA1, StringB2)}`);
// console.log("DOWN",add)

// //arrow function
console.log("TOP",add)
let add = (a, b) => {
    let sum = a + b;
    return sum
}
// let fNum = prompt("Please enter first number:");
// let sNum = prompt("Please enter second number:");
let fNum = "4" ,sNum = "5"
let a = parseInt(fNum), b = parseInt(sNum)
console.log(`Sum of two given number: ${add(a, b)}`)
console.log("DOWN",add)

//https://www.telerik.com/blogs/four-ways-to-create-a-function-in-javascript

//use map && filter and reduce 