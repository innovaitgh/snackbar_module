import React from "react";
import SnackbarReducer from "./redux/reducer.js";
import {
  eventHideSnackbar,
  documentSnackbarSuccessfullMessage,
  documentSnackbarErrorMessage,
  documentSnackbarReducer
} from "./redux/actions";
import {Snackbar} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

function Alert(props) {
  return (<MuiAlert elevation={6} variant="filled" {...props} />);
}

export {
  SnackbarReducer,
  eventHideSnackbar,
  documentSnackbarSuccessfullMessage,
  documentSnackbarErrorMessage,
  documentSnackbarReducer,
};

function SimpleSnackbar({
  snackbarReducer,
  eventHideSnackbar
}) {

  const {message, severity} = snackbarReducer

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
}

const mapStateToProps = ({SnackbarReducer}) => ({snackbarReducer: SnackbarReducer});

const mapDispatchToProps = (dispatch) => bindActionCreators({eventHideSnackbar}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SimpleSnackbar);
