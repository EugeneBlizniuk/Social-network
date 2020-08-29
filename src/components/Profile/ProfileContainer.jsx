import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
    getUserProfile,
    getStatus,
    updateStatus,
    savePhoto,
    saveProfileData
} from '../../redux/reducer/profileReducer';
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import {
    selectProfile,
    selectStatus,
    selectAuthorizedUserId,
    selectIsAuthenticated
} from "../../redux/selector/profileSelector";

class ProfileContainer extends React.Component {
    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.autherizedUserId;
            if (!userId) {
                this.props.history.push('/login');
            }
        }

        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return <Profile
            {...this.props}
            profile={this.props.profile}
            status={this.props.status}
            updateStatus={this.props.updateStatus}
            isOwner={!this.props.match.params.userId}
            savePhoto={this.props.savePhoto}
            saveProfileData={this.props.saveProfileData}
        />
    }
}

let mapStateToProps = (state) => ({
    profile: selectProfile(state),
    status: selectStatus(state),
    autherizedUserId: selectAuthorizedUserId(state),
    isAuthenticated: selectIsAuthenticated(state)
});

export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto, saveProfileData }),
    withRouter
)(ProfileContainer);