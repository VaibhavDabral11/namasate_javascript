console.log("hellow world")
// What is async ?
// What is await ?
// How async await works behind the scenes ?
// Examples of using async / await
// Error Handling
// Interviews
// Async await vs Promise.then / .catch

import fetch from 'node-fetch'
// What is async ?
/*Async keyword provide the ability to run asynchronous task inside a synchronous , single theard language like javascript. Async function 
always return promise in any case.*/
async function getData1() {
    return "Namaste";
}
const dataPromise1 = getData1();
dataPromise1.then((res) => console.log(res)); //only return the data inside promise || in this case print namaste
/*It makes sure that a promise is returned and if it is not returned then JavaScript automatically wraps 
it in a promise which is resolved with its value. In the above case async function also wraps namaste inside a promise and the return promise*/

// What is await ?
/*Await function is used to wait for the promise. It could be used within the async block only. 
It makes the code wait until the promise returns a result. It only makes the async block wait.*/

// **
// ** ** await can only be used inside async ** ** *
// **
// ** handle promise using async and await * /

const p6 = new Promise((resolve, reject) => {
    resolve("Promise Resolved Value!!");
});
// this is the old style for promise error handling in ES5
function handleP6() {
    p6.then((res) => console.log("handle promise using .then and catch",
        res))
}
handleP6();

// this is the new style for promise error handling in ES6 
// async function handleP6() {
//     const val = await p6;
//     console.log(val);
// }
// handleP6();
// **

/*async and await are used together when we have to use promises with other values as well.*/

// How async await works behind the scenes ?

// Examples of using async / await
// Error Handling
// Interviews
// Async await vs Promise.then / .catch

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
            resolve("Promise Resolved Value!!");
        },
        10000);
});

//***await can only be used inside an async function*****

async function handlePromise() {
    console.log("Hello World!!");
    //***** */ JS Engine was waiting for promise to reoslved
    const val = await p;
    console.log("Namaste JavaScript");
    console.log(val);

    const val2 = await p;
    console.log("Namaste JavaScript");
    console.log(val2);
    //both val and val2 are print after 10 sec 
    //interview question promise await*2 
    //work in parallel or series
    //ans is parallel  both await will call after 10 sec
}
handlePromise();

function getData() {
    //**
    //JS Engine wait not for promise to be resolved**
    p.then((res) => console.log(res));
    console.log("Namaste JavaScript");
}
getData();

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
            resolve("Promise Resolved Value!!");
        },
        10000);
});
const
    p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
                resolve("Promise Resolved Value!!");

            },
            5000);
    });
// await can on.
async function handlePromiseP() {
    console.log("Hello World!!");
    // JS Engine was waiting for promise to reoslved
    const val = await p1;
    console.log("Namaste JavaScript");
    console.log(val);

    const val2 = await p2;
    console.log("Namaste JavaScript 2");
    console.log(val2);
}
handlePromiseP(); //both p1 and p2 is printed after 10 sec, p2 === 5 sec and p1 === 10 sec and after 10 sec both expire after 10 sec and that's why both print after 10 sec

const api1 = new Promise((resolve, reject) => {
    setTimeout(() => {
            resolve("Promise Resolved Value!!");
        },
        5000);
});
const api2 = new Promise((resolve, reject) => {
    setTimeout(() => {
            resolve("Promise Resolved Value!!");

        },
        10000);
});
// await can on.
async function handlePromiSet() {
    console.log("Hello World!!");
    // JS Engine was waiting
    // for promise to reoslved
    const val = await api1;
    console.log("Namaste JavaScript print first after 5 seconds");
    console.log(val);

    const val2 = await api2;
    console.log("Namaste JavaScript print after p2 10 seconds 2");
    console.log(val2);
}
handlePromiSet(); //p1 print after 5 sec and p2 print after 10 sec in sequencs 

const Api_url = "https://api.github.com/users/vaibhavdabral11"
const Api_url2 = "https://ertyu.com"

async function handlePromise() {
    try {
        const data = await fetch(Api_url);
        const jsonValue = await data.json();
        console.log(jsonValue)
            //Or
            //fetch(Api_url).then(res => res.json()).then(res => console.log(res))
    } catch (error) {
        console.log("Error in fetching data", error);
    }
}
handlePromise()

//new way of error handling
async function handlePromiseError() {
    try {
        const data = await fetch(Api_url2);
        const jsonValue = await data.json();
        console.log(jsonValue)
    } catch (error) {
        console.log("Error in fetching data", error);
    }
}
handlePromiseError()

//older way of error handling    
async function handlePromiseErrorOlderWay() {
    fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json()).then(res => console.log(res))

}
handlePromiseErrorOlderWay().catch((err) => console.log(err))

