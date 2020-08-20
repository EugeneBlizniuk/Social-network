import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setUserData } from '../../redux/reducer/authReducer';
import * as axios from 'axios';

class HeaderContainer extends React.Component {
  componentDidMount() {
    try {
      axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true
      })
        .then(response => {
          debugger
          if (response.data.resultCode === 0) {
            let { id, email, login } = response.data.data;
            this.props.setUserData({ id, email, login });
          }
        });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return <Header {...this.props} />
  }
};

let mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  login: state.auth.login
});

export default connect(mapStateToProps, { setUserData })(HeaderContainer);
