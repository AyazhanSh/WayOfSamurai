import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Content from './components/content/Content';
import Dialogs from './components/dialogs/Dialogs';
import {BrowserRouter, Route} from "react-router-dom";


function App(props) {
  
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper-content">
          <Route render =
           {() => <Dialogs dialogsData = {props.state.messagePage.dialogsData} 
           messageData = {props.state.messagePage.messageData}/>} 
           path = "/dialogs"/>
          <Route render = {() => <Content post = {props.state.profilePage.postData} 
          newText = {props.state.profilePage.newPropsText} 
          upDateText = {props.upDateText}
          addPost = {props.addPost}/>} path = "/profile"
         />
          
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
