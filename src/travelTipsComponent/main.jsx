import React from 'react'
import TravelTipsCard2 from './card2/card2'
import TravelTipsCard from './card1/travelTips'
import TravelTipsCard3 from './card3/card3'
import TravelTipsCard4 from './card4/card4'

const Main = () => {
    return(
        <div>
                <h2 style={{textAlign:'center',marginTop:'60px'}}>Jamaica Travel Tips</h2>

        <div style={{display:'flex' ,justifyContent:'center',flexWrap:'wrap'}}>
            <TravelTipsCard />
            <TravelTipsCard2 />
            <TravelTipsCard3 />
            <TravelTipsCard4 />
        </div>
        </div>
    )
}
export default Main 