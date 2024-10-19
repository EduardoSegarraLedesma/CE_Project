loadScript("SEGURIDAD.js");
loadScript("READ WRITE.js");
loadScript("Config.js");
loadScript("TRANSACCIONES.js");

//---Bucle de Espera por Tarjeta y Acceso a la misma---//

var card;
var hasCard = false;

do{
	try{
		card = new Card();
		
		print("===========================================================");
		print("= Bienvenido al Sistema de Cajero del Comedor de la ETSISI=");
		print("===========================================================");
		
		//---Acceder a la Tarjeta---//
		
		//Select
		var apduSelect = new ByteString("FF A4 00 00 01 06", HEX);
		var response = card.plainApdu(apduSelect);
		print("APDU SELECT_CARD SW: " + card.SW.toString(HEX));
	
		// Autenticación: Enviar el APDU PRESENT_PSC (Presentar PIN/PSC)
		var apduPsc = new ByteString("FF 20 00 00 03 FF FF FF", HEX);
		response = card.plainApdu(apduPsc);
		print("APDU PRESENT_PSC SW: " + card.SW.toString(HEX));
		
		hasCard = true;
		
		//---Comprobar por modificaciones---//

		if(!checkHASH(readAllContent(card),readHASH(card))){
			print("La tarjeta ha sido modificada ilegalmente y no se acepta");
			throw new Error("Tarjeta Ilegal");
		}

		//---Hacer uso de las funcionalidades de la tarjeta---//

		var input;

		do {
			print("============");
			print("= OPCIONES =");
			print("============");
			print("1 - Comprar Menu Completo con Bebida"); // 7.40
			print("2 - Comprar Menu Completo Sin Bebida");// 6.80
			print("3 - Comprar Menu Medio con Bebida"); // 6.00
			print("4 - Comprar Menu Medio sin Bebida"); // 5.40
			print("5 - Anadir Saldo")
			print("6 - Meter otra tarjeta");
			
			input = getOption();
			input = prompt("Introduce el numero de la opcion: ");
			
			print("Introduce el numero de la opcion:.. " + input)
			
			switch(input){
			case "1":
				break;
			case "2":
				break;
			case "3":
				break;
			case "4":
				break;
			case "5":
				break;
			}
			
		} while(!input === "6");
	
	} catch(error) {
		//print(error.name + ": " + error.message);
		print("- Esperando por la tarjeta...");
	}	
} while(!hasCard);

//---------------Funciones Auxiliares---------------//

function loadScript(scriptName) {
    var scriptContent = load(scriptName);
    eval(scriptContent);  
}