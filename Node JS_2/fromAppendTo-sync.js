const fs = require("fs");

//try catch hell

try {
  var fromData = fs.readFileSync("./Node JS_2/from.txt");
  console.log(fromData.toString());
  try {
    var appendData = fs.readFileSync("./Node JS_2/append.txt");
    console.log(appendData.toString());
    try {
      fs.writeFileSync("./Node JS_2/to.txt", `${fromData} ${appendData}`);
      console.log(`The async process was done successfully.`);
    } catch (error) {
      console.log("error ====>", error);
    }
  } catch (error) {
    console.log("error ====>", error);
  }
} catch (error) {
  console.log("error ====>", error);
}

// node '.\Node JS_2\fromAppendTo-sync.js'
