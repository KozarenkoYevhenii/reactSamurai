import { updateNewMessageTextCreateAction, addMessageCreateAction } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        dialogMessages: state.dialogsPage.dialogMessages,
        newMessageText: state.dialogsPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => dispatch(addMessageCreateAction()),
        changeMessage: (text) => dispatch(updateNewMessageTextCreateAction(text))
    }
}
const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer