import React from 'react'
import './style.css'

const ContactForm = ({formFunc}) => {
    return (
        <div>
            <div className='contact_form_div'>
                <h3 style={{ textAlign: 'center' }}>Write To Us</h3>
                <form action="" className='msg_form'>
                    <input type="text" className='input' placeholder='Type First Name' name="" id="" />
                    <input type="text" className='input' placeholder='Type Last Name' name="" id="" />
                    <input type="text" className='input' placeholder='Type Email' name="" id="" />
                    <input type="text" className='input' placeholder='Type Subject' name="" id="" />
                    {/* <input type="text" className='input_msg' placeholder='Type Message' name="" id="" /> */}
                    <textarea name="" id="" cols="30"  className='input_msg' placeholder='Type Message'></textarea>
                    <div className='form_input_btnss'>

                        <input type='button' className='input_cancel_btn' onClick={formFunc} name="Cancel" id="" value='Cancel' />
                        <input type='submit' className='input_btn' value="Send" id="" />
                    </div>
                </form>

            </div>
        </div>
    )
}

export default ContactForm