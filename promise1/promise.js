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