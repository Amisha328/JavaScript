// aysnc await >> promise chains >> callback hell

console.log("one");
console.log("two");
//asynchronous function

setTimeout(()=>{
    console.log("Hello")
}, 2000);

console.log("three");
console.log("four");


// Callback functions

function sum(a, b){
    console.log(a+b);
}

function calculator(a, b, sumCallback){
    sumCallback(a, b);
}

// calculator(1, 2, sum);

calculator(1, 2, (a, b) => {
    console.log(a+b);
})


// Callback Hell
//Nested callbacks stacked below one another forming a pyramid structure( Pyramid of Doom)
/*

function getData(dataId, getNextData){
    setTimeout(()=>{
        console.log("data", dataId);
        if(getNextData) getNextData();
    }, 2000)
}

getData(1, () => {
    getData(2, () =>{
        getData(3);
    });
});
*/

// Promise:

/*
Promise is for "eventual" completion of task. It is an object in JS. It is a solution to callback hell
resolve & reject are callbacks provided by JS.

State of Promise:
pending
fulfilled
rejected

*/

let promise = new Promise((resolve, reject) => {
    console.log("I am a promise");
    resolve(123);
})

