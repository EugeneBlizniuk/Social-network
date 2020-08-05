import React from 'react';

import style from './Dialogs.module.css';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messageElements = props.messages.map(m => <Message message={m.message} />);

    return (
        <div>
            <div className={style.dialogs}>
                <div className={style.dialogItems}>
                    {dialogElements}
                </div>
                <div className={style.messages}>
                    {messageElements}
                </div>
            </div>
        </div>
    );
}

export default Dialogs;