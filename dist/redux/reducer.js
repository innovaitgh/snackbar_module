"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _actions = require("./actions");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    message: "",
    severity: ""
  };

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      payload = _ref.payload,
      type = _ref.type;

  switch (type) {
    case _actions.DOCUMENT_SNACKBAR_REDUCER:
      return payload;

    case _actions.DOCUMENT_SNACKBAR_SUCCESSFULL_MESSAGE:
      return {
        message: payload,
        severity: "success"
      };

    case _actions.DOCUMENT_SNACKBAR_ERROR_MESSAGE:
      return {
        message: payload,
        severity: "error"
      };

    case _actions.EVENT_HIDE_SNACKBAR:
      return _objectSpread({}, state, {
        message: null
      });

    default:
      return state;
  }
};

exports["default"] = _default;