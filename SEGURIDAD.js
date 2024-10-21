var key1 = new Key();
var key2 = new Key();

function generateHASH(message) {
    crypto = new Crypto();
    key1.setComponent(Key.AES, crypto.digest(Crypto.SHA_256, new ByteString("Cafeteria_ETSISI_CampusSur_UPM_2024", ASCII)));
    key2.setComponent(Key.AES, crypto.digest(Crypto.SHA_256, new ByteString("SistemasDeComercioElectronico_2024", ASCII)));
    var hash1 = crypto.sign(key1, Crypto.AES_CMAC, message);
    var hash2 = crypto.sign(key2, Crypto.AES_CMAC, message.concat(hash1));
    return hash1.concat(hash2);
}

function checkHASH(message, hash){
    return generateHASH(message).equals(hash);
}