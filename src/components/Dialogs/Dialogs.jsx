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

    let dialogs = [
        {id: '1', name: 'Vasia'},
        {id: '2', name: 'Petia'},
        {id: '3', name: 'Sofiika'},
        {id: '4', name: 'Dima'},
        {id: '5', name: 'Ivan'}
    ]

    let messages = [
        {id: '1', message: 'Hello!'},
        {id: '2', message: 'How are you?'}
    ]

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