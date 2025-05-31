// NODE JS BUILT IN MODULES

// const http = require("http");

// server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("Hello World!");
// });

// server.listen(3000, ()=>{
//     console.log('server running...')
// });

// const fs = require("fs");

// // Write to a file
// fs.writeFileSync("hello.txt", "Hello, Node.js!");

// // Read from a file
// const data = fs.readFileSync("hello.txt", "utf-8");
// console.log(data); // Output: Hello, Node.js!

// const path = require("path");

// const fullPath = path.join(__dirname, "folder", "file.txt");
// console.log(fullPath);

// // Output example: /Users/yourname/folder/file.txt

// const os = require("os");

// console.log("OS Platform:", os.platform());
// console.log("Free Memory:", os.freemem());

// const url = require("url");

// const myURL = new URL("https://example.com:8080/path?name=elnur");
// console.log(myURL.hostname); // example.com
// console.log(myURL.searchParams.get("name")); // elnur

// const crypto = require("crypto");

// const hash = crypto.createHash("sha256").update("password123").digest("hex");
// console.log(hash);

// // bcrypt

// console.log(__filename);
// global.x = "code";
// console.log(x); // code

// const fs = require("fs");

// function add(a, b) {
//   return a + b;
// }

// module.exports = add; //default


console.log(process.env.USER); // Your system username

console.log(process.argv); // Command line arguments

process.exit(); // Stops the program
