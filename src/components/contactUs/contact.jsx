import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebookMessenger, faSkype , faWhatsapp} from '@fortawesome/fontawesome-free-brands'
import {faPhoneAlt} from '@fortawesome/free-solid-svg-icons'
import {faEnvelope} from '@fortawesome/free-regular-svg-icons'
import './contact.css'



const Contact = () => {
    return(
        <div className='contact_container'>
            <div className='main_contact_div'>
                <h2 className='contact_head'>Contact Us</h2>
                <ul className='conatact_ul'>
                    <li>
                        <FontAwesomeIcon className='contact_icon' icon={faFacebookMessenger} />
                    </li>
                    <li>
                    <FontAwesomeIcon className='contact_icon' icon={faPhoneAlt} />

                    </li>
                    <li>
                    <FontAwesomeIcon className='contact_icon' icon={faSkype} />

                    </li>
                    <li>
                    <FontAwesomeIcon className='contact_icon' icon={faEnvelope} />

                    </li>
                    <li>
                    <FontAwesomeIcon className='contact_icon' icon={faWhatsapp} />

                    </li>
                </ul>

            </div>
        </div>
    )
}

export default Contact