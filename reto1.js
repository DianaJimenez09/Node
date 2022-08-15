const http = require("http");

const server = http.createServer(function (request, response) {
  if (request.url == "/bye") {
    console.log("Request received from client");
    console.log(`La URL es ${request.url}`);
    console.log(`El método es: ${request.method}`);
    console.log(`User-Agent: ${request.header["user-agent"]}`);
    console.log(`Content-Length: ${request.headers["content-length"]}`);
    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(JSON.stringify({ ok: true, message: "Adiós!" }));
    response.end();
  } else {
    console.log("Request received from client");
    console.log(`La URL es ${request.url}`);
    console.log(`El método es: ${request.method}`);
    console.log(`User-agent :   ${request.headers["user-agent"]}`);
    console.log(`Content-lenght:" ${request.headers["content-length"]}`);
    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(JSON.stringify({ ok: true, message: "Recibido" }));
    response.end();
  }
});
server.listen(3001);
