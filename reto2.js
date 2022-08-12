const fs = require("fs/promises");

const persona = {
  name: "Roberta",
  surname: "Bandini",
  age: "30",
};

fs.writeFile("persona.json", JSON.stringify(persona))
  .then(() => {
    return fs.readFile("persona.json", "utf-8");
  })
  .then((data) => {
    console.log(JSON.parse(data));
  })
  .catch((err) => {
    console.log(err);
  });

async function asyncAwait() {
  try {
    await fs.writeFile("persona.json", JSON.stringify(persona));
    const nuevo = await fs.readFile("persona.json", "utf-8");
    console.log(JSON.parse(nuevo));
  } catch (error) {
    console.log(error);
  }
}
asyncAwait();
