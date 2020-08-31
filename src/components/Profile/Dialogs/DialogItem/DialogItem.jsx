import React from 'react';

import style from './../Dialogs.module.css';

import { NavLink } from 'react-router-dom';

const DialogItem = ({ id, name }) => {
    let path = '/dialogs/' + id;

    return (
        <div className={style.dialog}>
            <NavLink to={path}>{name}</NavLink>
        </div>
    );
}

export default DialogItem;