import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import './style.css'



export const FaqList = () => {

    let [show, setShow] = useState(false)
    let [show2, setShow2] = useState(false)
    let [show3, setShow3] = useState(false)
    let [show4, setShow4]= useState(false)
    let [show5, setShow5] = useState(false)
    let [show6, setShow6] = useState(false)
    let [show7, setShow7] = useState(false)
    let [show8, setShow8] = useState(false)
    let [show9, setShow9] = useState(false)
    let [show10, setShow10] = useState(false)
    let [show11, setShow11] = useState(false)

    const handleShow = () => {
        setShow(!show)
    }
    const handleShow2 = () => {
        setShow2(!show2)
    }
    const handleShow3 = () => {
        setShow3(!show3)
    }
    const handleShow4 = () => {
        setShow4(!show4)
    }
    const handleShow5 = () => {
        setShow5(!show5)
    }
    const handleShow6 = () => {
        setShow6(!show6)
    }
    const handleShow7 = () => {
        setShow7(!show7)
    }
    const handleShow8 = () => {
        setShow8(!show8)
    }
    const handleShow9 = () => {
        setShow9(!show9)
    }
    const handleShow10 = () => {
        setShow10(!show10)
    }
    const handleShow11 = () => {
        setShow11(!show11)
    }

    return (
        <div>
            <div className='main_faq_div'>
                <h2 className='faq_head'>FAQs</h2>
                <p className='faq_para'>See Our FAQs or Contact Us</p>
                <ul className='faq_ul'>
                    <li onClick={handleShow}>
                        <p>Understanding the price quote</p>
                        <FontAwesomeIcon  className='more_icon' icon={faCaretDown} />
                    </li>
                    {show ?

                        <div className='toggle_div'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam repudiandae
                            libero, corrupti vitae adipisci animi quisquam itaque unde placeat
                            repellendus eos assumenda facilis consequuntur tenetur repellat maiores minus
                            hic. Architecto?
                              </p>
                        </div>
                        : null
                    }
                    <li onClick={handleShow2}>
                        <p>Understanding the price quote</p>
                        <FontAwesomeIcon  className='more_icon' icon={faCaretDown} />
                    </li>
                    {show2 ?

                        <div className='toggle_div'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam repudiandae
                            libero, corrupti vitae adipisci animi quisquam itaque unde placeat
                            repellendus eos assumenda facilis consequuntur tenetur repellat maiores minus
                            hic. Architecto?
                             </p>
                        </div>
                        : null
                    }
                    <li onClick={handleShow3}>
                        <p>ow To Book A Transfer</p>
                        <FontAwesomeIcon  className='more_icon' icon={faCaretDown} />
                    </li>
                    {show3 ?

                        <div className='toggle_div'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam repudiandae
                            libero, corrupti vitae adipisci animi quisquam itaque unde placeat
                            repellendus eos assumenda facilis consequuntur tenetur repellat maiores minus
                            hic. Architecto?
                            </p>
                        </div>
                        : null
                    }
                    <li onClick={handleShow4}>
                        <p>Was My Booking Successful?</p>
                        <FontAwesomeIcon  className='more_icon' icon={faCaretDown} />
                    </li>
                    {show4 ?

                        <div className='toggle_div'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam repudiandae
                            libero, corrupti vitae adipisci animi quisquam itaque unde placeat
                            repellendus eos assumenda facilis consequuntur tenetur repellat maiores minus
                            hic. Architecto?
                             </p>
                        </div>
                        : null
                    }
                    <li onClick={handleShow5}>
                        <p>How Can I Pay For My Transfer</p>
                        <FontAwesomeIcon  className='more_icon' icon={faCaretDown} />
                    </li>
                    {show5 ?

                        <div className='toggle_div'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam repudiandae
                            libero, corrupti vitae adipisci animi quisquam itaque unde placeat
                            repellendus eos assumenda facilis consequuntur tenetur repellat maiores minus
                            hic. Architecto?
                            </p>
                        </div>
                        : null
                    }
                    <li onClick={handleShow6}>
                        <p>Payment Currency</p>
                        <FontAwesomeIcon  className='more_icon' icon={faCaretDown} />
                    </li>
                    {show6 ?

                        <div className='toggle_div'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam repudiandae
                            libero, corrupti vitae adipisci animi quisquam itaque unde placeat
                            repellendus eos assumenda facilis consequuntur tenetur repellat maiores minus
                            hic. Architecto?
                            </p>
                        </div>
                        : null
                    }
                    <li onClick={handleShow7}>
                        <p>What Is The car Capacity</p>
                        <FontAwesomeIcon  className='more_icon' icon={faCaretDown} />
                    </li>
                    {show7 ?

                        <div className='toggle_div'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam repudiandae
                            libero, corrupti vitae adipisci animi quisquam itaque unde placeat
                            repellendus eos assumenda facilis consequuntur tenetur repellat maiores minus
                            hic. Architecto?
                            </p>
                        </div>
                        : null
                    }
                    <li onClick={handleShow8}>
                        <p>How Do I find My Driver</p>
                        <FontAwesomeIcon  className='more_icon' icon={faCaretDown} />
                    </li>
                    {show8 ?

                        <div className='toggle_div'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam repudiandae
                            libero, corrupti vitae adipisci animi quisquam itaque unde placeat
                            repellendus eos assumenda facilis consequuntur tenetur repellat maiores minus
                            hic. Architecto?
                           </p>
                        </div>
                        : null
                    }
                    <li onClick={handleShow9}>
                        <p>Can I make Changes To My Booking</p>
                        <FontAwesomeIcon  className='more_icon' icon={faCaretDown} />
                    </li>
                    {show9 ?

                        <div className='toggle_div'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam repudiandae
                            libero, corrupti vitae adipisci animi quisquam itaque unde placeat
                            repellendus eos assumenda facilis consequuntur tenetur repellat maiores minus
                            hic. Architecto?
                           </p>
                        </div>
                        : null
                    }
                    <li onClick={handleShow10}>
                        <p>Can I Cancel My Order</p>
                        <FontAwesomeIcon  className='more_icon' icon={faCaretDown} />
                    </li>
                    {show10 ?

                        <div className='toggle_div'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam repudiandae
                            libero, corrupti vitae adipisci animi quisquam itaque unde placeat
                            repellendus eos assumenda facilis consequuntur tenetur repellat maiores minus
                            hic. Architecto?
                           </p>
                        </div>
                        : null
                    }
                    <li onClick={handleShow11}>
                        <p>Can I Get A Refunds</p>
                        <FontAwesomeIcon  className='more_icon' icon={faCaretDown} />
                    </li>
                    {show11 ?

                        <div className='toggle_div'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam repudiandae
                            libero, corrupti vitae adipisci animi quisquam itaque unde placeat
                            repellendus eos assumenda facilis consequuntur tenetur repellat maiores minus
                            hic. Architecto?
                            </p>
                        </div>
                        : null
                    }
                </ul>
            </div>
        </div>
    )
}