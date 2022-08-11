let myWrite = require("./writeAndReadObject");
let myRead = require("./readConsole");

console.log(
  myWrite.writeAndRead("obj", { name: "joel", surname: "martinez", age: 40 })
);
console.log(myRead.readConsole("./persona.json"));
