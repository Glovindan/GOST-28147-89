import {GOST} from "./GOST.js";
// const text = 234
// const key = 228
//
// const encrypted = text ^ key
// const decrypted = encrypted ^ key
// console.log(encrypted)
// console.log(decrypted)

// const text = "жопа";
// const binary = [];
//
// for (let i = 0; i < text.length; i++) {
//     binary.push(text[i].charCodeAt(0))
// }
//
// console.log(binary)
//
// let textFromBinary = "";
// binary.forEach(code => {
//     textFromBinary += String.fromCharCode(code);
// })
//
// console.log(textFromBinary)

// const text = "00000000000000000000000000001001";
// console.log(text.length)//32

// const text = "10000110110";
// console.log(text.length)//11
//
// import {CHAR_SIZE} from "./constants.js";
//
// function toPseudoBinaryConvert(text) {
//     const binaryArr = [];
//     for (let i = 0; i < text.length; i++) {
//         const binaryString = text.charCodeAt(i).toString(2);
//         const placeholder = '0'.repeat(CHAR_SIZE - binaryString.length)
//         binaryArr.push(placeholder + binaryString);
//     }
//     return binaryArr
// }
//
// function pseudoBinaryToInt(pseudoBinary) {
//     return parseInt(pseudoBinary, 2);
// }
//
// const char = 'Ж'
// const psB = toPseudoBinaryConvert(char);
// const a = pseudoBinaryToInt(psB[0]);
// const char1 = String.fromCharCode(a);
// console.log(psB)
// console.log(a)
// console.log(char1)

//
//
// import {CHAR_SIZE} from "./constants.js";
// function splitPseudoBinary(pseudoBinary, partsCount) {
//     const splitBinaryArr = []
//     const partSize = pseudoBinary.length/partsCount
//     for (let i = 0; i < partsCount; i++) {
//         splitBinaryArr.push(pseudoBinary.substr(i, partSize))
//     }
//     return splitBinaryArr
// }
//
// function splitKey(binaryKeyArr) {
//     const keyArr = []
//     const partsCount = CHAR_SIZE / 8
//
//     binaryKeyArr.forEach(binaryKey => {
//         keyArr.push(...splitPseudoBinary(binaryKey, partsCount))
//     })
//
//     return keyArr
// }
//
// function textToPseudoBinaryArray(text) {
//     const pseudoBinaryArr = [];
//     for (let i = 0; i < text.length; i++) {
//         const pseudoBinary = text.charCodeAt(i).toString(2);
//         const placeholder = '0'.repeat(CHAR_SIZE - pseudoBinary.length)
//         pseudoBinaryArr.push(placeholder + pseudoBinary);
//     }
//     return pseudoBinaryArr
// }
//
// let message = "Ass"
//
// const messageBinaryArray = textToPseudoBinaryArray(message)
// console.log(messageBinaryArray)
// const zero = '0'.repeat(CHAR_SIZE)
//
// const charsCount = 64 / CHAR_SIZE
// while(messageBinaryArray.length % charsCount) {
//     messageBinaryArray.push(zero)
// }
//
// const partsCount = messageBinaryArray.length / charsCount;
// const messageBinaryArray64 = [];
// for (let i = 0; i < partsCount; i++) {
//     messageBinaryArray64.push(messageBinaryArray.slice(i * charsCount, (i + 1) * charsCount))
// }



const key = "i_hate_nightmare"
const gost = new GOST(key)
const text = "сук"
console.log("Сука", gost.textToPseudoBinary(text))
let ans = gost.encrypt(text)
console.log("Уебанство",ans)
let dec = gost.decrypt(ans)
console.log("Хуйня", dec)


