import React from 'react';

import style from './ProfileInfo.module.css';

const ProfileInfo = (props) => {

    let textFieldValue = React.createRef();

    const onPostChange = () => {
        let textToSend = textFieldValue.current.value;
        props.updatePostTextField(textToSend);
    }

    const addPost = () => {
        props.addPost();
    }

    return (
        <div>
            <div>
                <img src="https://images.squarespace-cdn.com/content/v1/5a5906400abd0406785519dd/1552662149940-G6MMFW3JC2J61UBPROJ5/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/baelen.jpg?format=1500w" />
            </div>
            <div className={style.descriptionBlock}>Avatar + description</div>
            <div>
                <div>
                    <textarea ref={textFieldValue} onChange={onPostChange} value={props.textFieldValue}></textarea>
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;