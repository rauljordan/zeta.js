# zeta

[Riemann Zeta Function](http://en.wikipedia.org/wiki/Riemann_zeta_function)
in javascript with a 1.3% accuracy error


[![browser support](http://ci.testling.com/rauljordan/zeta.js.png)](http://ci.testling.com/rauljordan/zeta.js)

[![Build Status](https://travis-ci.org/rauljordan/zeta.js.svg?branch=master)](https://travis-ci.org/rauljordan/zeta.js)

# example

```
> var zeta = require('riemann-zeta')
> zeta(0)
-0.5
> zeta(10)
1.00071
```

# methods

var zeta = require('riemann-zeta')

## zeta(s)

Return the riemann zeta function over `s`.


# install

With [npm](http://npmjs.org) do:

```
npm install riemann-zeta
```


# license

MIT
=======

# credits
The approximation follows from the Euler-Maclaurin sum formula (Ralston and Rabinowitz, 2001 by not considering the impact of Bernoulli numbers on the 
calculation and taking the case when the lower limit of integration
is specifically 2. Then, the approximation follows and works well enough
for modern browsers and mathematical applications.


