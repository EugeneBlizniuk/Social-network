import { updateMessageBodyCreator, addMessageCreator } from "../../../redux/reducer/dialogsReducer"
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    debugger
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
        addMessage: () => {
            const action = addMessageCreator();
            dispatch(action);
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;