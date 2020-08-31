import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import User from './User';
import Paginator from '../../common/Paginator/Paginator';

const Users = (props) => {

    return <div>
        {props.isFetching ? <Preloader /> : null}
        <Paginator
            totalItemsCount={props.totalCount}
            pageSize={props.pageSize}
            currentPage={props.currentPage}
            onPageChanged={props.onPageChanged}
            portionSize={10}
        />
        {
            props.users.map(u => <div key={u.id}>
                <User
                    user={u}
                    followingInProcess={props.followingInProcess}
                    follow={props.follow}
                    unfollow={props.unfollow}
                />
            </div>)
        }
    </div>
}

export default Users;