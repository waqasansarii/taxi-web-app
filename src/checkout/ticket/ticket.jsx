import React from 'react'
import plane from '../../images/plane.png'
import pin from '../../images/pin (5).png'
import building from '../../images/building.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faUser, faShoppingBag } from '@fortawesome/free-solid-svg-icons'

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './style.css'


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


const Ticket = () => {



    const classes = useStyles();
    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
    });

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };

    return (
        <div>
            <div className='main_ticket_div'>
                <div>
                    <div className='feild1'>
                        <img src={pin} alt="" />
                        <span>Sangster International Airport, Montego Bay</span>
                    </div>
                    <div className='pickandflight_div'>
                        <div className='pick_div'>
                            <p>Pickup Date & Time</p>
                            <input type="datetime" placeholder='20-01-21 16:30' className='return_inp' name="" id="" />

                            {/* <span className='ticket_date'>20-01-21</span>
                            <span className='ticket_time'>16:30</span> */}
                        </div>
                        <div className='flight_div'>
                            <span className='flight_span'>Flight Number </span><span className='flight_span2'>(If Known)</span>
                            {/* <p>AA54321</p> */}
                            <div>

                            <input type="datetime" placeholder='AA54321' className='return_inp' name="" id="" />
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

                    <img className='plane' src={plane} alt="" />
                    <div className='dot_div'>

                    </div>
                    <img className='building' src={building} alt="" />
                </div>


            </div>
            <div className='bag_and_user_div'>

                <div className='num_of_users'>
                    <FontAwesomeIcon className='num_of_User_icon' icon={faUser} />
                    <select name="" id="" className='num_of_User_option'>
                        <option value="" selected>Number Of Bags</option>
                        <option value="">1</option>
                        <option value="">1</option>
                    </select>
                </div>
                <div className='num_of_bag'>
                    <FontAwesomeIcon className='num_of_bag_icon' icon={faShoppingBag} />
                    <select name="" id="" className='num_of_bag_option'>
                        <option value="">Number Of Bags</option>
                        <option value="">1</option>
                        <option value="">1</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Ticket