import React from 'react';
import * as axios from 'axios';
import Users from './Users';

class UsersApi extends React.Component {
    componentDidMount() {
        try {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
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
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
                .then(response => {
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
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
        />
    }
}

export default UsersApi;