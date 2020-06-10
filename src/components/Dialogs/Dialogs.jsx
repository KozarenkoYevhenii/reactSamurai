import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let dialogsElement = props.state.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messagesElement = props.state.dialogMessages.map(m => <Message id={m.id} message={m.message}/>)
    let newMessageRef = React.createRef();
    let addMessage = () => {
        let newMessage = newMessageRef.current.value;
        alert(newMessage);
    }

    return (
        <div className={s.dialogsWindow}>
            <div className={s.item}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
            <div className={s.messageArea}>
                <div>
                    <textarea ref={newMessageRef}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Send Message</button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;