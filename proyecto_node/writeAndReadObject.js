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

module.exports = { writeAndRead };
