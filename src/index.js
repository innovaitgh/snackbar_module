import React from "react";
import {Snackbar} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

const Alert = (props) => <MuiAlert elevation={6} variant="filled" {...props} />;

export const SnackbarContext = React.createContext();
export const DocumentSnackbarSuccessfulMessageDispatch = React.createContext();
export const DocumentSnackbarErrorMessageDispatch = React.createContext();
export const DocumentSnackbarDispatch = React.createContext();

const SimpleSnackbar = ({eventHideSnackbar}) => {

  const snackbarState = React.useContext(SnackbarContext);

  const {message, severity} = snackbarState;

  return (
    <Snackbar
      open={Boolean(message)}
      autoHideDuration={6000}
      onClose={eventHideSnackbar}
    >
      <Alert {...{severity}} onClose={eventHideSnackbar}>
        {message}
      </Alert>
    </Snackbar>
  );

};

export default (Component) => (props) => {

  const [snackbarState, setSnackbarState] = React.useState({
    message: "",
    severity: ""
  });

  const documentSnackbarErrorMessage = (message) => setSnackbarState({severity: "error", message});

  const documentSnackbarSuccessfulMessage = (message) => setSnackbarState({severity: "success", message});

  const documentSnackbarReducer = (state) => setSnackbarState(state);

  const eventHideSnackbar = () => setSnackbarState({message: null});

  return(
    <SnackbarContext.Provider value={snackbarState}>
      <DocumentSnackbarSuccessfulMessageDispatch.Provider value={documentSnackbarSuccessfulMessage}>
        <DocumentSnackbarErrorMessageDispatch.Provider value={documentSnackbarErrorMessage}>
          <DocumentSnackbarDispatch.Provider value={documentSnackbarReducer}>
            <Component {...props} />
            <SimpleSnackbar {...{eventHideSnackbar}} />
          </DocumentSnackbarDispatch.Provider>
        </DocumentSnackbarErrorMessageDispatch.Provider>
      </DocumentSnackbarSuccessfulMessageDispatch.Provider>
    </SnackbarContext.Provider>
  );


};
