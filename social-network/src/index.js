import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/state';

let rerenderEntireTree = () => {
  debugger;
  ReactDOM.render(
    <BrowserRouter>
      <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
    </BrowserRouter>, document.getElementById('root')
  );
}
rerenderEntireTree()
store.subscribe(rerenderEntireTree);

// for the app to work offline
serviceWorker.unregister();
