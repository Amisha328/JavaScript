// aysnc await >> promise chains >> callback hell

/*
console.log("one");
console.log("two");
//asynchronous function

setTimeout(()=>{
    console.log("Hello")
}, 2000);

console.log("three");
console.log("four");
*/

// Callback functions
/*
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
*/

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
pending - the result is undefined
resolve - the result is a value (fulfilled)
rejected - the result is an error object

*/

// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     // resolve(123);
//     reject("Some eror occured")
// })


// function getData(dataId, getNextData){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data is ", dataId);
//             resolve("success");
//             if(getNextData) getNextData();
//         }, 5000);
//     })  
// }

/*
const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I am a promise");
        resolve("success");
        // reject("Some eror occured") 
    })
}

let promise = getPromise();
promise.then((res) => {
    console.log("Promise fulfilled ", res)
})
promise.catch((err) =>{
    console.log("Promise rejected ", err)
})
*/

// Chaining of Promise
/*
const asyncFunc1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data1");
            resolve("sucsess")
        }, 4000);
    })
}

const asyncFunc2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data2");
            resolve("success")
        }, 4000);
    })
}

console.log("fetching data1....");
let p1 = asyncFunc1();
p1.then((res) => {
    console.log(res);
    console.log("fecting data2....");
    let p2 = asyncFunc2();
    p2.then((res) => {
        console.log(res);
    })
})

*/

/*
console.log("fetching data1....");
asyncFunc1().then((res) => {
    console.log(res);
    console.log("fecting data2....");
    asyncFunc2().then((res) => {
        console.log(res);
    })
})
*/


/*

function getData(dataId){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("data ", dataId);
            resolve("success");
        }, 2000)
    })
}


getData(1).then((res) => {
    console.log(res);
    getData(2).then((res) => {
        console.log(res)
    })
})

// Promise Chaining
getData(1).then((res) => {
    return getData(2);
    })
    .then((res) => {
        return getData(3);
    })
    .then((res) => {
        console.log(res)
    })
*/



    /* 

    async-await => async function returns a promise
    await pause the execution of its surrounding async function until the promise is settled.
    */

    /*
    function api(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Weather data");
                resolve(200);
            }, 2000)
        });
    }

    async function getWeatherData(){
        await api(); // 1st call
        await api(); // 2nd call
    }
    */


    function getData(dataId){
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                console.log("data ", dataId);
                resolve("success");
            }, 2000)
        })
    }


    async function getAllData(){
        await getData(1);
        await getData(2);
        await getData(3);
    }

// IIFE: Immediately Invoked Function Expression
// It is a fucntion that is called immediately as soon as it is defined.


(async function (){
    await getData(1);
    await getData(2);
    await getData(3);
})();
