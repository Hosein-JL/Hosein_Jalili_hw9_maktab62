function fullName(fn, ln, callback) {
  let fullname = `${fn} ${ln}`;
  callback(fullname);
}

fullName("Hosein", "Jalili", function (fullname) {
  console.log(fullname);
});

//node '.\Node JS_1\main.js'
