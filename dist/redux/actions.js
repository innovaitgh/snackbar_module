"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.documentSnackbarReducer = exports.documentSnackbarErrorMessage = exports.documentSnackbarSuccessfullMessage = exports.eventHideSnackbar = exports.DOCUMENT_SNACKBAR_ERROR_MESSAGE = exports.DOCUMENT_SNACKBAR_SUCCESSFULL_MESSAGE = exports.EVENT_HIDE_SNACKBAR = exports.DOCUMENT_SNACKBAR_REDUCER = void 0;
var DOCUMENT_SNACKBAR_REDUCER = "DOCUMENT_SNACKBAR_REDUCER";
exports.DOCUMENT_SNACKBAR_REDUCER = DOCUMENT_SNACKBAR_REDUCER;
var EVENT_HIDE_SNACKBAR = "EVENT_HIDE_SNACKBAR";
exports.EVENT_HIDE_SNACKBAR = EVENT_HIDE_SNACKBAR;
var DOCUMENT_SNACKBAR_SUCCESSFULL_MESSAGE = "DOCUMENT_SNACKBAR_SUCCESSFULL_MESSAGE";
exports.DOCUMENT_SNACKBAR_SUCCESSFULL_MESSAGE = DOCUMENT_SNACKBAR_SUCCESSFULL_MESSAGE;
var DOCUMENT_SNACKBAR_ERROR_MESSAGE = "DOCUMENT_SNACKBAR_ERROR_MESSAGE";
exports.DOCUMENT_SNACKBAR_ERROR_MESSAGE = DOCUMENT_SNACKBAR_ERROR_MESSAGE;

var eventHideSnackbar = function eventHideSnackbar() {
  return {
    type: EVENT_HIDE_SNACKBAR
  };
};

exports.eventHideSnackbar = eventHideSnackbar;

var documentSnackbarSuccessfullMessage = function documentSnackbarSuccessfullMessage(message) {
  return {
    type: DOCUMENT_SNACKBAR_SUCCESSFULL_MESSAGE,
    payload: message
  };
};

exports.documentSnackbarSuccessfullMessage = documentSnackbarSuccessfullMessage;

var documentSnackbarErrorMessage = function documentSnackbarErrorMessage(message) {
  return {
    type: DOCUMENT_SNACKBAR_ERROR_MESSAGE,
    payload: message
  };
};

exports.documentSnackbarErrorMessage = documentSnackbarErrorMessage;

var documentSnackbarReducer = function documentSnackbarReducer(data) {
  return {
    type: DOCUMENT_SNACKBAR_REDUCER,
    payload: data
  };
};

exports.documentSnackbarReducer = documentSnackbarReducer;