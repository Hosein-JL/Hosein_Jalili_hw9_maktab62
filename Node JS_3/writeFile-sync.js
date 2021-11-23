const { writeFileSync, existsSync } = require("fs");

let path = "./Node Js_3/newfile_2.txt";

//Create File using writeFileSync()

try {
  writeFileSync("./Node Js_3/newfile_2.txt", "Learn Node FS module");
  console.log("File is created successfully.");
} catch (error) {
  console.log("error ===>", error);
}

//check a file existsSync()

try {
  existsSync(path);
  console.log("exists:", path);
} catch (error) {
  console.log("DOES NOT exist:", path);
  console.log("error ===>", error);
}
