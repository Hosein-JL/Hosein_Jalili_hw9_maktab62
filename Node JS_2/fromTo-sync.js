const fs = require("fs");

//try catch hell

// let data;
try {
  // data = fs.readFileSync("./Node JS_2/from.txt");
  var data = fs.readFileSync("./Node JS_2/from.txt");
  console.log(data.toString());
  try {
    fs.writeFileSync("./Node JS_2/to.txt", data);
    console.log(`The async process was done successfully.`);
  } catch (error) {
    console.log("error ====>", error);
  }
} catch (error) {
  console.log("error ====>", error);
}

// node '.\Node JS_2\fromTo-sync.js'

// Using the Buffer `toString()` Function in Node.js

// var data = fs.readFileSync("./Node JS_2/from.txt", { encoding: "utf-8" });
// console.log(data);

// var data = fs.readFileSync("./Node JS_2/from.txt");
// console.log(data.toString());
