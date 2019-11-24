var os= require("os");
console.log("Sistema Operativo: "+ os.platform()); 
console.log("Versión del OS: " + os.release()); 
console.log("Memoria Total: " + os.totalmem()+"bytes"); 
console.log("Memoria Libre: "+ os.freemem()+"bytes"); 
