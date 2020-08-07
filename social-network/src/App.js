import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import "./App.css";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Profile/Dialogs/Dialogs";
import News from "./components/Profile/News/News";
import Music from "./components/Profile/Music/Music";
import Settings from "./components/Profile/Settings/Settings";

const App = (props) => {
  debugger;
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path="/profile"
          render={() => <Profile postMessages={props.state.profileData.postMessages}
            textFieldValue={props.state.profileData.newPostTextField} dispatch={props.dispatch} />}
        />
        <Route path="/dialogs"
          render={() => <Dialogs dialogs={props.state.dialogsData.dialogs} messages={props.state.dialogsData.messages} />}
        />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
      </div>
    </div>
  );
};

export default App;
