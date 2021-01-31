import React, { useState,useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faWhatsapp } from '@fortawesome/fontawesome-free-brands'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos';
import 'aos/dist/aos.css';
// import './style.css'
// import tip1 from '../../images/tip1.png'
import tip2 from '../../images/tip2.png'
import logo from '../../images/cardlogo.png'

const TravelTipsCard4 = () => {
    useEffect(()=>{
        AOS.init({
            duration: 1000
        })

    },[])

    let [show, setShow] = useState(false)

    const handleShow2 = () => {
        setShow(!show)
    }

    return (
        <div>
            <div className='travelTips_cards_div'>

                <div className='travel_card1' data-aos="zoom-in-up" data-aos-easing="ease-in-out">
                    <img className='card_img' src={tip2} alt="" />
                    <p className='travel_para1'>Money, Tips</p>
                    <p className='travel_para2'>Top 10 hotels in Jamaica for tourists</p>
                    <div className='travel_ul'>
                        <div className='name_img_div'>
                            <img className='travel_logo' src={logo} alt="" />
                            <p className='main_name'>JamRockTaxi</p>
                        </div>
                        <p className='date_para'>27 Dec</p>
                    </div>
                    <p className='travel_para3'>Near Ocho Rios town, the waterfalls of Dunn’s River are one of the most famous
                    attractions in the country. Climb the limestone on your own or with a guide.
                    Due to the strong current, some caution is required. Don’t forget to look
                    around you, because the views with the rainforest by your side are fantastic!
                     </p>
                    {!show ?
                        <p onClick={handleShow2} className='continue_btn'>Continue Reading</p>



                        // <p onClick={handleShow} className='continue_btn'>Continue Reading</p>
                        :


                        <div>
                            <p className='read_para1'>
                                Dunn’s River Falls is an absolute must if you go to Jamaica .
                                You can climb this waterfall, making it a unique excursion.
                                The waterfall is located in the (temperate) rain forest of Jamaica.
                                A wonderful green environment where you can go wild in the water.
                                In the first place to be busy, but also to cool down and enjoy.
                                Dunn’s River Waterfall is the most famous waterfall in Jamaica.
                                It is a 180 meter long and 55 meter high waterfall whose water
                                flows directly from the river into the sea. Very special to see.
                          </p>
                            <p className='read_para2'>
                                Climbing Dunn’s River Falls
                          </p>
                            <p className='read_para3'>
                                Dunn’s waterfall runs cascading down so you can find small lagoons everywhere.
                                It is one of the most beautiful waterfalls in the world that you can climb.
                                Many waterfalls are too dangerous for this, but not this one. You can climb
                                up (and down) relatively easily here, but you can also just swim in the
                                various pools.
                          </p>
                            <p className='read_para4'>
                                You can climb high independently, as well as with a guide.
                                There are various boarding places. The most beautiful route
                                is from the beach. Then you can climb and clamber up on the way.
                                And then you will automatically see the larger swimming pools.
                          </p>
                            <p className='read_para5'>
                                On the way, see how the water has buffed the rocks. Most are strikingly
                                round and also quite smooth. So pay attention. Especially in places
                                where algae grow you can quickly fall. These are the dark places and you
                                better avoid them. You can also wear special water shoes, but it is relatively
                                easy with bare feet. as long as you hold onto the road well. And you move
                                on calmly.
                          </p>
                            <p className='tag_para'>Tags</p>
                            <div className='tags_div'>
                                <span className='tag1'>Island</span>
                                <span className='tag2'>Jamaica</span>
                            </div> <hr className='tag_hr' />
                            <div className='travel_social_icon'>
                                <ul className='social_icon_ul'>
                                    <li>
                                        <FontAwesomeIcon className='travel_icon' icon={faFacebook} />
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className='travel_icon' icon={faTwitter} />

                                    </li>
                                    <li>
                                        <FontAwesomeIcon className='travel_icon' icon={faWhatsapp} />

                                    </li>
                                    <li>
                                        <FontAwesomeIcon className='travel_icon' icon={faEnvelope} />

                                    </li>
                                </ul>
                                <ul className='olderpost_ul'>
                                    <li>Older Post</li>
                                    <li>
                                        <FontAwesomeIcon className='travel_icon2' icon={faAngleRight} />

                                    </li>
                                </ul>

                            </div>
                            <p onClick={handleShow2} className='continue_btn'>Hide</p>
                        </div>
                    }

                </div>
            </div>



        </div >
    )
}

export default TravelTipsCard4