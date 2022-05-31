function encrypt(text,password) {
    return CryptoJS.AES.encrypt(text,password).toString();
}

function decrypt(EncryptedValue,password) {
    return CryptoJS.AES.decrypt(EncryptedValue,password).toString(CryptoJS.enc.Utf8);
}

$("#new").submit((event)=>{
    event.preventDefault();
    fetch('./api/password/new', {method:'post', body: `{}`})
});