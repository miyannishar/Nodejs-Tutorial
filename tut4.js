// Async Language


let a = 10;
let b = 20;

setTimeout(() => {
    b = 30;
    console.log(a+b);
}, 2000);

console.log(a+b);