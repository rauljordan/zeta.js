var test = require('tape');
var zeta = require('../');

// TODO: Test for approximation erron within 1.3%
test('riemann', function (t) {
    
    var result = zeta(0);
    t.equal(result, -0.5);
    
    t.end();
});