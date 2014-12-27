
/**
 * The Riemann Zeta Function 
 * http://www.wikipedia.org/Riemann_zeta_function
 * 
 * @param  {Number} z 
 * @return {Number}   
 */
module.exports = function zeta (z) {
    var secondTerm = (z + 3) / (z - 1);
    var thirdTerm = 1 / (Math.pow(2, z + 1));
    return 1 + (secondTerm * thirdTerm);
};
