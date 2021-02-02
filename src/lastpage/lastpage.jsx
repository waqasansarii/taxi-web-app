import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import './style.css'
import bag from '../images/bag.png'
import playstore from '../images/playstore.png'
import appstore from '../images/app-store.png'

const LastPage = () => {
    return (
        <div>
            <div className='lastpage_conatiner'>
                <div className='nav5_div'>
                    <Link className='nav5_link' to='/checkout'>
                        <FontAwesomeIcon className='arrow5_icon' icon={faArrowLeft} />

                    </Link>

                </div>
                <div style={{ marginTop: '20px', textAlign: 'center' }}>

                    <img src={bag} alt="" />
                    <h3 className='thankyou_head'>Thank you for your order! #548A56</h3>
                    <p className='thankyou_para'>Your order is been processed. We will contact you if there are any issues with your order</p>
                </div> <hr className='last_hr' />
                <div>
                    <p className='recomend_para'>We recommend downloading our app. You can access your bookings via the app
                         where you can manage or cancel your booking. You can also message us or your 
                         driver via the app
                    </p>
                    <h3 className='app_para'>Get the JamRockTaxi App</h3>
                </div>
                <div className='stores_div'>
                   <img className='stores_img' src={playstore} alt=""/>
                   <img className='stores2_img' src={appstore} alt=""/>
                </div>
                <div style={{textAlign:'center',marginTop:'50px'}}>
                    <Link className='goto_home' to='/'>
                           back to home
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LastPage