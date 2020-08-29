import React from 'react';
import Contacts from './Contacts/Contacts';
import JobDescription from './JobDescription/JobDescription';

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
    return (
        <div>
            {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
            <div><b>Full name:</b> {profile.fullName} </div>
            <Contacts contacts={profile.contacts} />
            <JobDescription
                lookingForAJob={profile.lookingForAJob}
                lookingForAJobDescription={profile.lookingForAJobDescription} />
            <div>
                <b>About me:</b>
                {profile.aboutMe}
            </div>
        </div>
    );
}

export default ProfileData;