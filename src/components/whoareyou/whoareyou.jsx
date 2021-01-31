import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './style.css'



const WhoAreWe = () => {
    
    useEffect(()=>{
        AOS.init({
            duration: 1000
        })

    },[])

    return (
        <div className='whoareyou_container'>
            <div className='whoareyou_main_div'>
                <div className='whoareyou_div'>

                    <h1 className='whoareWe_head' data-aos="fade-up">Who Are We?</h1>
                    <p className='whoareWe_para' data-aos="zoom-in-up" data-aos-easing="ease-in-out">
                        Who Are We? We are the best taxi and airport transfer service company in Jamaica.
                        We measure our success by the quality of our service and our client’s satisfaction.
                        We are a friendly and professional team, determined to give our clients the best
                        taxi service experience.
                </p>

                </div>

                <div className='whatwedo_div'>

                    <h1 className='whoareWe_head2' data-aos="fade-up">What We Do?</h1>
                    {/* <div className='para_div'> */}

                        <p className='whoareWe_para2' data-aos="zoom-in-up" data-aos-easing="ease-in-out">
                            We provide 1st class private and executive, door to door taxi and airport transfer
                            services. Providing taxi service to all airports, hotels and addresses in Jamaica
                            including: Montego Bay, Ocho Rios, Runway Bay, Negril, Falmouth & Kingston.
                        </p>
                    {/* </div> */}

                </div>
                <div className='whychooseus_div'>

                    <h1 className='whychooseus_head' data-aos="fade-up">Why Choose Us?</h1>
                    <p className='whychooseus_para' data-aos="zoom-in-up" data-aos-easing="ease-in">
                    Choose us because we pride ourselves in giving you the best quality service at the best
                     prices. We offer a safe, stress free and comfortable start to your Jamaica holiday.
                      You can expect a 1st service every time. Your safety and comfort is our top priority.
                </p>

                </div>
            </div>
        </div>
    )
}


export default WhoAreWe