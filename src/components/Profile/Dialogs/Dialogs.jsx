import React from 'react';
import { Field, reduxForm } from 'redux-form';

import style from './Dialogs.module.css';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const AddMessageForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name={'messageText'} component={'textarea'} placeholder={'Enter your message'}/>
            </div>
            <div>
                <button>Add message</button>
            </div>
        </form>
    );
}

const AddMessagReduxForm = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm);

const Dialogs = ({ dialogs, messages, addMessage }) => {

    debugger

    let dialogElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messageElements = messages.map(m => <Message message={m.message} />);

    const onAddedMessage = (values) => {
        addMessage(values.messageText);
    }

    return (
        <div>
            <div className={style.dialogs}>
                <div className={style.dialogItems}>
                    {dialogElements}
                </div>
                <div className={style.messages}>
                    <div>
                        {messageElements}
                    </div>
                </div>
                <AddMessagReduxForm onSubmit={onAddedMessage} />
            </div>
        </div>
    );
}

export default Dialogs;