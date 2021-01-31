// import React from 'react'
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faCompass} from '@fortawesome/free-regular-svg-icons'
// import './style.css'
// import {Location_state} from '../../globalState/locationData'

// const LocationList = ({loc}) => {

//     let filter = Location_state.location.filter((val)=>{
//         return val.city.toLowerCase().startsWith(loc)
//     })
//     // console.log(filter)
//     // if(!loc){
//     //     return <div></div>
//     // }
    
//     return(
//         <div style={{marginTop:'20px'}}>

//         <div className='list_container'>
//             {filter.map((val)=>{
//                 return(
//                     <div className='location_list_div' key={val.id}>
//                     <div className='location_name'>
//                       <p className='location_para'>{val.city}</p>
//                       <p className='location_para2'>{val.desc}</p>
//                     </div>
//                     <div>
//                       <FontAwesomeIcon className='compas' icon={faCompass} />
//                     </div>
    
//                 </div>
//                 )
//             })
            
//         }
           
//         </div>
//             </div>
//     )
// }

// export default LocationList