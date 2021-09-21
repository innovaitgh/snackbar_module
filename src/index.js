import React from "react";
import {Snackbar} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
const Alert = (props) => <MuiAlert elevation={6} variant="filled" {...props} />;

export const SnackbarContext = React.createContext();

const SimpleSnackbar = (
  {
    eventHideSnackbar
  }
) => {

  const {
    snackbarState
  } = React.useContext(SnackbarContext);

  const {
    message,
    severity
  } = snackbarState;

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

  const [snackbarState, setSnackbarState] = React.useState({});

  const showErrorMessage = (message) => setSnackbarState({severity: "error", message});
  const showSuccessfulMessage = (message) => setSnackbarState({severity: "success", message});
  const eventHideSnackbar = () => setSnackbarState({});

  const snackbarContext = {
    eventHideSnackbar,
    showErrorMessage,
    showSuccessfulMessage,
    snackbarState
  }

  return(
    <SnackbarContext.Provider value={snackbarContext}>
      <Component {...props} />
      <SimpleSnackbar {...{eventHideSnackbar}} />
    </SnackbarContext.Provider>
  );


};

