/*
    Archivo que contiene el router de nuestra aplicación
    Según la URL recibida, nuestro router va a saber que código debe ejecutar en cada momento
*/
function route(request, handle, pathname, response, postData) {
  console.log("A punto de rutear una peticion para " + pathname);
  if (typeof handle[pathname] === 'function') {
    handle[pathname](request, response, postData);
  } else {
    console.log("No se ha encontrado manipulador para " + pathname);
    response.writeHead(404, {"Content-Type": "text/html"});
    response.write("404 No encontrado");
    response.end();
  }
}

exports.route = route;
exports.route = route;