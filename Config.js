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
var money = ["20","5","15","50","100"];
var moneyCounter = 0;

function getOption() {
	var aux = option[optionCounter];
	optionCounter++;
	return aux;
}
	
function getMoneyToAdd(){
	var aux = money[optionCounter];
	moneyCounter++;
	return aux;
}