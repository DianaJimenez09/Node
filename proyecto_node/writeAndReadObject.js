const fs = require("fs/promises");

async function writeAndRead(path, persona) {
  try {
    await fs.writeFile(path, JSON.stringify(persona));
    const nuevo = await fs.readFile("persona.json", "utf-8");
    console.log(JSON.parse(nuevo));
  } catch (error) {
    console.log(error);
  }
}

module.exports = { writeAndRead };
