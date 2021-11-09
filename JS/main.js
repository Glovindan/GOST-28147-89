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

const char = 'ж'
console.log(char.charCodeAt(0).toString(2))