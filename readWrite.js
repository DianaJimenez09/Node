const persona = {
  name: "Roberta",
  surname: "Bandini",
  age: 30,
};

const fs = require("fs");
let data = JSON.stringify(persona);

fs.writeFile("persona.json", data, (error) => {
  if (error) {
    console.log(error);
  }
});

fs.readFile("persona.json", () => {
  console.log(JSON.parse(data));
});
