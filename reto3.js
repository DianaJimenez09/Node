const express = require("express");
const app = express();

app.get("/", function (req, res) {
  console.log("Request received from client");
  console.log(`La URL es ${req.url}`);
  console.log(`El método es: ${req.method}`);
  console.log(`User-agent :   ${req.headers["user-agent"]}`);
  console.log(`Content-lenght:" ${req.headers["content-length"]}`);
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(JSON.stringify({ ok: true, message: "Recibido" }));
  res.end();
});

app.get("/bye", function (req, res) {
  console.log("Request received from client");
  console.log(`La URL es ${req.url}`);
  console.log(`El método es: ${req.method}`);
  console.log(`User-agent :   ${req.headers["user-agent"]}`);
  console.log(`Content-lenght:" ${req.headers["content-length"]}`);
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(JSON.stringify({ ok: true, message: "Adiós!" }));
  res.end();
});

app.listen(4004);
