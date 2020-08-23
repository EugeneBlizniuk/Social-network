import { updateMessageBodyCreator, addMessageCreator } from "../../../redux/reducer/dialogsReducer"
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { compose } from "redux";

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageBody: state.dialogsPage.newMessageBody
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateMessageBody: (text) => {
            const action = updateMessageBodyCreator(text);
            dispatch(action);
        },
        addMessage: (message) => {
            const action = addMessageCreator(message);
            dispatch(action);
        }
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);