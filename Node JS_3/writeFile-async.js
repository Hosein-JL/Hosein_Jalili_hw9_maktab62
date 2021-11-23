const fs = require("fs");

let path = "./Node Js_3/newfile_2.txt";

//Create File using writeFile()

fs.writeFile(
  "./Node Js_3/newfile_2.txt",
  "Learn Node FS module",
  function (err) {
    if (err) throw err;
    console.log("File is created successfully.");

    //check a file exists()

    fs.exists(path, function (isExist) {
      if (isExist) {
        console.log("exists:", path);
      } else {
        console.log("DOES NOT exist:", path);
      }
    });
  }
);

// node '.\Node JS_3\writeFile-async.js'
