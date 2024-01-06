console.log("hellow world")

// What is async ?
// What is await ?
// How async await works behind the scenes ?
// Examples of using async / await
// Error Handling
// Interviews
// Async await vs Promise.then / .catch

//always returns a promise
async function getData() {
    return "Namaste";
}
const dataPromise1 = getData();
dataPromise1.then((res) => console.log(res));


const dataPromise = p6 = new Promise((resolve, reject) => {
    resolve("Promise Resolved Value!!");
});

// await can only be used in async
async function handlePromise() {
    const val = await p;
    console.log(val);
}
handlePromise();

// function getData() {
//     p.then((res) => console.log(res));
// }
// getData();const
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
            resolve("Promise Resolved Value!!");
        },
        10000);
});

// await can only be used inside an async function
async function handlePromise1() {
    console.log("Hello World!!");
    // JS Engine was waiting for promise to reoslved
    const val = await p;
    console.Log("Namaste JavaScript");
    console.log(val);
}
handlePromise();
// function getData() {
//JS Engine witt not wait for promise to be resolved
//p.then((res)=> console.log(res));
//｝
console.log("Namaste JavaScript");
//}
//getData();
import fetch from 'node-fetch'
const Api_url = "https://jsonplaceholder.typicode.com/posts/1"
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

// const Api_url = "https://api.github.com/users/vaibhavdabral11"
// const Api_url2 = "https://ertyu.com"