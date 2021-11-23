const fs = require("fs");

let path = "./Node Js_3/newfile.txt";

// Create File using openSync()

try {
  fs.openSync("./Node Js_3/newfile.txt", "w");
  console.log("File is created successfully.");
} catch (error) {
  "error ===>", error;
}

//check a file exists accessSync()

try {
  fs.accessSync(path);
  console.log("exists:", path);
} catch (err) {
  console.log("DOES NOT exist:", path);
  console.error(err);
}

// node '.\Node JS_3\open-sync.js'
