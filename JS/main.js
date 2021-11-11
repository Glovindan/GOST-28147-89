import {GOST} from "./GOST.js";

const key = "i_hate_nightmare"
const gost = new GOST(key)
const text = "Ебаный рот этого казино"
console.log("Текст", text)
let ans = gost.encrypt(text)
console.log("Зашифровано",ans)
let dec = gost.decrypt("෣䡍递틕阨螐௅ꋏ䲚深Ფ暩塙꩟⏈ꏋ쾨ᬸ礑꓅㈘")
console.log("Расшифровано", dec)


