import React from 'react'
import {FaqList} from '../FAQcomponents/FAQlist'
import Navbar from '../components/navbar/navbar'




export  const FAQ = () => {
    return(
       <div>
           <Navbar />
           <FaqList />
       </div>
    )
}