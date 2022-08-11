function writeAndRead(path, obj) {
  const fs = require("fs");

  let data = JSON.stringify(obj);

  fs.writeFile(path, data, (error) => {
    if (error) {
      console.log(error);
    }
  });

  fs.readFile(path, () => {
    console.log(JSON.parse(data));
  });
}

writeAndRead("./persona.json", { name: "a", surname: "b", age: 1 });
module.exports = { writeAndRead };
