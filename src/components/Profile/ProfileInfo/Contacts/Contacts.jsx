import React from 'react';

const Contacts = ({ contacts }) => {
    return (
        <div>
            <b>Contacts</b>:
            {
                Object.keys(contacts)
                    .map(key => {
                        return <Contact key={key} contactTitle={key} contactValue={contacts[key]} />
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