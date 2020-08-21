import React from 'react';

import style from './Dialogs.module.css';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messageElements = props.messages.map(m => <Message message={m.message} />);

    const onMessageBodyChange = (event) => {
        const text = event.target.value;
        props.updateMessageBody(text);
    }

    const addMessage = () => {
        props.addMessage();
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
                    <div>
                        <textarea onChange={onMessageBodyChange} value={props.newMessageBody}></textarea>
                    </div>
                    <div>
                        <button onClick={addMessage} >Add message</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;