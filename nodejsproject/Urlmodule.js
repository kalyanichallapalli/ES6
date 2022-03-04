const url = require('url');

const addr = 'https://nodejs.org/en/'

const A = url.parse(addr, true)

console.log(A.host)
console.log(A.pathname)