import React, { useState } from 'react'
import { Window, TitleBar, TextInput, Button } from 'react-desktop/macOs';
import axios from 'axios';
import { useAlert } from 'react-alert';
import JsCookie from 'js-cookie'


import './sass/contact.scss'

const csrfToken = document.currentScript.getAttribute('csrfToken')


const Contact = () => {
    const alert = useAlert();
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [msg, setMSG] = useState('');

    const sendContact = () => {
        axios.post('/api/profile/contact/', {
            name: name,
            mail: mail,
            msg: msg
        }, {
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrfToken
            }
        })
        .then(res => {
            alert.success(res.data.status || 'sended')
        })
        .catch((error) => {
            if (error.response) if (error.response.data.error) return alert.error(error.response.data.error || 'Error to send Mail')
            alert.error(error.message || 'Error to send Mail')
        })
    }

    return (
        <div className='contact'>
            <Window chrome height="400px" width="100%" padding="10px">
                <TitleBar title="Contact Us" controls />
                <div style={{ width: '100%' }}>
                    <TextInput size='16px' label="Your Name" placeholder="Name" onChange={e => setName(e.target.value)} width='100%' rounded marginBottom='10px' />
                    <TextInput size='16px' label="Your Email" placeholder="Email" onChange={e => setMail(e.target.value)} rounded marginBottom='10px' />

                    <span className='msg-lable-span'>Your Message</span>
                    <textarea placeholder='Message' onChange={e => setMSG(e.target.value)} ></textarea>

                    <Button color="blue" width='50%' onClick={() => sendContact()}>
                        Send
                    </Button>
                </div>
            </Window>
        </div>
    )
}

export default Contact
