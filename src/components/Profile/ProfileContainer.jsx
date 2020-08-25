import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile, getStatus, updateStatus } from '../../redux/reducer/profileReducer';
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import {
    selectProfile,
    selectStatus,
    selectAuthorizedUserId,
    selectIsAuthenticated
} from "../../redux/selector/profileSelector";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            if (this.props.isAuthenticated) {
                userId = this.props.autherizedUserId;
            }
        }

        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
    }
}

let mapStateToProps = (state) => ({
    profile: selectProfile(state),
    status: selectStatus(state),
    autherizedUserId: selectAuthorizedUserId(state),
    isAuthenticated: selectIsAuthenticated(state)
});

export default compose(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus })
)(ProfileContainer);