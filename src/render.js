import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addPost} from "./redux/state";
import {upDateText} from "./redux/state";




export let rerenderEntreidTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state = {state} addPost = {addPost} upDateText = {upDateText} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}



