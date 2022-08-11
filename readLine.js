const fs = require("fs");

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

rl.question("What is your name?", (name) => {
  console.log(`Hello, my name is ${name}`);
  rl.question("And what is your surname?", (surname) => {
    console.log(`My surname is ${surname}`);
    rl.question("And how are old you?", (age) => {
      console.log(`I'm ${age} years old`);
      rl.close();

      let data = JSON.stringify(persona);
      fs.writeFile("persona.json", data, (error) => {
        if (error) {
          console.log(error);
        }
      });

      fs.readFile("persona.json", () => {
        console.log(JSON.parse(data));
      });
    });
  });
});
