import React from 'react';

import style from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';
import userPhoto from '../../../assets/images/user.png';
import Contacts from './Contacts/Contacts';
import JobDescription from './JobDescription/JobDescription';

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
                <div><b>Full name:</b> {props.profile.fullName} </div>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
                <Contacts contacts={props.profile.contacts} />
                <JobDescription
                    lookingForAJob={props.profile.lookingForAJob}
                    lookingForAJobDescription={props.profile.lookingForAJobDescription} />
                <div>
                    <b>About me:</b>
                    { props.profile.aboutMe }
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;