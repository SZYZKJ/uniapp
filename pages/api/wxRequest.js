import axios from 'axios';
//设置全局axios默认值
axios.defaults.timeout = 5000; //5000的超时验证
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

//创建一个axios实例
const instance = axios.create();
instance.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

var CryptoJS = require('./aes.js');
var key = CryptoJS.enc.Utf8.parse("szyzkjpangyuming");
var iv = CryptoJS.enc.Utf8.parse("abcde920318abcde");
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
    const res= await instance.post(url, newdata);
    res.data=JSON.parse(Decrypt(res.data));
    return res.data;
};

module.exports = {
    wxRequestPost
}

