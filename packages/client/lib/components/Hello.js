"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Hello = function Hello(_ref) {
  var text = _ref.text;
  return _react.default.createElement("div", null, "Hello ", text);
};

var _default = Hello;
exports.default = _default;