import React from 'react';
import n from "./Post.module.css";
import Mypost from './mypost/Mypost';

function Post(props) {

  

    let post = props.posts.map((p) => {
        return (<Mypost massege = {p.message}  likecount = {p.likeCount} />)
    })
     let newPost = React.createRef();
    let addPost = ()=> {
        props.addPost();
    
    }
    let onch = ()=> {
        let t = newPost.current.value;
        props.upDateText(t);
    }
    return (

        
        <div className={n.content}>
            <div>
                <div>
                <textarea onChange = {onch} ref = {newPost} value = {props.t}></textarea>
                </div>
                <div>
                <button  onClick = {addPost}>add post</button>
                </div>
            </div>
            <div>
                {post}
            </div>



        </div>
    )
}

export default Post;