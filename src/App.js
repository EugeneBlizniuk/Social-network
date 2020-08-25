import React from "react";
import { Route, withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";

import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import News from "./components/Profile/News/News";
import Music from "./components/Profile/Music/Music";
import Settings from "./components/Profile/Settings/Settings";
import DialogsContainer from "./components/Profile/Dialogs/DialogsContainer";
import UsersContainer from "./components/Profile/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { initializeApp } from './redux/reducer/appReducer';
import Preloader from "./components/common/Preloader/Preloader";
import { selectInitialized } from "./redux/selector/appSelector";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <Login />} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  initialized: selectInitialized(state)
});

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);