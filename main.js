const esm = require('esm')(module)
const options = esm('./options.js')

options.dev = true
console.log(options.dev)

const b = Object.assign({}, options)
console.log(b.dev)
