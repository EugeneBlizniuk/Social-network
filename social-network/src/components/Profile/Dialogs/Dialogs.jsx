import React from 'react';

import style from './Dialogs.module.css';

import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={style.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return <div className={style.message}>{props.message}</div>;
}

const Dialogs = () => {
    return (
        <div>
            <div className={style.dialogs}>
                <div className={style.dialogItems}>
                    <DialogItem name="Victor" id="1" />
                    <DialogItem name="Elena" id="2" />
                    <DialogItem name="Viktoria" id="3" />
                    <DialogItem name="Eugene" id="4" />
                    <DialogItem name="Vlad" id="5" />
                </div>
                <div className={style.messages}>
                    <Message message="Hi"/>
                    <Message message="What's up?"/>
                    <Message message="Bye"/>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;