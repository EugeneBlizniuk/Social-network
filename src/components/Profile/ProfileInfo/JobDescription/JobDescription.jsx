import React from 'react';

const JobDescription = ({ lookingForAJob, lookingForAJobDescription }) => {
    return <div>
        <div>
            <b>Do I need a job?:</b> {lookingForAJob ? 'Yep' : 'Nope' }
        </div>
        <div>
            <b>Job description:</b> {lookingForAJobDescription}
        </div>
    </div>
}

export default JobDescription;