import React from 'react'
import CheckoutMoreInfo from '../checkout/checktoutMoreinfo/checkoutmoreinfo'
import Navbar4 from '../checkout/navbar/checkoutnavbar'
import Ticket from '../checkout/ticket/ticket'
import ReturnTip from '../checkout/returntip/returntip'
import PassengerInfo from '../checkout/passengerInfo/passengerInfo'
import Payment from '../checkout/payment/payment'

export const CheckOutScreen = ()=> {
    return(
        <div>
            <Navbar4 />
            <CheckoutMoreInfo />
            <Ticket />
            <ReturnTip />
            <PassengerInfo />
            <Payment />
        </div>
    )
}