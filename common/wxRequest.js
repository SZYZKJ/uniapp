var CryptoJS = require('./aes.js');
var key = CryptoJS.enc.Utf8.parse("testtesttesttest");
var iv = CryptoJS.enc.Utf8.parse("1234123412341234");
function Encrypt(word) {
    var srcs = CryptoJS.enc.Utf8.parse(word);
    var encrypted = CryptoJS.AES.encrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
    return encrypted.ciphertext.toString();
}
function Decrypt(word) {
    // var encryptedHexStr = CryptoJS.enc.Hex.parse(word);
    // var srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
    var decrypt = CryptoJS.AES.decrypt(word, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
    var decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
    return decryptedStr.toString();
}
const wxRequestPost = async(params = {}, url) => {
    let data = params || {};
    var newdata=JSON.stringify(data);
    newdata=Encrypt(newdata);
    const res = await uni.request({
        url:url,
        data:newdata,
        method:"POST",
        header:{
            "content-type":"application/x-www-form-urlencoded"
        },
    });
    return JSON.parse(Decrypt(res[1].data));
};

module.exports = {
    wxRequestPost
}

