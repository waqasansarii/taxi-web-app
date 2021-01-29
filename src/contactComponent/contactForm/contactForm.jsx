import React from 'react'
import './style.css'

const ContactForm =() => {
    return(
        <div>
            <div className='contact_form_div'>
                <h3 style={{textAlign:'center'}}>Write To Us</h3>
                <form action="" className='msg_form'>
                    <input type="text" className='input' placeholder='Enter First Name' name="" id=""/>
                    <input type="text" className='input' placeholder='Enter Last Name' name="" id=""/>
                    <input type="text" className='input' placeholder='Enter Email' name="" id=""/>
                    <input type="text" className='input' placeholder='Enter Subject' name="" id=""/>
                    <input type="text" className='input' placeholder='Enter Message' name="" id=""/>
                    <input type='submit' className='input_btn' name="" id=""/>
                </form>

            </div>
        </div>
    )
}

export default ContactForm