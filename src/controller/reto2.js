const { Professional } = require("../models/ImbdProfesional");

let profes = [];

let tomHolland = new Professional(
  "Tom Holland",
  25,
  "male",
  70,
  1.75,
  "brown",
  "brown",
  "british",
  false,
  "british",
  0,
  "actor"
);

let zendaya = new Professional(
  "Zendaya",
  25,
  "female",
  60,
  1.75,
  "brown",
  "brown",
  "american",
  false,
  "american",
  0,
  "actress"
);

let monicaBellucci = new Professional(
  "Monica Bellucci",
  57,
  "female",
  63,
  1.71,
  "dark",
  "brown",
  "european",
  false,
  "italian",
  0,
  "actress"
);

profes.push(tomHolland);
profes.push(zendaya);
profes.push(monicaBellucci);

console.log(profes);

function getProfes(request, response) {
  let respuesta = profes;
  response.send(respuesta);
}

function getProfesId(request, response) {
  console.log("Lanzando la funcion getProfesId");
  let respuesta;
  let id = request.query.id;
  respuesta = {
    error: false,
    codigo: 200,
    mensaje: "Profesional encontrado",
    resultado: profes[id],
  };
  if (!id) {
    respuesta = {
      error: false,
      codigo: 200,
      mensaje: "Profesionales encontrados",
      resultado: profes,
    };
  }
  response.send(respuesta);
}

function postProfes(request, response) {
  console.log("Lanzando postProfessional");
  let respuesta;
  console.log(request.body);

  let professional = new Professional(
    request.body.name,
    request.body.age,
    request.body.genre,
    request.body.weight,
    request.body.height,
    request.body.hairColor,
    request.body.eyeColor,
    request.body.race,
    request.body.isRetired,
    request.body.nacionality,
    request.body.oscarNumber,
    request.body.profession
  );

  profes.push(professional);
  respuesta = {
    error: false,
    codigo: 200,
    mensaje: "Profesional creado",
    resultado: professional,
  };

  response.send(respuesta);
}

function putProfes(request, response) {
  console.log("Lanzando putProfes");
  let respuesta;
  let id;
  let newId = request.body.id;

  for (let i = 0; i < profes.length; i++) {
    id = profes[i].id;

    if (newId == id) {
      profes[i].id = request.body.id;
      profes[i].name = request.body.name;
      profes[i].age = request.body.age;
      profes[i].genre = request.body.genre;
      profes[i].weight = request.body.weight;
      profes[i].height = request.body.height;
      profes[i].hairColor = request.body.hairColor;
      profes[i].eyeColor = request.body.eyeColor;
      profes[i].race = request.body.race;
      profes[i].isRetired = request.body.isRetired;
      profes[i].nacionality = request.body.nacionality;
      profes[i].oscarNumber = request.body.oscarNumber;
      profes[i].profession = request.body.profession;

      respuesta = {
        error: false,
        codigo: 200,
        mensaje: "Profesional actualizado",
        resultado: profes[i],
      };
    }
  }
  response.send(respuesta);
}

function deleteProfes(request, response) {
  console.log("Lanzando DeleteProfes");
  let respuesta;
  let id = request.body.id;

  if (profes != null) {
    profes.splice(id, 1);
    respuesta = {
      error: false,
      codigo: 200,
      mensaje: "Actor eliminado correctamente",
    };
  } else {
    respuesta = {
      error: true,
      codigo: 200,
      mensaje: "No se ha eliminado ningún Actor",
    };
  }
  response.send(respuesta);
}

module.exports = {
  getProfes,
  getProfesId,
  postProfes,
  putProfes,
  deleteProfes,
};
