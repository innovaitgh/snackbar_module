"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onSetMessage = onSetMessage;

function onSetMessage(data) {
  return {
    type: "ON_SET_MESSAGE",
    payload: data
  };
}