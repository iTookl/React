import React from 'react';
import styles from './Messages.module.css';
import DialogItem from './DialogsItems/DialogItem';
import MessageItem from './MessagesItems/MessageItem'






const Messages = (props) => {
    console.log(props);
    let dialogsElements = props.dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = props.messagesData.map( message => <MessageItem message={message.message}/>);


    return(
        <div className={styles.messages}>
            <div className={styles.dialogsWrap}>
            { dialogsElements }
            { messagesElements }
            </div>
        </div>
    );
}


export default Messages;