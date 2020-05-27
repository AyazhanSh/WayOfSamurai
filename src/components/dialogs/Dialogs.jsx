import React from "react";
import n from "./Dialogs.module.css";
import DialogItem from "./dialogsItem/DialogsItem";
import Messages from "./messageElements/MessageElements";


const Dialogs = (props) => {
  

    
    let dialogsElements = props.dialogsData.map((dialog) => {
        return <DialogItem name = {dialog.name} id = {dialog.id}/>
     })

    let messageElements = props.messageData.map((el) => {
        return(<Messages message = {el.message}/>)
    })

    return(
        <div className = {n.dialogs}>
            <div className = {n.dialogsItem}>
              
              {dialogsElements}
               
               
            </div>
            <div className = {n.messages}>
               {messageElements}
            </div>
        </div>
    )
}

export default Dialogs;