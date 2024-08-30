import React from 'react';
import startiImg from '../assets/stratiRight.gif';
 function Stratigic(){
    return(
    
   <div className='stratigic-parent'>
    <div className='strati-left'>
    <span className='image-header-span'>- Community Engagement -</span>
   <h2 className='strati-left-h2'>Strategic Marketing <br /> & Advertising <br /> Solutions</h2>

   <p>
   Elevate your brand's reach and impact through our comprehensive range of marketing and advertising solutions. From harnessing the power of social media giants like Facebook, Instagram, TikTok, and Snapchat to captivating audiences on emerging platforms like SnakVideo, we ensure your message resonates. Our expertise extends to professional networking with LinkedIn and Twitter ads, guiding your brand toward digital distinction.
   </p>

   <div className='strati-ul-parent'> 

    <div className='strati-ul-left'>
        <ul>
        <li><i class="fa-solid fa-users" id='strati-icons'></i>
            <div><h2 className='strati-ul-left-h2'  >Social Media Marketing</h2>
<span className='strati-ul-span'> Dominate with Facebook, Instagram, TikTok, and more.</span></div>
</li>
        <li>
        <i class="fa-solid fa-hand" id='strati-icons'></i>
        <div><h2 className='strati-ul-left-h2'>Emerging Platforms</h2>
<span className='strati-ul-span'>Catch eyes on SnakVideo and beyond</span></div></li>
            </ul></div>
    
    
    
    <div className='strati-ul-right'> 
        <ul>
            <li><i class="fa-solid fa-bag-shopping" id='strati-icons'></i><div>
                <h2 className='strati-ul-left-h2'>Professional Networking</h2>
            <span className='strati-ul-span'>Forge connections through LinkedIn and Twitter. </span> </div></li>

            <li><i class="fa-solid fa-users-gear" id='strati-icons'></i>
                <div><h2 className='strati-ul-left-h2'>Audience Engagement</h2>
            <span className='strati-ul-span'>
Amplify engagement with captivating Snapchat Ads. </span> </div></li>
        </ul>
    </div>

   
   
   </div>
   <button className='stratic-btn'>Book A Meeting</button>
   </div>








<div className='strati-right'>
    <img src={startiImg} alt=""  id='strati-img' />

</div>




   </div>

 )};

 export default Stratigic;