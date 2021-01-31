import React from 'react'
// import TravelTipsCard from '../travelTipsComponent/card1/travelTips'
import Navbar from '../components/navbar/navbar'
import Main from '../travelTipsComponent/main'



export  const TravelTips = () => {
    return(
       <div>
           <Navbar />
           {/* <TravelTipsCard /> */}
           <Main />
       </div>
    )
}