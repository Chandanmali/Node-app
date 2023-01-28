// 3 types of node modules 

//file base, Build in, Third Party

// console.log("Hello world chandan subscribe");
// console.log(window);

//fs.readfile

const fs = require("fs");
//use readfile
// fs.readFile("./sample.txt", "utf-8", (err, data) => {  // Asynchronus method processing but not print first, print second.
//        if(err){
//               throw err;           
//        }
//        console.log(data);
// });

console.log("Hello chandan mali");

//fs.readfileSync
const a = fs.readFileSync("./sample.txt", "utf-8"); // Synchronus method processing print first, and then other function print.
console.log(a);
console.log("Hello suraj mali");


//fs.WriteFile
const c = "Happy RepublicDay";  // makefile.txt created using this function
fs.writeFile("makefile.txt", c, () => { //Asynchronus method for file making
       console.log("Written");  // print second
})
console.log("Indian constitution");  // print first

//fs.WriteFileSync
const d = "Happy RepublicDay to all indians";
fs.writeFileSync("newfile.txt", d, () => { //Synchronus method for file making
       console.log("Written");  // print first 
});
console.log("Indian constitution by Dr. Babasahed ambedkar"); // print second