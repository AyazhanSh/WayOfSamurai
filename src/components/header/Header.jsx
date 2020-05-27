import React from 'react';
import n from "./Header.module.css"
console.log(n);
function Header() {
    return (
        <header className={n.header}>
            <h1>СОЦИАЛЬНАЯ СЕТЬ</h1>
        </header>
    )
}

export default Header;