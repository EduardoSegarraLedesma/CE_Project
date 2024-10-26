var key1 = new Key();
var key2 = new Key();

function generateCMAC(message) {
    crypto = new Crypto();
    key1.setComponent(Key.AES, crypto.digest(Crypto.SHA_256, new ByteString("Cafeteria_ETSISI_CampusSur_UPM_2024", ASCII)));
    key2.setComponent(Key.AES, crypto.digest(Crypto.SHA_256, new ByteString("SistemasDeComercioElectronico_2024", ASCII)));
    var CMAC1 = crypto.sign(key1, Crypto.AES_CMAC, message);
    var CMAC2 = crypto.sign(key2, Crypto.AES_CMAC, message.concat(CMAC1));
    return CMAC1.concat(CMAC2);
}

function checkCMAC(message, CMAC){
    return generateCMAC(message).equals(CMAC);
}