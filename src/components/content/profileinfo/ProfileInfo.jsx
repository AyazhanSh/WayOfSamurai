import React from 'react';
import n from "./ProfileInfo.module.css";


function ProfileInfo() {
    return (
        <div className = {n.content}>
            <img src="https://sun1.beeline-kz.userapi.com/KmEZZpj7KOSsYuw-cSVhcbxPda-lcaVu5e1sUg/-YrB2j9dwtg.jpg" />
            <div className = {n.description}>
                ava+description
            </div>

        </div>
    )
}

export default ProfileInfo;