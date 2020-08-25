import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { getAuthUserData, logout } from '../../redux/reducer/authReducer';

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />
  }
};

let mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  login: state.auth.login
});

export default connect(mapStateToProps, { logout })(HeaderContainer);
