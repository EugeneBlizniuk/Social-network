import React from 'react';

const Contacts = (props) => {
    return (
        <div>
            <b>Contacts</b>:
            {
                Object.keys(props.contacts)
                    .map(key => {
                        return <Contact key={key} contactTitle={key} contactValue={props.contacts[key]} />
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