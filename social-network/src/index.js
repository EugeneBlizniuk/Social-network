import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state, { addNewPost, updatePostTextField, subscribe } from './redux/state';

let rerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPost={addNewPost} updateTextField={updatePostTextField} />
    </BrowserRouter>, document.getElementById('root')
  );
}

rerenderEntireTree();

subscribe(rerenderEntireTree);

// for the app to work offline
serviceWorker.unregister();
