/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
let variableRecent = {
    M : 1000,
    D : 500,
    C : 100,
    L : 50,
    X : 10,
    V : 5,
    I : 1,
}
 for(let i = roman.length-1; i > 0; i++){
    let romPresent = roman[i];
    let futureRom = roman[i - 1];
    if(variableRecent[romPresent] > variableRecent[futureRom]){
        betaRom += variableRecent[romPresent] - variableRecent[futureRom]
        i++
    }
 }
 return betaRom
}
module.exports = romanToDecimal;
