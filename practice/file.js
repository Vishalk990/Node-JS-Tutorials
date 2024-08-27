// const fs = require("fs");
// const os = require("os");

// console.log(os.cpus().length);

// Creatin file synchronously
// fs.writeFileSync("./test.txt","Hi There");

// Creating file asynchronously -- (needs a callback)

// fs.writeFile("./contacts.txt","This is contacts",(err) => {
//     console.log(err);
// });

// Reading file sync

// const result = fs.readFileSync("./contacts.txt","utf-8");
// console.log(result);

// Reading file async
// fs.readFile("./contacts.txt", "utf-8", (err,res) => {
//     if(err)
//         console.log(err);
//     else 
//         console.log(res);   
// });

// Appending to a file

// fs.appendFileSync("./contacts.txt", new Date().getDate().toLocaleString() + "\n");


// fs.cpSync("./test.txt","./copy.txt");
// fs.unlinkSync("./copy.txt");

// console.log(fs.statSync("./contacts.txt"));


// fs.mkdirSync("demo/a/b",{recursive:true});