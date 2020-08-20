import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import * as axios from 'axios';
import { setUserProfile } from '../../redux/reducer/profileReducer';

class ProfileContainer extends React.Component {
    componentDidMount() {
        try {
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
                .then(response => {
                    this.props.setUserProfile(response.data);
                });
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} />
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);
