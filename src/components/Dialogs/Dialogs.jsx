import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogs = props.dialogs

    let messages = props.messages

    let dialogsElement = dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messagesElement = messages.map(m => <Message message={m.message} />)

    return (
        <div className={s.dialogsWindow}>
            <div className={s.dialogs}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    )
};

export default Dialogs;