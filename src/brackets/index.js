/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
let arrStr = str.split('')
let strBracket = []

if(arrStr[0] === '}' || arrStr[0] === ')' || arrStr[0] === ']'){
    strBracket.push(arrStr[0])
}else{
    for(let i= 0;i < arrStr.length; i++){
        if(arrStr[i] === '[' && arrStr[i] === '(' && arrStr[i] === '{'){
    strBracket.push(arrStr[i])
      }else{
            if(strBracket[strBracket.length-1] === '(' && arrStr[i] === ')'){
                strBracket.pop();
            }
            if(strBracket[strBracket.length-1] === '[' && arrStr[i] === ']'){
                strBracket.pop()
            }
            if(strBracket[strBracket.length-1] === '{' && arrStr[i] === '}'){
                strBracket.pop()
            }
        }
    }
}
if(strBracket.length === 0){
    return 'valid'
}else{
    return 'invalid'
}
}
module.exports = isValid;
// console.log(strBracket("()()()()()"));