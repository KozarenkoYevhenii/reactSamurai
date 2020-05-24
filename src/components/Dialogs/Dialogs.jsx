import React from 'react';
import s from './Dialogs.module.css'

let Dialogs = () => {
    return (
        <div className={s.dialogsWindow}>
            <div className={s.dialogs}>
                <div className={s.dialogItem}>
                    Vasia
                </div>
                <div className={s.dialogItem}>
                    Petia
                </div>
                <div className={s.dialogItem}>
                    Sofiika
                </div>
                <div className={s.dialogItem}>
                    Dima
                </div>
                <div className={s.dialogItem}>
                    Ivan
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    Hello!
                </div>
                <div className={s.message}>
                    How are you?
                </div>
            </div>
        </div>
    )
};

export default Dialogs;