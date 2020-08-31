import React, { useState, useEffect } from 'react';

const ProfileStatus = ({ status, updateStatus }) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(status);

    useEffect( () => {
        setStatus(status);
    }, [status] );

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{status || 'no status' }</span>
                </div>
            }
            {editMode &&
                <div>
                    <input autoFocus={true} onBlur={deactivateEditMode} onChange={onStatusChange}
                        value={status}></input>
                </div>
            }
        </div>
    );
}

export default ProfileStatus;