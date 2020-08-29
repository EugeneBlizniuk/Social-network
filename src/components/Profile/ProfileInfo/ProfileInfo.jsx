import React from 'react';

import style from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';
import userPhoto from '../../../assets/images/user.png';
import Contacts from './Contacts/Contacts';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    const onAvatarChosen = (e) => {
        if (e.target.files.length > 0) {
            const avatar = e.target.files[0];
            props.savePhoto(avatar);
        }
    }

    debugger
    return (
        <div>
            <div className={style.descriptionBlock}>
                <img src={props.profile.photos.large || userPhoto} className={style.avatar} />
                {props.isOwner &&
                    <div> <input type={'file'} onChange={onAvatarChosen} /> </div>
                }
                <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
                <Contacts {...props} />
            </div>
        </div>
    );
}

export default ProfileInfo;