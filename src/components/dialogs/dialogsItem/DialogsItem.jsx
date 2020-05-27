import React from "react";
import n from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";




const DialogItem = (props) => {
    let path = "/dialogs/" + props.id
    return(
        <div className = {n.dialog}>
          <NavLink to = {path}>{props.name}</NavLink>
        </div>
    )
}
export default DialogItem;