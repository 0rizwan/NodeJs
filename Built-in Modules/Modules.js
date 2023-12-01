// Built-in Modules 

// 1) os module - lets you interact with operating system 
const os = require("os");
// console.log(os.userInfo());

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
// console.log(currentOs);

// 2) path module - 
const path = require('path');

// It adds the path 
const filePath = path.join('/Built-in', 'Modules.js')
console.log(`Path join ${filePath}`)

// It shows the base file 
const base = path.basename(filePath)
// console.log(base)

// It gives a absolute path 
const absolute = path.resolve("terimakc", "bsdk")
console.log(`Path resolve - ${absolute}`)

// 3) FileSystem module- 

const fs = require("fs");
// fs.mkdirSync('rizwan'); //Creating a folder

// fs.writeFileSync('rizwan/text.txt', "This is text file"); //Creating a text file

// const data = fs.readFileSync('rizwan/text.txt' , 'utf-8'); //reading the file

// fs.appendFileSync('rizwan/text.txt', ' This is another text') //adding data to existing file

// fs.renameSync('rizwan/text.txt', 'rizwan/newText.txt')  //renaming the file

// fs.unlinkSync('rizwan/newText.txt'); //deleting the file

// fs.rmdirSync('rizwan'); //deleting a folder









