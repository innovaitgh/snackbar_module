export const DOCUMENT_SNACKBAR_REDUCER = "DOCUMENT_SNACKBAR_REDUCER";

export const EVENT_HIDE_SNACKBAR = "EVENT_HIDE_SNACKBAR";

export const DOCUMENT_SNACKBAR_SUCCESSFULL_MESSAGE = "DOCUMENT_SNACKBAR_SUCCESSFULL_MESSAGE";

export const DOCUMENT_SNACKBAR_ERROR_MESSAGE = "DOCUMENT_SNACKBAR_ERROR_MESSAGE";

export const eventHideSnackbar = () => ({type: EVENT_HIDE_SNACKBAR});

export const documentSnackbarSuccessfullMessage = (message) => ({type: DOCUMENT_SNACKBAR_SUCCESSFULL_MESSAGE, payload: message});

export const documentSnackbarErrorMessage = (message) => ({type: DOCUMENT_SNACKBAR_ERROR_MESSAGE, payload: message});

export const documentSnackbarReducer = (data) => ({ type: DOCUMENT_SNACKBAR_REDUCER, payload: data });
