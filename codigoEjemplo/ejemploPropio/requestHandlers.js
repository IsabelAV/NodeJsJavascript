/*
    Archivo que contiene los módulos que gestionan nuestro manipulador de peticiones
*/
var querystring = require("querystring");
var	form = require('fs').readFileSync('public/CV.html'); 
var	fs = require('fs');
var querystring = require('querystring');
var util = require('util');
var dataString = '';

/*
    Módulo que iniciará nuestra aplicación, mostrandonos nuestra pagina principal
*/
function iniciar(request, response, dataPosteada) {
  console.log("Manipulador de peticion 'inicio' fue llamado.");
      if(request.method  == 'GET')
	{
		response.writeHead(200, {'Content-Type' : 'text/html'})
		response.end(form)
        
	}
}

/*
    Modulo que recuperará los datos introducidos en nuestro formulario de la pagina principal y los guardará en un fichero json
*/
function recuperar(request, response, dataPosteada) {
    console.log("Manipulador de peticion 'recuperar' fue llamado.");

    //a través de la variable dataPosteada, recogemos los datos pasados por el fomulario
    dataString += dataPosteada;
    //Convertimos nuestra variable dataString, que ahora contiene nuestros datos en formato String, a un objeto
    var dataObject = querystring.parse(dataString),
    //una vez tenemos todos los datos guardamos como un objeto, los convertimos al formato JSON
    dataJSON = util.inspect(dataObject)
    var jsonContent = JSON.stringify(dataObject);
    
    //creamos un nuevo fichero datos.json, donde guardaremos todos los datos recibidos
    fs.writeFile("datos.json", jsonContent, 'utf8', function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }
     
        //Una vez hemos guardado el fichero, mostramos un botón al usuario que llamará a nuestro modulo visualizar 
        console.log("JSON file has been saved.");
        response.write('<html><head></head><body>');
        response.write('<form action="/visualizar"><input type="submit" class="boton" value="Ver CV"></form>');
        response.end('</body></html>'+'\nArchivo JSON Guardado');
        
    });
    
    //una vez tenemos los datos guardados en JSON, los recuperamos leyendo el archivo
    fs.readFile('./datos.json', 'utf8', (err, jsonString) => {
        if (err) {
            console.log("File read failed:", err)
            return
        }
        
        //los datos nos serán devueltos en formato String, por lo que deberemos convertirlos de nuevo a JSON, para poder acceder a todas sus variables
        var myJson = JSON.parse(jsonString);
        var nombre = myJson["nombre"];
        var fechaNacimiento = myJson["fechaNacimiento"];
        var nacionalidad = myJson["nacionalidad"];
        var domicilio = myJson["domicilio"];
        var telefono = myJson["telefono"];
        var correo = myJson["correo"];
        var tipo = myJson["tipo"];
        var intereses = myJson["intereses"];
        //llamamos a la función generar, que nos construirá el archivo html en el cual mostraremos los datos
        generar(response, nombre, fechaNacimiento, nacionalidad, domicilio, telefono, correo, tipo, intereses);  
    })
}

/*
    Esta función nos generá un archivo html con los datos recuperados de nuestro fichero JSON
*/
function generar(response, nombre, fechaNacimiento, nacionalidad, domicilio, telefono, correo, tipo, intereses){
   var codigo_html = '<html> <head> <title> Ejemplo de hola mundo </title> <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /> </head> <body>'+
                         '<div> Tipo de CV: '+tipo+' </div>'+  
                         '<fieldset id="datosPersonales">'+                     
                                '<legend>Datos Personales</legend>'+                      
                                '<div>Nombre: '+nombre+' </div>'+    
                                '<div>Fecha de Nacimiento: '+fechaNacimiento+' </div>'+ 
                                '<div> Nacionalidad: '+nacionalidad+' </div>'+ 
                                '<div>Domicilio: '+domicilio+' </div>'+                              
                         '</fieldset>'+ 
                         '<fieldset id="contacto">'+                     
                                '<legend>Contacto</legend>'+                      
                                '<div>Telefono: '+telefono+' </div>'+    
                                '<div>Correo: '+correo+' </div>'+                             
                         '</fieldset>'+ 
                         '<fieldset id="intereses">'+   
                                '<legend>Intereses y Lineas de Trabajo</legend>'+                        
                                '<div>'+intereses+' </div>'+                              
                         '</fieldset>'+ 
                     '</body> </html>';
   fs.writeFile("public/verCV.html", 
            codigo_html,
            function(error){
                if(error) console.log(error);
                else console.log("El archivo HTML fue creado")             
            });   
}

/*
    Módulo que nos mostrará el archivo HTML con todos los datos del usuario
*/
function visualizar(request, response, dataPosteada) {
    console.log("Manipulador de peticion 'visualizar' fue llamado.");    
    fs.readFile("public/verCV.html", function (error, datosHTML) {
        if (error) {
            response.writeHead(404);
            response.write('Contents you are looking are Not Found');
        } else {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(datosHTML);
        }
         
        response.end();
    });
    
}

//exportamos los modulos para poder llamarlos desde el servidor
exports.iniciar = iniciar;
exports.recuperar = recuperar;
exports.visualizar = visualizar;