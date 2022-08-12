let myWrite = require("./writeAndReadObject");
let myRead = require("./readConsole");

myWrite.writeAndRead("./persona.json", {
  name: "ana",
  surname: "gomez",
  age: "20",
});
myRead.readConsole("./persona.json");
