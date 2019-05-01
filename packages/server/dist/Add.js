"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _includes = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/includes"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

class Add {
  constructor(a, b) {
    (0, _defineProperty2.default)(this, "a", void 0);
    (0, _defineProperty2.default)(this, "b", void 0);
    (0, _defineProperty2.default)(this, "result", void 0);
    this.a = a;
    this.b = b;
    this.result = a + b;
  }

}

const array1 = [1, 2, 3];
console.log((0, _includes.default)(array1).call(array1, 2)); // expected output: true

const pets = ['cat', 'dog', 'bat'];
console.log((0, _includes.default)(pets).call(pets, 'cat')); // expected output: true

console.log((0, _includes.default)(pets).call(pets, 'at')); // expected output: false

var _default = Add;
exports.default = _default;