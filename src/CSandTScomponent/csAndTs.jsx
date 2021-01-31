import React,{useEffect} from 'react'
import './style.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


const CsAndTs =()=> {
    useEffect(()=>{
        AOS.init({
            duration: 1000,
            once: true,
        })

    },[])
    return(
        <div>
            <div className='main_CsAndTs_div'>
                <div className='term_div'>
                    <h2 className='term_head'>TERMS AND CONDITIONS</h2>
                    <p className='term_para' data-aos="zoom-in-up" data-aos-easing="ease-in-out">Please read our terms and conditions as they will govern any service contract
                         entered into with Jamrock Taxi Ltd. We will accept your orders & make a 
                         legally enforceable agreement without further reference to you, you must 
                         read these terms & conditions to make sure that you are happy with them. 
                         For more information please contact us at : Info@amrocktaxi.com.
                         </p>
                </div>
                <div className='Responsibilities_div'>
                    <h3 className='Responsibilities_head'>Customer Responsibilities</h3>
                    <p className='Responsibilities_para1' data-aos="zoom-in" data-aos-easing="ease-in-out">
                    You must co-operate with us in all matters relating to the Services, 
                    provide us and our authorised employees and representatives with access
                     to any private pick-up or drop-off premises or location you have supplied us.
                    </p>
                    <p className='Responsibilities_para2' data-aos="fade-up" data-aos-easing="ease-in-out">
                    Failure to comply with the above is a Customer default which prevents 
                    us from delivering the contracted services which entitle us to suspend
                     delivery of the Services until you remedy it or if you fail to remedy 
                     it following our request, we can terminate the Contract with immediate effect.
                    </p>
                    <p className='Responsibilities_para3' data-aos="zoom-in" data-aos-easing="ease-in-out">
                    A Customer is not entitled to a refund if they fail to provide access 
                    to private properties which prevents us from delivering the contracted Services.
                    </p>
                    <p className='Responsibilities_para4' data-aos="fade-up" data-aos-easing="ease-in-out">
                    It is the customers responsibility to make sure that the pickup times
                     are suitable to get to their final destinations in a timely manner.
                      Jamrock Taxi will not be responsible for transfer delays and any associated cost.
                    </p>
                </div>

                <div className='Service_div'>
                    <h3 className='Service_head'>Service Delivery</h3>
                    <p className='Service_para' data-aos="fade=up" data-aos-easing="ease-in-out">
                    We will deliver the services, including any goods to the client
                     in the booking details (Lead Passenger). We will deliver our service
                      per the details of the booking agreement. The customer can refuse to
                       accept the alternative service and a full refund of the amount paid
                        and no more will be offered to the customer.
                    </p>
                </div>
                <div className='refunds_div'>
                    <h3 className='refunds_head'>Refunds and Right To Cancel</h3>
                    <p className='refunds_para1' data-aos="zoom-in-up" data-aos-easing="ease-in-out">
                    Subject as stated in these Terms and Conditions; you can cancel the
                     booking (Contract) 24 hours before your service is due to be delayed
                      for a full refund. Refunds may not be given if you cancel with less
                       than 24hrs before you service.
                    </p>
                    <p className='refunds_para2' data-aos="zoom-in" data-aos-easing="ease-in-out">
                    Cancellation request and evident thereof can be made via phone call or email
                    </p>
                </div>
                <div className='privacy_div'>
                    <h2 className='privacy_head'>PRIVACY POLICY</h2>
                    <p className='privacy_para1' data-aos="zoom-in-up" data-aos-easing="ease-in-out">
                    Any information we collect will be used to in the strictest of manner
                     to manage your booking and communicate with you regarding your booking.
                      We will collect the least amount of personal information required to
                       manage your booking and communicate with you.
                    </p>
                    <p className='privacy_para2' data-aos="zoom-in" data-aos-easing="ease-in-out">Your personal information will be used to business preposes only or 
                        for complying with the authorities.</p>
                </div>

            </div>
            
        </div>
    )
}
export default CsAndTs