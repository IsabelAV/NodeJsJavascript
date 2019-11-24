/*var server = require("./servidor.js");

server.iniciar();*/

//---------------------------------------------------

/*var server = require("./servidor");
var router = require("./router");

server.iniciar(router.route);*/

//---------------------------------------------------
var server = require("./servidor");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/"] = requestHandlers.iniciar;
handle["/iniciar"] = requestHandlers.iniciar;
handle["/subir"] = requestHandlers.subir;

server.iniciar(router.route, handle);
