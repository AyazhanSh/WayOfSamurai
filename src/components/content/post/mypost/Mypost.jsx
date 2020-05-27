import React from 'react';
import n from "./Mypost.module.css";

function Mypost(props) {
    return (
        <div className={n.content}>
           <img src = "https://2.bp.blogspot.com/-V37XMh9Qj8o/WVXRkwH382I/AAAAAAADYq4/42fxVE6vaHo1jdMHZ1x34LDzUM7spv50gCLcBGAs/s1600/f35463ab67a952bfc55d88a58708c928.jpg"/>
    <h1>{props.massege}</h1>
           <div>
               <label>like</label> {props.likecount}
           </div>
        </div>
    )
}

export default Mypost;