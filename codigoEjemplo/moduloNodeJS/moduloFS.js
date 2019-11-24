//writeFile

var fs= require("fs");

fs.writeFile("./ejemplo/archivo.txt", 
            "linea 1\nLinea 2",
            function(error){
                if(error) console.log(error);
                else console.log("El archivo fue creado");
            });

//readFile

function leer(error, datos){
    if(error) console.log(error);
    else console.log(datos.toString());
}

fs.readFile("./ejemplo/archivo.txt", leer);

console.log("Ultima linea del programa");



