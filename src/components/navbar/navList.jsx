// import React from 'react'
import { Link } from 'react-router-dom'


// export  const NavList = ({navOpen}) => {
//     if(!navOpen){
//         return null
//     }
//     return(
//         <div>
//             <div className='navlist_div'>
//                 <ul className='navlist_ul'>
//                     <li>
//                         <Link to='/' className='navlist_link'>Home</Link>
//                     </li>
//                     <li>
//                     <Link className='navlist_link' to='/location'>Book Taxi</Link>

//                     </li>
//                     <li>
//                     <Link className='navlist_link' to='/travel-tips'>Travel Tips</Link>

//                     </li>
//                     <li>
//                     <Link className='navlist_link' to='/faq'>FAQ</Link>

//                     </li>
//                     <li>
//                     <Link to='/contact' className='navlist_link'>Contact Us</Link>

//                     </li>
//                     <li>
//                     <Link className='navlist_link' to='/csAndTs'>T's & C's</Link>

//                     </li>
//                 </ul>
//             </div>
//         </div>
//     )
// }



import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBars } from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

export default function TemporaryDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list)}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >

            <ul className='navlist_ul'>
                <li>
                    <Link to='/' className='navlist_link'>Home</Link>
                </li>
                <li>
                    <Link className='navlist_link' to='/location'>Book Taxi</Link>

                </li>
                <li>
                    <Link className='navlist_link' to='/travel-tips'>Travel Tips</Link>

                </li>
                <li>
                    <Link className='navlist_link' to='/faq'>FAQ</Link>

                </li>
                <li>
                    <Link to='/contact' className='navlist_link'>Contact Us</Link>

                </li>
                <li>
                    <Link className='navlist_link' to='/csAndTs'>T's & C's</Link>

                </li>
            </ul>

        </div>
    );

    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
                    <FontAwesomeIcon className='bar' onClick={toggleDrawer(anchor, true)}icon={faBars} />
                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}