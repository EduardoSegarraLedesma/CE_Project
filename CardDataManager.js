//---------------SELECT + PRESENT_PSC ---------------//
var apdu;
var response;

function selectCard(card){
		apdu = new ByteString("FF A4 00 00 01 06", HEX);
		response = card.plainApdu(apdu);
		print("APDU SELECT_CARD SW: " + card.SW.toString(HEX));
}

function presentPSC(card){
		apdu = new ByteString("FF 20 00 00 03 FF FF FF", HEX);
		response = card.plainApdu(apdu);
		print("APDU PRESENT_PSC SW: " + card.SW.toString(HEX));
}
//--------------- READ ---------------//
var ReadResponse;

function readAllContent(card){
	//Leer Todo - Desde 00, 224 Bytes
	return read(card, "00 E0");
}

function readOwner(card){
	//Leer usuario - Desde 70, 48 Bytes
	return  byteStringToFormattedString(read(card, "70 30"));
}

function readBalance(card){
	//Leer saldo - Desde B0, 8 Bytes
	return parseFloat(read(card, "B0 08").bytes(00, 8).toString(ASCII));
}

function readCMAC(card){
	//Leer HASH - Desde E0, 32 Bytes
	return read(card, "E0 20");
}

function read(card, dir){
	ReadResponse = card.plainApdu(new ByteString("FF B0 00 "+dir, HEX));
	print("APDU READ_CARD SW: " + card.SW.toString(HEX));
	return ReadResponse;
}

//--------------- WRITE ---------------//

function writeBalance(card, balance){
	write(card,"B0", "08",numberToFormattedByteString(balance));
}

function writeCMAC(card){
	write(card,"E0", "20",generateCMAC(readAllContent(card)));
}

function write(card, dir, long, message){
	while (message.length < parseInt(long, 16)) {
        message = message.concat(new ByteString("2A", HEX));
    }
    card.plainApdu(new ByteString("FF D0 00 " + dir + " " + long + " " + message, HEX));
    print("APDU WRITE_CARD SW: " + card.SW.toString(HEX));
}

//---------------Funciones Auxiliares---------------//

function asciiToByteString(str) {
    return new ByteString(str, ASCII);
}

function numberToFormattedByteString(num) {
	num = num.toFixed(2).toString();
	var aux;
	while(num.length < 8){
		num = "0"+num;
	}
    return new ByteString(num, ASCII);
}

function byteStringToFormattedString(byteStr) {
    return byteStr.toString(ASCII).replace(/\*+/g, ',').replace(/,+$/, '');
}

function writeNewCard(card,surname1,surname2,name){
	write(card,"20", "10",asciiToByteString("****************"));
	write(card,"30", "10",asciiToByteString("***CAFETERIA****"));
	write(card,"40", "10",asciiToByteString("*****ETSISI*****"));
	write(card,"50", "10",asciiToByteString("****************"));
	write(card,"60", "10",asciiToByteString("-----USUARIO----"));
	write(card,"70", "10",asciiToByteString(surname1.toUpperCase()));
	write(card,"80", "10",asciiToByteString(surname2.toUpperCase()));
	write(card,"90", "10",asciiToByteString(name.toUpperCase()));
	write(card,"A0", "10",asciiToByteString("----SALDO-------"));
	write(card,"B0", "10",asciiToByteString("00000.00********"));
	write(card,"C0", "10",asciiToByteString("****************"));
	write(card,"D0", "10",asciiToByteString("****************"));
	writeCMAC(card);
}