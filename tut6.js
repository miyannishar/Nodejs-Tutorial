console.log("starting up");

setTimeout(()=>{
    console.log("2 second delay");
}, 2000)

setTimeout(() => {
    console.log("0 second delay");
}, 1000);

console.log("finishing up");