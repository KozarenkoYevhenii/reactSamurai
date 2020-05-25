import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialogItem + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return(
        <div className={s.message}>
            {props.message}
        </div>
    )
}

const Dialogs = () => {
    return (
        <div className={s.dialogsWindow}>
            <div className={s.dialogs}>
                <DialogItem id='1' name='Vasia'/>
                <DialogItem id='2' name='Petia'/>
                <DialogItem id='3' name='Sofiika'/>
                <DialogItem id='4' name='Dima'/>
                <DialogItem id='5' name='Ivan'/>
            </div>
            <div className={s.messages}>
                <Message message='Hello!'/>
                <Message message='How are you?'/>
            </div>
        </div>
    )
};

export default Dialogs;