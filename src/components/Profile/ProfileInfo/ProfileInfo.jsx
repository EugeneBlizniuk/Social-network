import React from 'react';

import style from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';
import userPhoto from '../../../assets/images/user.png';
import { useState } from 'react';
import ProfileDataForm from './ProfileDataForm';
import ProfileData from './ProfileData';

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfileData }) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader />
    }

    const onAvatarChosen = (e) => {
        if (e.target.files.length > 0) {
            const avatar = e.target.files[0];
            savePhoto(avatar);
        }
    }

    const onSubmit = (formData) => {
        saveProfileData(formData)
        .then(
            () => { setEditMode(false) }
        );
    }

    return (
        <div>
            <div className={style.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} className={style.avatar} />
                {isOwner &&
                    <div> <input type={'file'} onChange={onAvatarChosen} /> </div>
                }
                {
                    editMode
                        ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
                        : <ProfileData goToEditMode={() => { setEditMode(true) }} profile={profile} isOwner={isOwner} />
                }
                <ProfileStatus status={status} updateStatus={updateStatus} />
            </div>
        </div>
    );
}

export default ProfileInfo;