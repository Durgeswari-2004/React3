import React from 'react'
import "../Components/about.css"
import pic from "../images/coffee.jpeg"
import pic2 from '../images/beans.jpeg'

import pic3 from '../images/coffee1.jpeg'
export default function About() {
  return (
   <section id='about'>
    <div className='aboutdiv'>
    <div className='about-div'>
       <div className='top'>
       <h1>About VD's cafe</h1>
        <i>"Coffee is a beverage prepared from roasted coffee beans. Darkly colored, bitter, and slightly acidic, coffee has a stimulating effect on humans, primarily due to its caffeine content. It has the highest sales in the world market for hot drinks".</i>
       </div>
       <div className='top1'>
        <img src={pic} alt=''/>
       <h1>The Best Aroma</h1>
        <i>"The beans are roasted and then ground into fine particles that are typically steeped in hot water before being filtered out, producing a cup of coffee".</i>
       </div>
       
    </div>
   <div className='top2'>
    <img src={pic3} alt=""/>
    <div>
    <h1>Visit and Taste</h1>
    <p>and Gallery offers a unique coffee house environment unlike any other in Macon. We are not only a place to drop in and get your morning cup of coffee</p>
   
    </div>
    </div> 
   </div>
   </section>
  )
}
