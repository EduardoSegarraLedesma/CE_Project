var option = ["1","6"];
var optionCounter = 0;
/*
OPCIONES:
	1 - Comprar Menu Completo con Bebida
	2 - Comprar Menu Completo Sin Bebida
	3 - Comprar Menu Medio con Bebida
	4 - Comprar Menu Medio sin Bebida
	5 - Anadir Saldo
	6 - Salir (exit)
*/
var moneyToAdd = 20;

function getOption() {
	var aux = option[optionCounter];
	optionCounter++;
	return aux;
}
	
function getMoneyToAdd(){
	return moneyToAdd;
}