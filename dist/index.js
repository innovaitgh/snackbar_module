"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "SnackbarReducer", {
  enumerable: true,
  get: function get() {
    return _reducer["default"];
  }
});
Object.defineProperty(exports, "eventHideSnackbar", {
  enumerable: true,
  get: function get() {
    return _actions.eventHideSnackbar;
  }
});
Object.defineProperty(exports, "documentSnackbarSuccessfullMessage", {
  enumerable: true,
  get: function get() {
    return _actions.documentSnackbarSuccessfullMessage;
  }
});
Object.defineProperty(exports, "documentSnackbarErrorMessage", {
  enumerable: true,
  get: function get() {
    return _actions.documentSnackbarErrorMessage;
  }
});
Object.defineProperty(exports, "documentSnackbarReducer", {
  enumerable: true,
  get: function get() {
    return _actions.documentSnackbarReducer;
  }
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reducer = _interopRequireDefault(require("./redux/reducer.js"));

var _actions = require("./redux/actions");

var _Snackbar = _interopRequireDefault(require("@material-ui/core/Snackbar"));

var _redux = require("redux");

var _reactRedux = require("react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function SimpleSnackbar(_ref) {
  var snackbarReducer = _ref.snackbarReducer,
      eventHideSnackbar = _ref.eventHideSnackbar;
  var message = snackbarReducer.message,
      severity = snackbarReducer.severity;
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Snackbar["default"], {
    open: Boolean(message),
    autoHideDuration: 6000,
    onClose: eventHideSnackbar
  }, _react["default"].createElement(Alert, _extends({
    severity: severity
  }, {
    onClose: eventHideSnackbar
  }), message)));
}

var mapStateToProps = function mapStateToProps(_ref2) {
  var SnackbarReducer = _ref2.SnackbarReducer;
  return {
    snackbarReducer: SnackbarReducer
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    eventHideSnackbar: _actions.eventHideSnackbar
  }, dispatch);
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SimpleSnackbar);

exports["default"] = _default;