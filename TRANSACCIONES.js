loadScript("READ WRITE.js");
loadScript("SEGURIDAD.js");


function buyMenu(card, cost){
	var balance = readBalance(card);
	if(balance>=cost){
		writeBalance(card,balance-cost);
		updateHASH(card);
	} else {
		print("*** Saldo Insuficiente ***")
	}
}

function addBalance(card, money){
	writeBalance(card,readBalance(card)+money);
	updateHASH(card);
}

//---------------Funciones Auxiliares---------------//

function updateHASH(card){
	writeHASH(card,generateHASH(readAllContent(card)));
}

function loadScript(scriptName) {
    var scriptContent = load(scriptName);
    eval(scriptContent);  
}