import React, { useState } from 'react'
import label from '../../images/label.png'
import Switch from '@material-ui/core/Switch';
import './style.css'
import plane from '../../images/plane.png'
import pin from '../../images/pin (5).png'
import building from '../../images/building.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'


const ReturnTip = () => {

    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
    });
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        // console.log(state.checkedB)
    };

    let [hide, setHide] = useState(false);
    const handleArea = () => {
        setHide(!hide)
    }
    return (
        <div >
            <div className='main_return_tip_div'>
                <div className='return_para_div'>
                    <p className='return_para'>Add Return Trip?</p>
                    <img className='label_img' src={label} alt="" />
                    <p className='retrun_price'>$40</p>
                    <p className='return_extra'>Extra</p>
                </div>

                <Switch
                    checked={state.checkedB}
                    onChange={handleChange}
                    color="primary"
                    name="checkedB"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
                {/* <button>Add Note</button> */}


            </div>
            {state.checkedB ?
                <div className='checkout_ticket2_div'>

                    <div className='main_ticket2_div'>
                        <div>
                            <div className='feild1'>
                                <img src={pin} alt="" />
                                <span>Sangster International Airport, Montego Bay</span>
                            </div>
                            <div className='pickandflight_div'>
                                <div className='pick_div'>
                                    <p>Pickup Date & Time</p>
                                    
                                    <input type="datetime" placeholder='20-01-21 16:30' className='return_inp' name="" id="" />
                                    {/* <span className='ticket_date'>20-01-21</span> */}
                                    {/* <span className='ticket_time'>16:30</span> */}
                                </div>
                                <div className='flight_div'>
                                    <span className='flight_span'>Flight Number </span><span className='flight_span2'>(If Known)</span>
                                    {/* <p>AA54321</p> */}
                                    <div>

                                        <input className='return_inp' type="text" name="" id="" />
                                    </div>
                                </div>
                            </div>
                            <div className='feild1'>
                                {/* <img src={pin} alt=""/> */}
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                                <span>Sandals Hotel, Montego Bay</span>
                            </div>
                        </div>
                        <div>

                            <img className='building' src={building} alt="" />
                            <div className='dot_div'>

                            </div>
                            <img className='plane' src={plane} alt="" />
                        </div>


                    </div>
                </div>
                : null
            }
            {!hide ?
                <div className='add_note_btn_div'>
                    <button onClick={handleArea}>Add Note</button>

                </div>
                :
                <>
                    <div className='need_something_div'>
                        <textarea name="" className='need_something_textarea' placeholder='Need to tell us something?' id="" rows="5"></textarea>

                    </div>
                    <div className='add_note_btn_div'>
                        <button onClick={handleArea}>Cancel Note</button>
                    </div>
                </>
            }
        </div>
    )
}

export default ReturnTip