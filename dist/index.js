"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SnackbarContext = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _Alert = _interopRequireDefault(require("@material-ui/lab/Alert"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Alert = function Alert(props) {
  return _react["default"].createElement(_Alert["default"], _extends({
    elevation: 6,
    variant: "filled"
  }, props));
};

var SnackbarContext = _react["default"].createContext();

exports.SnackbarContext = SnackbarContext;

var SimpleSnackbar = function SimpleSnackbar(_ref) {
  var eventHideSnackbar = _ref.eventHideSnackbar;

  var _React$useContext = _react["default"].useContext(SnackbarContext),
      snackbarState = _React$useContext.snackbarState;

  var message = snackbarState.message,
      severity = snackbarState.severity;
  return _react["default"].createElement(_core.Snackbar, {
    open: Boolean(message),
    autoHideDuration: 6000,
    onClose: eventHideSnackbar
  }, _react["default"].createElement(Alert, _extends({
    severity: severity
  }, {
    onClose: eventHideSnackbar
  }), message));
};

var _default = function _default(Component) {
  return function (props) {
    var _React$useState = _react["default"].useState({}),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        snackbarState = _React$useState2[0],
        setSnackbarState = _React$useState2[1];

    var showErrorMessage = function showErrorMessage(message) {
      return setSnackbarState({
        severity: "error",
        message: message
      });
    };

    var showsuccessfulMessage = function showsuccessfulMessage(message) {
      return setSnackbarState({
        severity: "success",
        message: message
      });
    };

    var eventHideSnackbar = function eventHideSnackbar() {
      return setSnackbarState({});
    };

    var snackbarContext = {
      eventHideSnackbar: eventHideSnackbar,
      showErrorMessage: showErrorMessage,
      showSuccessfulMessage: showSuccessfulMessage,
      snackbarState: snackbarState
    };
    return _react["default"].createElement(SnackbarContext.Provider, {
      value: snackbarContext
    }, _react["default"].createElement(Component, props), _react["default"].createElement(SimpleSnackbar, {
      eventHideSnackbar: eventHideSnackbar
    }));
  };
};

exports["default"] = _default;