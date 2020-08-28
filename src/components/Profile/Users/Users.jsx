import React from 'react';
import style from './Users.module.css';
import Preloader from '../../common/Preloader/Preloader';
import User from './User';

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        {props.isFetching ? <Preloader /> : null}
        <div>
            {
                pages.map(p => {
                    return <span className={props.currentPage === p && style.selectedPage}
                        onClick={() => { props.onPageChanged(p) }}>{p}</span>
                })
            }
        </div>
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