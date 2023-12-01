// Asynchronous or non-blocking
    // -line by line execution is not guarented
    // - fire a callback 
    // for eg-
let fs1 = require("fs");
fs1.readFile("text.txt", "utf-8", (err, data)=>{
    console.log(data)
})
console.log("Asynchronous or non-blocking")

// Synchronouos or blocking
    // -line by line execution 
    // for eg-
let fs2 = require("fs");
let text = fs2.readFileSync("text.txt", "utf-8");

console.log(text);
console.log("Sysnchronous or blocking")

text = text.replace("Hey", "Hola");
fs2.writeFileSync("text2.txt", text)
