import React from 'react';
import { connect } from 'react-redux';
import {
    followAC,
    unfollowAC,
    setUsersAC,
    setCurrentPage,
    setTotalCount,
    toggleIsFetching
} from '../../../redux/reducer/usersReducer';
import Users from './Users';
import * as axios from 'axios';

class UsersContainer extends React.Component {
    componentDidMount() {
        try {
            this.props.toggleIsFetching(true);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.toggleIsFetching(false);
                    this.props.setUsers(response.data.items);
                    this.props.setTotalCount(response.data.totalCount);
                });
        } catch (err) {
            console.log(err);
        }


    }

    onPageChanged = (currentPage) => {
        this.props.setCurrentPage(currentPage);
        try {
            this.props.toggleIsFetching(true);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.toggleIsFetching(false);
                    this.props.setUsers(response.data.items);
                });
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        return <Users
            totalCount={this.props.totalCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            isFetching={this.props.isFetching}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
        />
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        totalCount: state.usersPage.totalCount,
        isFetching: state.usersPage.isFetching
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPage(currentPage))
        },
        setTotalCount: (totalCount) => {
            dispatch(setTotalCount(totalCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetching(isFetching))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);