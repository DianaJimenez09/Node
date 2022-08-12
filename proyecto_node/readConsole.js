const { resolve } = require("path");

function readConsole(path) {
  const fs = require("fs/promises");
  const readline = require("readline");

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const persona = {
    name: "",
    surname: "",
    age: "",
  };

  function pregunta(pregunta) {
    const question = new Promise(resolve, reject);
    rl.question(pregunta, (respuesta) => {
      resolve(respuesta);
      rl.close;
    });
    return question;
  }

  async function asyncAwait() {
    persona.nombre = await pregunta(`what's your name?`);
    persona.surname = await pregunta(`what's your surname?`);
    persona.age = await pregunta(`How old are you?`);

    await fs.writeFile(path, JSON.stringify(persona));
    const nuevo = await fs.readFile("persona.JSON", "utf-8");
    console.log(JSON.parse(nuevo));
  }

  asyncAwait();
}
module.exports = { readConsole };
