
function readAllContent(card){
	//Leer Todo - Desde 00, 224 Bytes
	return read(card, "00 E0");
}

function readOwner(card){
	//Leer usuario - Desde 30-60, 48 Bytes
	return read(card, "30 30");
}

function readBalance(card){
	//Leer saldo - Desde 80, 8 Bytes
	return read(card, "80 08");
}

function readHASH(card){
	//Leer HASH - Desde E0, 32 Bytes
	return read(card, "E0 20");
}

function read(card, dir){
	user_data = card.plainApdu(new ByteString("FF B0 00 "+dir, HEX));
	print("APDU READ_CARD SW: " + card.SW.toString(HEX));
	print(user_data);
	return user_data;
}

function writeHASH(card, hash){
	write(card,"F0", "10",hash)
}

function writeNewUser(card,surname1,surname2,name){
	write(card,"20", "10","****************");
	write(card,"30", "10","***CAFETERIA****");
	write(card,"40", "10","*****ETSISI*****");
	write(card,"50", "10","****************");
	write(card,"60", "10","-----USUARIO----");
	write(card,"70", "10",surname1);
	write(card,"80", "10",surname2);
	write(card,"90", "10",name);
	write(card,"A0", "10","----SALDO-------");
	write(card,"B0", "08","00000,00");
}


function write(card, dir, long, asciiMessage){
	//transformar asciiMessage a mensaje hexadecimal
	while(asciiMessage.length<parseInt(long,16)){
		asciiMessage += "*";
	}
	var hexString=asciiMessage.charCodeAt(0).toString(16).toUpperCase();
	for (var i = 1; i < asciiMessage.length; i++) {
        hexString += " "+asciiMessage.charCodeAt(i).toString(16).toUpperCase();
    }
	card_data = card.plainApdu(new ByteString("FF D0 00 "+dir+" "+long+" "+hexString, HEX));
	print("APDU WRITE_CARD SW: " + card.SW.toString(HEX));	
}
