let obj = [{
        "id": 0,
        "start": true,
        "message": "Hey there ! muuusjwaksgdku",
        "trigger": 2,
        "userInput": false
    }, {
        "id": 1,
        "message": "May I know your name?",
        "trigger": 5,
        "userInput": true,
        "inputOptions": {
            "type": "text",
            "regex": "[A-Za-z]",
            "optional": false,
            "maxLength": 20,
            "errorMessage": "Something went wrong"
        }
    },
    {
        "id": 2,
        "message": "{previousValue:4}, you are at the right place!",
        "trigger": 6,
        "userInput": false
    }, {
        "id": 3,
        "message": "Yes of course {previousValue:4}",
        "trigger": 8,
        "userInput": false
    }, {
        "id": 4,
        "message": "Thanks for visiting us",
        "trigger": 24,
        "userInput": false
    },
    {
        "id": 5,
        "end": true,
        "message": "Hope you have a good day!",
        "userInput": false
    },
    {
        "id": 6,
        "message": "Get your custom design in just <b>3 Steps",
        "trigger": 26,
        "userInput": false
    }

]

// Extracting only the "id" values
let ids = obj.map(item => item.id);

console.log(ids);
// console.log("objttttttttt", obj);
let intentId = 1;
console.log(obj => obj.id)
let foundObject = (obj).find((obj) => obj.id === intentId);
// console.log(foundObject);
//bhai .filter function filter 
const filteredInputData = obj.filter(obj => obj.id !== intentId); //filter , map , reduce 
// console.log("find object", filteredInputData)
//loops in js
//use filter,map,reduce in numberlet arr = [45, 23, 21]

// Array map method
let a = arr.map((value, index, array) => {
        // console.log(value, index, array)
        return value + index
    })
    // console.log(arr)

// Array filter method
let arr2 = [45, 23, 21, 0, 3, 5]
let a2 = arr2.filter((a) => {
        return a < 10
    })
    // console.log(a2, arr2)

// Array reduce method
let arr3 = [1, 2, 3, 5, 2, 1]
const reduce_func = (h1, h2) => {
    return h1 + h2
}
let newarr3 = arr3.reduce(reduce_func)
console.log(newarr3)