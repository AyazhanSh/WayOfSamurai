import React from 'react';
import n from "./Content.module.css";
import Post from "./post/Post";
import ProfileInfo from './profileinfo/ProfileInfo';

function Content(props) {


    return (
        <div className = {n.content}>
            <ProfileInfo/>
            <Post posts = {props.post} addPost = {props.addPost} t = {props.newText } upDateText = {props.upDateText} />

        </div>
    )
}

export default Content;