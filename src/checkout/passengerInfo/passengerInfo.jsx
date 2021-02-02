import React from 'react'
import group from '../../images/Mask Group 81.png'
import './style.css'

const PassengerInfo = () => {
    return (
        <div>
            <div className='passenger_div'>
                <h3 className='passenger_head'>Lead Passenger Info</h3>
                <p className='passenger_para'>Passenger profile will be created</p>
                <div>
                    <div className='passenger_inp_div1'>

                        <input className='inps1' type="text" placeholder='Firstname' name="" id="" />
                        <input type="text" className='inps1' name="" placeholder='Lastname' id="" />
                        <input type="text" name="" className='inps1' placeholder='Email' id="" />
                    </div>
                    <div className='passenger_inp_div2'>
                        <img className='group_img' src={group} alt="" />
                        <input className='num_inp' type="number" placeholder='+1' name="" id="" />
                        <input type="text" className='inps2' placeholder='Mobile Number' name="" id="" />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default PassengerInfo