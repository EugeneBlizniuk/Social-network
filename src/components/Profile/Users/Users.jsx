import React from 'react';
import userPhoto from './../../../assets/images/user.png';
import style from './Users.module.css';
import Preloader from '../../common/Preloader/Preloader';
import { NavLink } from 'react-router-dom';
import { usersAPI } from '../../../api/API';

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
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={style.userImage} />
                        </NavLink>
                    </div>
                    <div>
                        {
                            u.followed
                                ? <button disabled={props.followingInProcess.some(id => id === u.id)} onClick={() => {
                                    props.toggleFollowingInProcess(true, u.id);
                                    usersAPI.unfollow(u.id)
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(u.id);
                                        }
                                        props.toggleFollowingInProcess(false, u.id);
                                    });
                                }
                                }>Unfollow</button>
                                : <button disabled={props.followingInProcess.some(id => id === u.id)} onClick={() => {
                                    props.toggleFollowingInProcess(true, u.id);
                                    usersAPI.follow(u.id)
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id);
                                        }
                                        props.toggleFollowingInProcess(false, u.id);
                                    });
                                }
                                }>Follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                    </span>
                    <span>
                        <div>u.location.country</div>
                        <div>u.location.city</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;