import React from "react";
import n from "./../Dialogs.module.css";


const Messages = (props) => {
    return(<div className = {n.message}>{props.message}</div>)
}


export default Messages;