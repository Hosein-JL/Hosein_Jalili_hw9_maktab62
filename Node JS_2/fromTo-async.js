const fs = require("fs");

fs.readFile(
  "./Node JS_2/from.txt",
  { encoding: "utf-8" },
  function (err, data) {
    if (err) return console.error("error ===>", err);
    console.log(data);
    fs.writeFile("./Node JS_2/to.txt", data, function (err) {
      if (err) return console.error("error ===>", err);
      console.log(`The async process was done successfully.`);
    });
  }
);

// node '.\Node JS_2\fromTo-async.js'

// Using the Buffer `toString()` Function in Node.js

// var data = fs.readFileSync("./Node JS_2/from.txt", { encoding: "utf-8" });
// console.log(data);

// var data = fs.readFileSync("./Node JS_2/from.txt");
// console.log(data.toString());
