const fs = require("fs");

var namesData = fs.readFileSync("./Node JS_4/names.txt");
namesData = namesData.toString();

var numbersData = fs.readFileSync("./Node JS_4/numbers.txt");
numbersData = numbersData.toString();

//conver string to object

let names = {};
namesData = namesData.toString().split("\r\n");

for (let x of namesData) {
  let name = x.split("-");
  names[name[0]] = name[1];
}

//conver string to object

let numbers = {};
numbersData = numbersData.toString().split("\r\n");

for (let x of numbersData) {
  let number = x.split("-");
  if (numbers.hasOwnProperty(number[0])) {
    numbers[number[0]].push(number[1]);
  } else {
    numbers[number[0]] = [number[1]];
  }
}

//craate phoneBook
let phoneBook = "";

for (const [keys, values] of Object.entries(numbers)) {
  for (const [key, value] of Object.entries(names)) {
    if (Object.entries(numbers).find((i) => i[0] === key)) {
      if (key === keys && values.length === 1) {
        console.log(`${names[key]}'s phone number is ${values}`);
        phoneBook += `${names[key]}'s phone number is ${values}\n`;
        break;
      } else if (key === keys && values.length > 1) {
        console.log(`${names[key]}s phone numbers are ${values}`);
        phoneBook += `${names[key]}s phone numbers are ${values}\n`;
      }
    } else {
      console.log(`${value} hasn't any phone number.`);
      phoneBook += `${value} hasn't any phone number.\n`;
    }
  }
}

//creat file txt

try {
  fs.writeFileSync("./Node Js_4/phoneBook.txt", phoneBook);
  console.log("File is created successfully.");
} catch (error) {
  console.log("error ===>", error);
}
