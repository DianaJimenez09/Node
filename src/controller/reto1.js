// const { Professional } = require("../models/ImbdProfesional");

// let professional = null;

// function getStart(request, response) {
//   console.log("Lanzando getStart");
//   let respuesta = { error: true, codigo: 200, mensaje: "Punto de inicio" };
//   response.send(respuesta);
// }

// const getProfessional = (request, response) => {
//   console.log("Lanzando getProfessional");
//   let name = request.query.name;
//   let respuesta;
//   if (professional != null && (!name || name === professional.name)) {
//     respuesta = professional;
//   } else {
//     respuesta = {
//       error: true,
//       codigo: 200,
//       mensaje: "El profesional no existe",
//     };
//   }
//   response.send(respuesta);
// };

// function postProfessional(request, response) {
//   console.log("Lanzando postProfessional");
//   let respuesta;
//   console.log(request.body);
//   if (professional === null) {
//     professional = new Professional(
//       request.body.id,
//       request.body.name,
//       request.body.age,
//       request.body.genre,
//       request.body.weight,
//       request.body.height,
//       request.body.hairColor,
//       request.body.eyeColor,
//       request.body.race,
//       request.body.isRetired,
//       request.body.nacionality,
//       request.body.oscarNumber,
//       request.body.profession
//     );
//     respuesta = {
//       error: false,
//       codigo: 200,
//       mensaje: "Profesional creado",
//       resultado: professional,
//     };
//   } else {
//     respuesta = {
//       error: true,
//       codigo: 500,
//       mensaje: "Ya existe professional",
//       resultado: null,
//     };
//   }
//   response.send(respuesta);
// }

// function putProfessional(request, response) {
//   console.log("Lanzando putProfessional");
//   let respuesta;
//   if (professional != null) {
//     professional.id = request.body.id;
//     professional.name = request.body.name;
//     professional.age = request.body.age;
//     professional.genre = request.body.genre;
//     professional.weight = request.body.weight;
//     professional.height = request.body.height;
//     professional.hairColor = request.body.hairColor;
//     professional.eyeColor = request.body.eyeColor;
//     professional.race = request.body.race;
//     professional.isRetired = request.body.isRetired;
//     professional.nacionality = request.body.nacionality;
//     professional.oscarNumber = request.body.oscarNumber;
//     professional.profession = request.body.profession;
//     respuesta = {
//       error: false,
//       codigo: 200,
//       mensaje: "Profesional actualizado",
//       resultado: professional,
//     };
//   } else {
//     respuesta = {
//       error: true,
//       codigo: 200,
//       mensaje: "No existe professional",
//       resultado: professional,
//     };
//   }
//   response.send(respuesta);
// }

// function deleteProfessional(request, response) {
//   console.log("Lanzando deleteProfessional");
//   let respuesta;
//   if (professional != null) {
//     professional = null;
//     respuesta = {
//       error: false,
//       codigo: 200,
//       mensaje: "Borrado",
//       resultado: professional,
//     };
//   } else {
//     respuesta = {
//       error: true,
//       codigo: 200,
//       mensaje: "No existe el professional",
//       resultado: professional,
//     };
//   }
//   response.send(respuesta);
// }

// module.exports = {
//   getStart,
//   getProfessional,
//   postProfessional,
//   putProfessional,
//   deleteProfessional,
// };
