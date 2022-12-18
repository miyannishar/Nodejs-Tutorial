// Managing drawback of async using promises

const { resolve } = require("path");

let a = 10;
let b = 20;


let waitingData = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve(30);
    }, 2000);
})

waitingData.then(()=>{
    b = data;
    console.log(a + b);
})

// console.log(a+b);