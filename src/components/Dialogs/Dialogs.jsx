import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsElement = props.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messagesElement = props.dialogMessages.map(m => <Message id={m.id} message={m.message}/>)
    let newMessageRef = React.createRef();
    let onAddMessage = () => {
        props.addMessage()
    }
    let onChangeMessage = () => {
        let text = newMessageRef.current.value
        props.changeMessage(text)
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
                    <textarea onChange={onChangeMessage} 
                    ref={newMessageRef}  
                    value={props.newMessageText}  
                    placeholder='Enter Message'></textarea>
                </div>
                <div>
                    <button onClick={onAddMessage}>Send Message</button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;