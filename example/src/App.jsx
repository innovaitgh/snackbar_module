import { Button } from "@material-ui/core";
import { useContext } from "react";
import withSnackbar, { SnackbarContext } from "with_snackbar";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    errorButton: {
        marginLeft: "20px"
    },
}));

const App = () => {

    const {
        showSuccessfulMessage,
        showErrorMessage
    } = useContext(SnackbarContext);

    const {
        errorButton
    } = useStyles();

    return (
        <div>
            <Button
                onClick={() => showSuccessfulMessage("Success")}
                color="primary"
                variant="contained"
            >
                Open Snackbar
            </Button>
            <Button
                onClick={() => showErrorMessage("Error")}
                color="secondary"
                variant="contained"
                className={errorButton}
            >
                Open Snackbar Error
            </Button>
        </div>
    )
}

export default withSnackbar(App);