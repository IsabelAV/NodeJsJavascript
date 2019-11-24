/*function iniciar() {
  console.log("Manipulador de petición 'iniciar' ha sido llamado.");
}

function subir() {
  console.log("Manipulador de petición 'subir' ha sido llamado.");
}*/

//-----------------------------------------------------------------------------

/*var exec = require("child_process").exec;

function iniciar(response) {
  console.log("Manipulador de petición 'iniciar' fue llamado.");

  exec("ls -lah", function (error, stdout, stderr) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(stdout);
    response.end();
  });
  
  
function subir(response) {
  console.log("Manipulador de peticiones 'subir' fue llamado.");
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("Hola Subir");
  response.end();
}
}*/

//------------------------------------------------------------------------ 

/*function iniciar(response) {
  console.log("Manipulador de peticiones 'iniciar' fue llamado.");

  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html"; charset="UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/subir" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Enviar texto" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}


function subir(response, dataPosteada) {
  console.log("Manipulador de Peticion 'subir' fue llamado.");
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("Tu enviaste: " + dataPosteada);
  response.end();
}


exports.iniciar = iniciar;
exports.subir = subir;*/

//--------------------------------------------------------------------------

var querystring = require("querystring");
var uc = require("upper-case");

function iniciar(response, postData) {
  console.log("Manipulador de peticion 'inicio' fue llamado.");

  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html"; charset="UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/subir" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function subir(response, dataPosteada) {
    console.log("Manipulador de peticion 'subir' fue llamado.");
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("Tu enviaste el texto: : " + querystring.parse(dataPosteada)["text"]);
    //response.write(uc("Tu enviaste el texto: : " + querystring.parse(dataPosteada)["text"])); //escribe todo el texto recibido en mayusculas
    response.end();
}

exports.iniciar = iniciar;
exports.subir = subir;