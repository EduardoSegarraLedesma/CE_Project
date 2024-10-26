loadScript("CardDataManager.js");

function buyMenu(card, cost){
	var balance = readBalance(card);
	if(balance>=cost){
		writeBalance(card,balance-cost);
		writeCMAC(card);
		print("Saldo Restante: "+ readBalance(card));
	} else {
		print("*** Saldo Insuficiente ***");
	}
}

function addBalance(card, money){
	writeBalance(card,readBalance(card)+money);
	writeCMAC(card);
}

//---------------Funciones Auxiliares---------------//

function loadScript(scriptName) {
    var scriptContent = load(scriptName);
    eval(scriptContent);  
}