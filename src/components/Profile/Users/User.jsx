import React from 'react';
import userPhoto from './../../../assets/images/user.png';
import style from './Users.module.css';
import { NavLink } from 'react-router-dom';

let User = ({ user, followingInProcess, follow, unfollow }) => {

    return <div>
        <span>
            <div>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto} className={style.userImage} />
                </NavLink>
            </div>
            <div>
                {
                    user.followed
                        ? <button disabled={followingInProcess.some(id => id === user.id)}
                            onClick={() => { unfollow(user.id) }
                            }>Unfollow</button>
                        : <button disabled={followingInProcess.some(id => id === user.id)}
                            onClick={() => { follow(user.id) }
                            }>Follow</button>
                }
            </div>
        </span>
        <span>
            <span>
                <div>{user.name}</div>
            </span>
            <span>
                <div>u.location.country</div>
                <div>u.location.city</div>
            </span>
        </span>
    </div>
}

export default User;