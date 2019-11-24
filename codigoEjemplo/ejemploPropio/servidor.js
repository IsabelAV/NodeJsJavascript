/*
    Archivo que contiene el servidor de nuestra aplicación. 
    Desde aquí se realiza la conexión HTTP, se gestionan las llamadas a la url y se gestionan los modulos del manipulador de peticiones
*/
var http = require("http");
var url = require("url");

function iniciar(route, handle) {
  function onRequest(request, response) {
        var dataPosteada = "";
        var pathname = url.parse(request.url).pathname;
        console.log("Peticion para " + pathname + " recibida.");

        request.setEncoding("utf8");

        request.addListener("data", function(trozoPosteado) {
          dataPosteada += trozoPosteado;         
    });

    request.addListener("end", function() {
      route(request, handle, pathname, response, dataPosteada);
    });

  }

  http.createServer(onRequest).listen(8888);
  console.log("Servidor Iniciado");
}

exports.iniciar = iniciar;















