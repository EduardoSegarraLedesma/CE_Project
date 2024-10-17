var key = new ByteString("Cafeteria_ETSISI", ASCII);
var crypto;

function generateHASH(message) {
    var cryptoKey = new Key();  
    cryptoKey.setComponent(Key.AES, key);  
    crypto = new Crypto();
    var AES_CMAC = crypto.sign(cryptoKey, Crypto.AES_CMAC, message);
    return AES_CMAC;
}

function checkHASH(message, hash){
	return generateHASH(message).toString(ASCII) === hash.toString(ASCII);
}