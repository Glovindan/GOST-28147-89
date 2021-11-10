import {CHAR_SIZE, BLOCK_SIZE64, BLOCK_SIZE32, ADD_MOD, S_BLOCKS} from "./constants.js";

class GOST {
    //Массив ключей k
    keyArr;


    constructor(key) {
        //Разбить 256бит ключ на 8 32бит ключей k0...k7
        const binaryKey = this.textToPseudoBinary(key);
        this.keyArr = this.splitPseudoBinary(binaryKey, 8);
    }

    textToPseudoBinary(text) {
        let answer = "";
        for (let i = 0; i < text.length; i++) {
            const pseudoBinary = text.charCodeAt(i).toString(2);
            const placeholder = '0'.repeat(CHAR_SIZE - pseudoBinary.length)
            answer += placeholder + pseudoBinary;
        }
        return answer
    }

    pseudoBinaryToInt(pseudoBinary) {
        return parseInt(pseudoBinary, 2)
    }

    intToPseudoBinary(int, charSize) {
        let answer = "";
        const pseudoBinary = int.toString(2);
        const placeholder = '0'.repeat(charSize - pseudoBinary.length)
        answer += placeholder + pseudoBinary;
        return answer
    }

    pseudoBinaryArrayToText(pseudoBinaryArr) {
        let text = "";
        pseudoBinaryArr.forEach(pseudoBinary => {
            const intFromBinary = this.pseudoBinaryToInt(pseudoBinary);
            text += String.fromCharCode(intFromBinary);
        })
    }

    //Разделение двоичного представления на partsCount
    splitPseudoBinary(pseudoBinary, partsCount) {
        const splitBinaryArr = []
        const partSize = pseudoBinary.length/partsCount
        for (let i = 0; i < partsCount; i++) {
            splitBinaryArr.push(pseudoBinary.substr(i * partSize, partSize))
        }
        return splitBinaryArr
    }

    pseudoXor(a,b) {
        let answer = ""
        const aInt = this.pseudoBinaryToInt(a)
        const bInt = this.pseudoBinaryToInt(b)
        answer = aInt ^ bInt
        return this.intToPseudoBinary(answer, a.length);
    }

    pseudoAddMod(a,b,mod) {
        let answer = ""
        const aInt = this.pseudoBinaryToInt(a)
        const bInt = this.pseudoBinaryToInt(b)
        answer = (aInt + bInt) % mod
        console.log(this.intToPseudoBinary(answer, a.length))
        return this.intToPseudoBinary(answer, a.length);
    }

    shiftLeftPseudo(pseudoBinary, n) {
        for (let i = 0; i < n; i++) {
            pseudoBinary = pseudoBinary.substr(1) + pseudoBinary.substr(0,1);
        }
        return pseudoBinary
    }

    f(A, X) {
        //Сложение по модулю
        const binarySum = this.pseudoAddMod(A,X,ADD_MOD);

        //Разбить на 8 4х-битовых подпоследовательностей
        const ASplit = this.splitPseudoBinary(A,8);
        console.log(ASplit)
        //Для каждого 4бит блока произвести замену через S-блок

        for (let i = 0; i < ASplit.length; i++) {
            const AInt = this.pseudoBinaryToInt(ASplit[i])
            ASplit[i] = this.intToPseudoBinary(S_BLOCKS[i][AInt],4)
        }
        //Объединить блоки в 32 бита
        let answer = ASplit.join("");
        //Сдвиг влево на 11 битов
        answer = this.shiftLeftPseudo(answer,11);
        return answer
    }

    encrypt(message) {
        let messageBinary = this.textToPseudoBinary(message)
        const zero = '0'.repeat(CHAR_SIZE)

        //Разбить текст на блоки 64 бита
        while(messageBinary.length % BLOCK_SIZE64) {
            messageBinary += zero
        }
        const messageBinarySplit64 = this.splitPseudoBinary(messageBinary, messageBinary.length/BLOCK_SIZE64)

        //Разбить каждый 64-битный блок текста на две половины по 32 бита T0 = (A0, B0)
        const messageBinarySplit32 = []
        messageBinarySplit64.forEach(block64 => {
            messageBinarySplit32.push(this.splitPseudoBinary(block64, 2));
        })
        //32 раунда херни

        //k0...k7
        for (let i = 0; i < 24; i++) {
            const X = this.keyArr[i % this.keyArr.length];

            //Обход по каждому 64-бит блоку
            for (let j = 0; j < messageBinarySplit32.length; j++) {
                const buf = messageBinarySplit32[j][0];
                messageBinarySplit32[j][0] = this.pseudoXor(messageBinarySplit32[j][1], this.f(messageBinarySplit32[j][0],X))
                messageBinarySplit32[j][1] = buf;
            }
            messageBinarySplit32.forEach(block => {

            })
        }

        //k7...k0
        for (let i = 24; i < 32; i++) {

        }

        return 0
    }

    decrypt(message) {

    }
}

export {GOST}