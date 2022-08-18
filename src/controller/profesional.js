const { Professional } = require("./ImbdProfesional");
const express = require("express");
const app = require("../src/routers/app");

const tomHolland = new Professional(
  "Tom Holland",
  26,
  "Male",
  73,
  1.76,
  "dark brown",
  "brown",
  "white-person",
  false,
  "british",
  0,
  "actor"
);
const angelinaJolie = new Professional("Angelina Jolie", 47, "female");

let professional = null;

function getStart(request, response) {
  let respuesta = { error: true, codigo: 200, mensaje: "Punto de unicio" };
  response.send(respuesta);
}

function getUser(request, response) {
  let respuesta;
  if (professional != null) respuesta = professional;
  else
    respuesta = {
      error: true,
      codigo: 200,
      mensaje: "El profesional no existe",
    };

  response.send(respuesta);
}

function getUser(request, response) {
  let name = request.query.name;
  let respuesta;

  if (professional != null && (!name || name === professional.name))
    respuesta = professional;
  else
    respuesta = {
      error: true,
      codigo: 200,
      mensaje: "El profesional no existe",
    };

  response.send(respuesta);
}

// function getUser2parms(request, response) {
//   let name = request.params.name;
//   if (professional != null && name === professional.name) response.send(professional);
//   else
//     response.send({
//       error: true,
//       codigo: 200,
//       mensaje: "El usuario no existe",
//     });
// }

function postUser(request, response) {
  let respuesta;
  console.log(request.body);
  if (professional === null) {
    professional = new Professional(
      request.body.name,
      request.body.age,
      request.body.genre,
      request.body.weigth,
      request.body.height,
      request.body.hairColor,
      request.body.eyeColor,
      request.body.race,
      request.body.isRetired,
      request.body.nacionality,
      request.body.oscarNumber,
      request.body.profession
    );
    respuesta = {
      error: false,
      codigo: 200,
      mensaje: "Professional creado",
      resultado: professional,
    };
  } else
    respuesta = {
      error: true,
      codigo: 200,
      mensaje: "Professional existente",
      resultado: null,
    };

  response.send(respuesta);
}

function putUser(request, response) {
  let respuesta;
  console.log(request.body);
  if (professional != null) {
    professional.name = request.body.name;
    professional.age = request.body.age;
    professional.genre = request.body.genre;
    professional.weigth = request.body.weigth;
    professional.height = request.body.height;
    professional.hairColor = request.body.hairColor;
    professional.eyeColor = request.body.eyeColor;
    professional.race = request.body.race;
    professional.isRetired = request.body.isRetired;
    professional.nacionality = request.body.nacionality;
    professional.oscarNumber = request.body.oscarNumber;
    professional.profession = request.body.profession;

    respuesta = {
      error: false,
      codigo: 200,
      mensaje: "Profesional actualizado",
      resultado: professional,
    };
  } else
    respuesta = {
      error: true,
      codigo: 200,
      mensaje: "Profesional no existente",
      resultado: professional,
    };

  response.send(respuesta);
}

function deleteUser(request, response) {
  let respuesta;
  console.log(request.body);
  if (professional != null) {
    {
      professional = null;
      respuesta = {
        error: false,
        codigo: 200,
        mensaje: "Professional borrado",
        resultado: professional,
      };
    }
  } else
    respuesta = {
      error: true,
      codigo: 200,
      mensaje: "Profesional no existente",
      resultado: professional,
    };

  response.send(respuesta);
}

module.exports = {
  getStart,
  getUser,
  postUser,
  putUser,
  deleteUser,
};
