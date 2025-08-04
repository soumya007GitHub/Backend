import fs from "fs/promises";

let a = await fs.readFile("soumya.txt");

let b = await fs.writeFile("soumya.txt", "New Text");

let c = await fs.appendFile("soumya.txt", "More content");


console.log(a.toString());

console.log(b);

console.log(c);