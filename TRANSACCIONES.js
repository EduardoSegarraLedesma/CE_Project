loadScript("READ WRITE.js");
loadScript("SEGURIDAD.js");


function buyMenu(card){
	
}

function addBalance(card, money){
	var actualBalance = readBalance(Card);
	
}

//---------------Funciones Auxiliares---------------//

function updateHASH(card){
	writeHASH(card,generateHASH(readAllContent(card)));
}

function loadScript(scriptName) {
    var scriptContent = load(scriptName);
    eval(scriptContent);  
}