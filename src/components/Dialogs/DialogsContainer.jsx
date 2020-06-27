import React from 'react';
import { updateNewMessageTextCreateAction, addMessageCreateAction } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {
    let state = props.store.getState()
    let addMessage = () => {
        props.store.dispatch(addMessageCreateAction())
    }
    let onChangeMessage = (text) => {
        props.store.dispatch(updateNewMessageTextCreateAction(text))
    }

    return <Dialogs addMessage={addMessage}
        changeMessage={onChangeMessage}
        dialogs={state.dialogsPage.dialogs}
        dialogMessages={state.dialogsPage.dialogMessages}
        newMessageText={state.dialogsPage.newMessageText} />
};

export default DialogsContainer;