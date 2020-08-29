import React from 'react';
import style from '../../common/FormControls/FormControls.module.css';
import contactStyle from './ProfileInfo.module.css';
import { createField, Input, Textarea } from '../../common/FormControls/FormControls';
import { reduxForm } from 'redux-form';

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div><button>save</button></div>
            {error && <div className={style.formSummaryError}> {error} </div>}
            <div>
                <b>Full name:</b>
                {createField('Full name', 'fullNam', [], Input)}
            </div>
            <div>
                <b>Do I need a job?:</b>
                {createField('', 'lookingForAJob', [], Input, { type: 'checkbox' })}
            </div>
            <div>
                <b>Job description:</b>
                {createField('My professional skills', 'lookingForAJobDescription', [], Textarea)}
            </div>
            <div>
                <b>About me:</b>
                {createField("About me", "aboutMe", [], Textarea)}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                    return <div key={key} className={contactStyle.contact}>
                        <b>{key}: {createField(key, "contacts." + key, [], Input)}</b>
                    </div>
                })}
            </div>
        </form>
    );
}

export default reduxForm({ form: 'editProfileDataForm' })(ProfileDataForm);