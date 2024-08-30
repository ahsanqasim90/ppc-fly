import React from 'react';
import clutch from '../assets/clutch.svg';
import fiveStar from '../assets/five-star.png'
 function Clutchreview(){return(
<div className='clutchParent'>
    <h2 className='clutch-heading'>Clutch Reviews</h2>

    <div className='clutch-ratings-main'>
        <div className='clutch-ratings-main-left' >
            <h2 className='clutch-rating'>PPCFly Agency Reviews  4.9<img src={fiveStar} alt="" className='fivestarImg'/></h2>
            </div>
        <div className='clutch-ratings-main-right'>
            <span>Powered By <img src={clutch} alt="" /></span>
        </div>
    </div>

    <div  className='verfiedReviewsParent'>
        <div className='verifiedReview'>
            <h1>5.0 <img src={fiveStar} alt="" className='verifiedfivestarImg'/> </h1>
            <h2>“Working with the PPC Fly Marketing Agency has been a game-changer for my business.” </h2>
            
            <div className='verfiedSpan'>
                <p>Lead, Mazuma Mobileking with PPCFly Agency</p>
            <span><i class="fa-solid fa-check" id='check'></i>Verified Review</span>
</div>
        </div>
        <div className='verifiedReview'>
            <h1>5.0 <img src={fiveStar} alt="" className='verifiedfivestarImg'/> </h1>
            <h2>“Incredible experience! The team at PPC Fly knows how to engage an audience like no other.” </h2>
            
            <div className='verfiedSpan'>
                <p>Lead, Mazuma Mobileking with PPCFly Agency</p>
            <span><i class="fa-solid fa-check" id='check'></i>Verified Review</span>
</div>
        </div>
        <div className='verifiedReview'>
            <h1>5.0 <img src={fiveStar} alt="" className='verifiedfivestarImg'/> </h1>
            <h2>“PPC Fly brought our brand to life online. Dynamic strategies, real results.” </h2>
            
            <div className='verfiedSpan'>
                <p>Lead, Mazuma Mobileking with PPCFly Agency</p>
            <span><i class="fa-solid fa-check" id='check'></i>Verified Review</span>
</div>
        </div>
    </div>

    <div  className='verfiedReviewsParent my-4'>
        <div className='verifiedReview'>
            <h1>5.0 <img src={fiveStar} alt="" className='verifiedfivestarImg'/> </h1>
            <h2>“Revolutionary marketing. Elevate your brand with PPC Fly—no regrets.” </h2>
            
            <div className='verfiedSpan'>
                <p>Lead, Mazuma Mobileking with PPCFly Agency</p>
            <span><i class="fa-solid fa-check" id='check'></i>Verified Review</span>
</div>
        </div>
        <div className='verifiedReview'>
            <h1>5.0 <img src={fiveStar} alt="" className='verifiedfivestarImg'/> </h1>
            <h2>“Unmatched expertise. Engagement soared. Success achieved. Thank you, PPC Fly!” </h2>
            
            <div className='verfiedSpan'>
                <p>Lead, Mazuma Mobileking with PPCFly Agency</p>
            <span><i class="fa-solid fa-check" id='check'></i>Verified Review</span>
</div>
        </div>
        <div className='verifiedReview'>
            <h1>5.0 <img src={fiveStar} alt="" className='verifiedfivestarImg'/> </h1>
            <h2>“PPC Fly delivers. Transformative impact, strategic brilliance. Highly recommended!” </h2>
            
            <div className='verfiedSpan'>
                <p>Lead, Mazuma Mobileking with PPCFly Agency</p>
            <span><i class="fa-solid fa-check" id='check'></i>Verified Review</span>
</div>
        </div>
    </div>

    
</div>
 )};

 export default Clutchreview;