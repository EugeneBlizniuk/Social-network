import { updateMessageBodyCreator, addMessageCreator } from "../../../redux/reducer/dialogData"
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    debugger
    return {
        dialogs: state.dialogsData.dialogs,
        messages: state.dialogsData.messages,
        newMessageBody: state.dialogsData.newMessageBody
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