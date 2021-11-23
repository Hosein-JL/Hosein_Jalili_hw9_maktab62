const fs = require("fs");

fs.readFile("./Node JS_2/from.txt", function (err, fromData) {
  if (err) return console.error("error ===>", err);
  console.log(fromData.toString());
  fs.readFile("./Node JS_2/append.txt", function (err, appendData) {
    if (err) return console.error("error ===>", err);
    console.log(appendData.toString());
    fs.writeFile("./Node JS_2/to.txt", `${fromData} ${appendData}`, (err) => {
      if (err) return console.error("error ===>", err);
      console.log(`The async process was done successfully.`);
    });
  });
});

// node '.\Node JS_2\fromAppendTo-async.js'
