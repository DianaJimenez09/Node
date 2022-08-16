const express = require("express");
const app = express();

let usuario = null; // {nombre: 'Jose', apellidos: 'Garcia Garcia'}

function getStart(request, response) {
  let respuesta = { error: true, codigo: 200, mensaje: "Punto de unicio" };
  response.send(respuesta);
}

function getUser(request, response) {
  let respuesta;
  if (usuario != null) respuesta = usuario;
  else
    respuesta = { error: true, codigo: 200, mensaje: "El usuario no existe" };

  response.send(respuesta);
}

function getUser(request, response) {
  let name = request.query.name;
  let respuesta;

  if (usuario != null && (!name || name === usuario.nombre))
    respuesta = usuario;
  else
    respuesta = { error: true, codigo: 200, mensaje: "El usuario no existe" };

  response.send(respuesta);
}

function getUser2parms(request, response) {
  let name = request.params.name;
  if (usuario != null && name === usuario.nombre) response.send(usuario);
  else
    response.send({
      error: true,
      codigo: 200,
      mensaje: "El usuario no existe",
    });
}

function postUser(request, response) {
  let respuesta;
  console.log(request.body);
  if (usuario === null) {
    usuario = {
      nombre: request.body.nombre1,
      apellidos: request.body.apellido1,
    };
    respuesta = {
      error: false,
      codigo: 200,
      mensaje: "Usuario Creado",
      resultado: usuario,
    };
  } else
    respuesta = {
      error: true,
      codigo: 200,
      mensaje: "Usuario existente",
      resultado: null,
    };

  response.send(respuesta);
}

function putUser(request, response) {
  let respuesta;
  console.log(request.body);
  if (usuario != null) {
    {
      (nombre = request.body.nombre1),
        (apellidos = request.body.apellido1),
        (respuesta = {
          error: false,
          codigo: 200,
          mensaje: "Usuario actualizado",
          resultado: usuario,
        });
    }
  } else
    respuesta = {
      error: true,
      codigo: 200,
      mensaje: "Usuario no existente",
      resultado: usuario,
    };

  response.send(respuesta);
}

function deleteUser(request, response) {
  let respuesta;
  console.log(request.body);
  if (usuario != null) {
    {
      nombre = null;
      respuesta = {
        error: false,
        codigo: 200,
        mensaje: "Usuario borrado",
        resultado: usuario,
      };
    }
  } else
    respuesta = {
      error: true,
      codigo: 200,
      mensaje: "Usuario no existente",
      resultado: usuario,
    };

  response.send(respuesta);
}

module.exports = {
  getStart,
  getUser,
  getUser2parms,
  postUser,
  putUser,
  deleteUser,
};
