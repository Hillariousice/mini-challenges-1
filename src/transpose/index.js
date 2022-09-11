/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    let result = [];
    let heat = [];
    let y = 0;
    for(let smoke = array.length-1; smoke >= 0; smoke--){
        const i = array[smoke];
        if(y < i.length){
            heat.push(i[y])
        }
        if(smoke == 0 && y < i.length){
            result.unshift(heat);
            heat = []
            y += 1
            smoke = array.length;
        }
    }

    

}

module.exports = transpose;

console.log(transpose([[5,2,17,9,3], [13,4,8,14,1], [9,6,3,7,21]]))
