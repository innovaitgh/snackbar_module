import {DOCUMENT_SNACKBAR_REDUCER, EVENT_HIDE_SNACKBAR, DOCUMENT_SNACKBAR_SUCCESSFULL_MESSAGE, DOCUMENT_SNACKBAR_ERROR_MESSAGE} from "./actions";

export default (state = {
  message: "",
  severity: "",
}, {payload, type}) => {

  switch (type) {
    case DOCUMENT_SNACKBAR_REDUCER: return payload;
    case DOCUMENT_SNACKBAR_SUCCESSFULL_MESSAGE: return {message: payload, severity: "success"};
    case DOCUMENT_SNACKBAR_ERROR_MESSAGE: return {message: payload, severity: "error"};
    case EVENT_HIDE_SNACKBAR: return {...state, message: null};
    default: return state;

  }

};
