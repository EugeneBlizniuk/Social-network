import React from 'react';

const Contacts = (props) => {
    return (
        <div>
            <b>Contacts</b>:
            {
                Object.keys(props.profile.contacts)
                    .map(key => {
                        return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
                    })
            }
        </div>
    );
}

const Contact = ({ contactTitle, contactValue }) => {
    return <div>
        <b>{contactTitle}:</b> {contactValue}
    </div>
}


export default Contacts;