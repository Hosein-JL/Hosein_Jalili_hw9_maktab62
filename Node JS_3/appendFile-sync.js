const fs = require("fs");

let path = "./Node Js_3/newfile_1.txt";

// Create File using appendFileSync()

let data;
try {
  data = fs.appendFileSync(
    "./Node Js_3/newfile_1.txt",
    "Learn Node FS module "
  );
  console.log("File is created successfully.");
} catch (error) {
  console.log("error ===>", error);
}

//check a file exists accessSync()

try {
  fs.accessSync(path);
  console.log("exists:", path);
} catch (err) {
  console.log("DOES NOT exist:", path);
  console.error(err);
}

//node '.\Node JS_3\appendFile-sync.js'
