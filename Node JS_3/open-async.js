const fs = require("fs");

let path = "./Node Js_3/newfile.txt";

// Create File using open()

fs.open("./Node Js_3/newfile.txt", "w", function (err, fd) {
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
});

// node '.\Node JS_3\open-async.js'
