import React from "react";
import SnackbarReducer from "./redux/reducer.js";
import {
  eventHideSnackbar,
  documentSnackbarSuccessfullMessage,
  documentSnackbarErrorMessage,
  documentSnackbarReducer
} from "./redux/actions";
import Snackbar from '@material-ui/core/Snackbar';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

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
    <React.Fragment>
      <Snackbar
        open={Boolean(message)}
        autoHideDuration={6000}
        onClose={eventHideSnackbar}
      >
        <Alert {...{severity}} onClose={eventHideSnackbar}>
          {message}
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
}

const mapStateToProps = ({SnackbarReducer}) => ({snackbarReducer: SnackbarReducer});

const mapDispatchToProps = (dispatch) => bindActionCreators({eventHideSnackbar}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SimpleSnackbar);
