const fs = require("fs");

let path = "./Node Js_3/newfile_1.txt";

// Create File using appendFile()

fs.appendFile(
  "./Node Js_3/newfile_1.txt",
  "Learn Node FS module",
  function (err) {
    if (err) throw err;
    console.log("File is created successfully.");

    //check a file exists access()

    fs.access(path, function (error) {
      if (error) {
        console.log("DOES NOT exist:", path);
        console.error(error);
      } else {
        console.log("exists:", path);
      }
    });
  }
);

// node '.\Node JS_3\appendFile-async.js'
