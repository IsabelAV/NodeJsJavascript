/*
    Archivo principal de nuestra aplicación
    Contiene las llamadas al servidor, al router y al manipulador de peticiones
*/
var server = require("./servidor");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/"] = requestHandlers.iniciar;
handle["/iniciar"] = requestHandlers.iniciar;
handle["/recuperar"] = requestHandlers.recuperar;
handle["/visualizar"] = requestHandlers.visualizar;

server.iniciar(router.route, handle);
