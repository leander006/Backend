const http = require("http");

/*
 * Now you need to just check request.url to see for which request url we are requesting the api
 * Based on that we can send the response from the api
 */

const server = http.createServer(function exec(request, response) {
  if (request.url == "/home") {
    response.end("Welcome to home page");
  } else if (request.url == "/about") {
    response.end("Welcome to about page");
  } else {
    response.end("Hello to api of http module");
  }
});

server.listen(3000, function process() {
  console.log("Server running on 3000");
});
