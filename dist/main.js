"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));

var _impuestos = _interopRequireDefault(require("./impuestos.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var i1 = new _impuestos["default"](1200, 266);
var c1 = new _cliente["default"]('Rodrigo', i1);
var v1 = c1.calcularImpuesto();
console.log(v1);