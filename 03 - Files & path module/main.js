// const fs = require('fs');

// // console.log(fs); // Display all properties and functions of fs module

// console.log("Starting");
// // fs.writeFileSync("soumya.txt", "My sample text file.");
// fs.writeFile("tutuli.txt", "Tutu is very busy person", ()=>{
//     console.log("File created");
//     fs.readFile("tutuli.txt", (error, data)=>{
//         console.log(error, data.toString());
//     })
// })
// console.log("Ending");

const fs = require("fs");

console.log("Starting");
fs.appendFile("soumya.txt", "Sample Text", (error, data)=>{
    console.log(error, data);
})
console.log("Ending");