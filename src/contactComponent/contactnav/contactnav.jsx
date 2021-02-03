import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookMessenger, faSkype, faWhatsapp } from '@fortawesome/fontawesome-free-brands'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import chat from '../../images/chat (2).png'
import playstore from '../../images/playstore.png'
import appstore from '../../images/app-store.png'
import ContactForm from '../contactForm/contactForm'
import './style.css'



const ContactNav = () => {

    let [form, setForm] = useState(false)

    const showForm = () => {
        setForm(!form)
    }

    return (
        <div className='contactnav_container'>
            <div className='main_contactnav_div'>
                <h2 className='contactnav_head'>Contact Us</h2>
                <h4 style={{ textAlign: 'center', marginTop: '20px' }}>Via Your Favourite Apps</h4>
                <ul className='conatactnav_ul'>
                    <li>
                        <FontAwesomeIcon className='contactnav_icon' icon={faFacebookMessenger} />
                    </li>
                    <li>
                        <FontAwesomeIcon className='contactnav_icon' icon={faPhoneAlt} />

                    </li>
                    <li>
                        <FontAwesomeIcon className='contactnav_icon' icon={faSkype} />

                    </li>
                    <li>
                        <FontAwesomeIcon className='contactnav_icon' icon={faEnvelope} />

                    </li>
                    <li>
                        <FontAwesomeIcon className='contactnav_icon' icon={faWhatsapp} />

                    </li>
                </ul>

                <h3 style={{ textAlign: 'center', marginTop: '40px' }}>Other Contacts</h3>
                <div className='otherContact_div'>
                    <div className='othercontact_div1'>
                        <div className='cantact_1'>

                            <FontAwesomeIcon className='othercontactnav_icon' icon={faPhoneAlt} />
                            <span>US +1 217 636 4160</span>
                        </div>
                        <div className='cantact_2'>

                            <FontAwesomeIcon className='othercontactnav_icon' icon={faPhoneAlt} />
                            <span>UK +44 7985 190947</span>
                        </div>
                    </div>
                    <div className='othercontact_div2'>
                        <div className='cantact_3'>

                            <FontAwesomeIcon className='othercontactnav_icon' icon={faPhoneAlt} />
                            <span>JA +1 876 402 1979</span>
                        </div>
                        <div className='cantact_4'>

                            <FontAwesomeIcon className='othercontactnav_icon' icon={faEnvelope} />
                            <span>hello@jamrocktaxi.com</span>
                        </div>
                    </div>
                </div>
                {form ?

                    <ContactForm formFunc={showForm} />
                    :
                    <div className='sendmsg_div'>
                        <h3 style={{ textAlign: 'center', marginTop: '30px' }}>Sending Online Message</h3>
                        <img src={chat} onClick={showForm} style={{ textAlign: 'center', marginTop: '20px' }} className='chatImage' alt="" />
                        <h3 style={{ textAlign: 'center', marginTop: '30px' }}>Get the JamRockTaxi App</h3>
                        <h5 style={{ textAlign: 'center', marginTop: '10px', color: 'grey' }}>Book or Manage your Booking Via our App</h5>

                    </div>

                }
                <div className='apps_store_div'>

                    <div style={{ marginLeft: '-10px', border: '1px solid steelblue', padding: '10px', borderRadius: '10px' }}>
                        <img src={playstore} alt="" />
                        <p>Google play</p>
                    </div>
                    <div style={{ marginLeft: '60px', border: '1px solid steelblue', padding: '10px', borderRadius: '10px' }}>
                        <img src={appstore} alt="" />
                        <p>Apple Store</p>

                    </div>

                </div>


            </div>
        </div>
    )
}

export default ContactNav