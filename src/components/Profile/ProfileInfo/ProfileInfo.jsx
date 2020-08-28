import React from 'react';

import style from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';
import userPhoto from '../../../assets/images/user.png';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    
    return (
        <div>
            <div className={style.descriptionBlock}>
                <img src={props.profile.photos.large || userPhoto} className={style.avatar} />
                <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
            </div>
        </div>
    );
}

export default ProfileInfo;