
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
    /**
     * Approximation relies on the fact that we can
     * take Bernoulli numbers to not have a large
     * impact on the accuracy of the implementation
     * We approximate the third term as follows and 
     * return the final result
     */
    return 1 + (secondTerm * thirdTerm);
    
};
