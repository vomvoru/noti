"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _entries = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/entries"));

var _includes = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/includes"));

var _express = _interopRequireDefault(require("express"));

var _Add = _interopRequireDefault(require("./Add"));

const app = (0, _express.default)();
const port = 3000;
app.get('/', (req, res) => res.send(`Hello World!${new _Add.default(1, 2).result}`));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
const array1 = [1, 2, 3];
console.log((0, _includes.default)(array1).call(array1, 2)); // expected output: true

const pets = ['cat', 'dog', 'bat'];
console.log((0, _includes.default)(pets).call(pets, 'cat')); // expected output: true

console.log((0, _includes.default)(pets).call(pets, 'at')); // expected output: false

(0, _entries.default)({
  foo: 'bar'
});

class Bork {
  constructor() {
    (0, _defineProperty2.default)(this, "instanceProperty", 'bork');
    (0, _defineProperty2.default)(this, "boundFunction", () => {
      return this.instanceProperty;
    });
  }

}

(0, _defineProperty2.default)(Bork, "staticProperty", 'babelIsCool');
(0, _defineProperty2.default)(Bork, "staticFunction", function () {
  return Bork.staticProperty;
});
const myBork = new Bork(); // Property initializers are not on the prototype.

console.log(myBork.__proto__.boundFunction); // > undefined
// Bound functions are bound to the class instance.

console.log(myBork.boundFunction.call(undefined)); // > "bork"
// Static function exists on the class.

console.log(Bork.staticFunction()); // > "babelIsCool"