var key = new ByteString("Cafeteria_ETSISI", ASCII); 
var crypto;

function generateHASH(message) {
    crypto = new Crypto();
    var hash = crypto.digest(Crypto.SHA_256, message);
    return hash;
}

function checkHASH(message, hash){
    return generateHASH(message).equals(hash);
}