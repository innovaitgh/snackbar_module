"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "SnackBarReducer", {
  enumerable: true,
  get: function get() {
    return _reducer["default"];
  }
});
Object.defineProperty(exports, "onSetMessage", {
  enumerable: true,
  get: function get() {
    return _actions.onSetMessage;
  }
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reducer = _interopRequireDefault(require("./redux/reducer.js"));

var _actions = require("./redux/actions");

var _Snackbar = _interopRequireDefault(require("@material-ui/core/Snackbar"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

var _redux = require("redux");

var _reactRedux = require("react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function SimpleSnackbar(_ref) {
  var message = _ref.SnackBarReducer;

  function onClose() {
    (0, _actions.onSetMessage)(null);
  }

  ;
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Snackbar["default"], _extends({
    open: Boolean(message),
    autoHideDuration: 6000
  }, {
    message: message,
    onClose: onClose
  }, {
    action: [_react["default"].createElement(_IconButton["default"], {
      key: "close",
      color: "inherit",
      onClick: onClose
    }, _react["default"].createElement(_Close["default"], null))]
  })));
}

function mapStateToProps(_ref2) {
  var SnackBarReducer = _ref2.SnackBarReducer;
  return {
    SnackBarReducer: SnackBarReducer
  };
}

;

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    onSetMessage: _actions.onSetMessage
  }, dispatch);
}

;

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SimpleSnackbar);

exports["default"] = _default;