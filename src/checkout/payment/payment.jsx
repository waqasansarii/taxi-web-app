import React from 'react'
import { Link } from 'react-router-dom'
import Switch from '@material-ui/core/Switch';
import paypal from '../../images/paypal (1).png'
import google from '../../images/google-wallet.png'
import mastercard from '../../images/mastercard (1).png'
import './style.css'

const Payment = () => {
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
    });
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        // console.log(state.checkedB)
    };
    return (
        <div>
            <div className='main_payment_div'>
                <div className='head_check_div'>
                    <div className='head_div'>
                        <h4>Payment</h4>
                        <span className='terms_span'>Term & Conditions</span>
                        <Link to='/' className='read_link'>read</Link>
                    </div>
                    <Switch
                        checked={state.checkedB}
                        onChange={handleChange}
                        color="primary"
                        name="checkedB"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />

                </div>
                <div className='payment_cards_div'>
                    <div className='payment_card1'>
                        <img className='payment_card_img' src={paypal} alt="" />
                        <p className='payment_card_span'>Paypal</p>
                    </div>
                    <div className='payment_card2'>
                        <img src={google} alt="" />
                        <p className='payment_card_span'>Gpay</p>
                    </div>
                    <div className='payment_card3'>
                        <img src={mastercard} alt="" />
                        <p className='payment_card_span'>Card</p>
                    </div>
                </div>
                <div className='pay_card_div'>
                    <h4>Pay by Card</h4>
                    <div>

                        <input type="text" className='card_name' placeholder='Name on card' name="" id="" />
                    </div>
                    <div className='card_detail_div'>

                    <input type="text" className='card_number' placeholder='card number' name="" id=""/>
                    <input type="text" className='expiry' placeholder='Expiry' name="" id=""/>
                    <input type="text" className='CVV' placeholder='CVV' name="" id=""/>
                    </div>
                </div>
                <div>
                    <Link className='pay_link' to='/welcome'>
                    <button className='pay_btn'>Pay</button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Payment 