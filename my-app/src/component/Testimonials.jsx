import React from 'react';
import InnerServicesmin from '../assets/Inner-Services-min.png';
import founder1 from '../assets/founder1.jpeg'
import founder2 from '../assets/founder2.jpeg'
import founder3 from '../assets/founder3.jpeg'
import founder4 from '../assets/founder4.jpeg'
function Testimonials (){return(
<div className='TestimonialParent'>
    <div className='testimonial-left'>
<img src={InnerServicesmin} alt="" id='innerServiceimg'/>
    </div>
    <div className='testimonial-right'>
        <div className='testimonial-right-div-one'><span>- TESTIMONIALS -</span>
        <h2>What Our Customers Say About Us</h2>
        </div>

        <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
   
    <div class="carousel-item active">
    <div class="carousel-item-one"><ul className='fiveStar-testi'>
            <li><i class="fa-solid fa-star"></i></li>
            <li><i class="fa-solid fa-star"></i></li>
            <li><i class="fa-solid fa-star"></i></li>
            <li><i class="fa-solid fa-star"></i></li>
            <li><i class="fa-solid fa-star"></i></li>
        </ul>
      <p>From development to design and marketing, their team demonstrated exceptional talent, professionalism, and dedication. They took the time to understand our goals and delivered a solution that exceeded our expectations.</p>
      <div className='founder1-details' >
        <div>
            <img src={founder1} alt="" id='founderimg'/></div>
        <div className='founder-details'>
            <p> <span>Jennifer Davis</span> <br />
            Founder of DEF Enterprise</p>
        </div>
      </div>
      </div>
    </div>
    <div class="carousel-item">
    <div class="carousel-item-one"><ul className='fiveStar-testi'>
            <li><i class="fa-solid fa-star"></i></li>
            <li><i class="fa-solid fa-star"></i></li>
            <li><i class="fa-solid fa-star"></i></li>
            <li><i class="fa-solid fa-star"></i></li>
            <li><i class="fa-solid fa-star"></i></li>
        </ul>
      <p>Working with PPCFLY has been an absolute pleasure. Their skilled team consistently provided innovative solutions and creative designs that perfectly captured our brand vision.</p>
      <div className='founder1-details' >
        <div>
            <img src={founder2} alt="" id='founderimg'/></div>
        <div className='founder-details'>
            <p> <span>Mark Thompson</span> <br />
            CEO of Hawk Loix</p>
        </div>
      </div>
      </div>
    </div>

    <div class="carousel-item">
    <div class="carousel-item-one"><ul className='fiveStar-testi'>
            <li><i class="fa-solid fa-star"></i></li>
            <li><i class="fa-solid fa-star"></i></li>
            <li><i class="fa-solid fa-star"></i></li>
            <li><i class="fa-solid fa-star"></i></li>
            <li><i class="fa-solid fa-star"></i></li>
        </ul>
      <p>Choosing PPCFLY was the best decision we made for our business. Their team's expertise in development, design, writing, and marketing is unmatched. They not only delivered a top-notch website but also provided valuable insights and strategies to boost our online presence.</p>
      <div className='founder1-details' >
        <div>
            <img src={founder3} alt="" id='founderimg'/></div>
        <div className='founder-details'>
        <p> <span>Michael Rodriguez</span> <br />
            E-commerce Manager at GHI Company</p>
        </div>
      </div>
      </div>
    </div>
   
    <div class="carousel-item">
    <div class="carousel-item-one"><ul className='fiveStar-testi'>
            <li><i class="fa-solid fa-star"></i></li>
            <li><i class="fa-solid fa-star"></i></li>
            <li><i class="fa-solid fa-star"></i></li>
            <li><i class="fa-solid fa-star"></i></li>
            <li><i class="fa-solid fa-star"></i></li>
        </ul>
        <p>Working with PPCFLY was a game-changer for our business. Their talented team of professionals brought our vision to life with their exceptional skills and innovative solutions.</p>
      <div className='founder1-details' >
        <div>
            <img src={founder4} alt="" id='founderimg'/></div>
        <div className='founder-details'>
        <p> <span>Emily Thompson</span> <br />
            COO of JKL Solutions</p>
        </div>
      </div>
      </div>
    </div>
    
    
  </div>
  {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button> */}
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>

</div>
    </div>
</div>
)}
export default Testimonials;