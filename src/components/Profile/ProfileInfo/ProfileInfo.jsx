import React from 'react';

import style from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className={style.descriptionBlock}>
                <img src={props.profile.photos.large} />
                <ProfileStatus status={"status is here"} />
            </div>
        </div>
    );
}

export default ProfileInfo;