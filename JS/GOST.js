class GOST {
    //Массив ключей k
    keyArr;


    constructor(key) {
        //Разбить 256бит ключ на 8 32бит ключей k0...k7
        this.keyArr = this.splitKey(key);
    }

    f(A, X) {

    }

    binaryConvert(text) {
        const binaryArr = [];
        for (let i = 0; i < text.length; i++) {
            binaryArr.push(text.charCodeAt(i));
        }
        return binaryArr
    }

    splitMessage(messageBinary) {

    }

    //Разбиение ключа на 8 частей (учитывая что каждый символ 8 бит)
    splitKey(key) {
        const keyArr = []
        for (let i = 0; i < 8; i++) {
            keyArr.push(this.binaryConvert(key.substr(i,4)))
        }
        return keyArr
    }

    encrypt(message) {
        const messageBinary = this.binaryConvert(message)
        //Разбить текст на блоки 64 бита
        //Разбить каждый 64-битный блок текста на две половины по 32 бита T0 = (A0, B0)
        //32 раунда херни
    }

    decrypt(message) {

    }
}

export {GOST}