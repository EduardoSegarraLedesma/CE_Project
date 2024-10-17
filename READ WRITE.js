
function readAllContent(card){
	//Leer HASH - Desde 00, 224 Bytes
	return read(card, "00 F0");
}

function readOwner(card){
	//Leer HASH - Desde E0, 32 Bytes
	return read(card, "E0 20");
}

function readBalance(card){
	//Leer HASH - Desde E0, 32 Bytes
	return read(card, "E0 20");
}

function readHASH(card){
	//Leer HASH - Desde D0, 16 Bytes
	return read(card, "D0 10");
}

function read(card, dir){
	user_data = card.plainApdu(new ByteString("FF B0 00 "+dir, HEX));
	print("APDU READ_CARD SW: " + card.SW.toString(HEX));
	print(user_data.toString(ASCII));
	return user_data.toString(ASCII);
}

function writeHASH(card, hash){
	write(card,"E0 10",hash)
	write(card,"F0 10",hash.slice(Math.floor(hash.lenght/2)))
	print("APDU WRITE_CARD SW: " + card.SW.toString(HEX));
}


function write(card, dir, message){
	
}
