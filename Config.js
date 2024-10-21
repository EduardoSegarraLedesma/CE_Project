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
var money = [20.0,5.0,15.0,50.0,100.0];
var moneyCounter = 0;

function getOption() {
	optionCounter++;
	return option[optionCounter-1];
}
	
function getMoneyToAdd(){
	moneyCounter++;
	return money[moneyCounter-1];;
}