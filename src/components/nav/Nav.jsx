import React from 'react';

import n from "./Nav.module.css";

import {NavLink} from "react-router-dom";

function Nav() {
    return (
        <nav className = {n.nav}> 
        <div className = {n.item}>
          <NavLink to = "/profile">Profile</NavLink>
        </div>
        <div className = {n.item}>
          <NavLink to = "/dialogs">Dialogs</NavLink>
        </div>
        <div className = {n.item}>
          <a>Навыки и ключевые качества</a>
        </div>

      </nav>
    )
}

export default Nav;