import Cliente from './cliente.js'
import Impuestos from './impuestos.js'

let i1 = new Impuestos(1200, 266)
let c1 = new Cliente('Rodrigo', i1 )
let v1 = c1.calcularImpuesto()
console.log (v1);

