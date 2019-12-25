import React from "react";
import SnackBarReducer from "./redux/reducer.js";
import { onSetMessage } from "./redux/actions";
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function SimpleSnackbar({ SnackBarReducer: message }) {
  function onClose() { onSetMessage(null); };

  return (
    <React.Fragment>
      <Snackbar
        open={ Boolean(message) }
        autoHideDuration={ 6000 }
        { ...{ message, onClose } }
        action={[
          <IconButton
            key="close"
            color="inherit"
            onClick={ handleClose }
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </React.Fragment>
  );
}

export { SnackBarReducer, onSetMessage };
function mapStateToProps({ SnackBarReducer }){ return { SnackBarReducer }; };

function mapDispatchToProps(dispatch){ return bindActionCreators({ onSetMessage }, dispatch); };

export default connect(mapStateToProps, mapDispatchToProps)(SimpleSnackbar);
