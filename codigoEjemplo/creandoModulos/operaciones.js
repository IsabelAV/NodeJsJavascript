function sumar(x, y){
	return x+y;
}

function restar(x, y){
	return x-y;
}


function dividir(x, y){
	if(y==0){
		error();
	}else{
		return x/y;
	}
}

function error(){
	console.log("No se puede dividir por cero");
}

const NUM=4.44;

exports.sumar=sumar;
exports.restar=restar;
exports.dividir=dividir;
exports.NUM=NUM;
