// console.log("bsdk")
// console.log(__dirname)
// console.log(__filename)
// console.log(require)
// console.log(module)

// JSON-
//     1) JSON stands for Javascript Object Notation.
//     2) It is lightweight format for storing and transfering data. 
//     3) It is often used when data is sent from a server to web pages.  

// There are only two methods of json 
// 1) json.stringify() - It converts the js object to json.
let obj = {
    Name : "Mike",
    Place : "NYC"
}

let json = JSON.stringify(obj)
console.log(json);

// 2) json.parse() - It converts the json to js object.
let convertedObj = JSON.parse(json);
console.log(convertedObj)

const fs = require('fs');

fs.writeFile('file.json', json, (err) =>{
    console.log(err)
})

fs.readFile('file.json', 'utf-8', (err, data) =>{
    console.log(data)
    let obj = JSON.parse(data);
    console.log(obj)
})