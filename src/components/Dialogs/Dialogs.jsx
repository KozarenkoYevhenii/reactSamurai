import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { updateNewMessageTextCreateAction, addMessageCreateAction } from '../../redux/dialogs-reducer';


const Dialogs = (props) => {
    let dialogsElement = props.state.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messagesElement = props.state.dialogMessages.map(m => <Message id={m.id} message={m.message}/>)
    let newMessageRef = React.createRef();
    let addMessage = () => {
        props.dispatch(addMessageCreateAction())
    }
    let onChangeMessage = () => {
        let text = newMessageRef.current.value
        props.dispatch(updateNewMessageTextCreateAction(text))
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
                    <textarea onChange={onChangeMessage} ref={newMessageRef}  value={props.state.newMessageText}  placeholder='Enter Message'></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Send Message</button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;