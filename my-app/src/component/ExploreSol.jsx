import React from 'react'
import Seoimg from '../assets/1.gif';
import Smmimg from '../assets/2.gif';
import Wdimg from '../assets/3.webp';
import Searchimg from '../assets/sem.gif';
import videoimg from '../assets/d1_1.gif';
import Productimg from '../assets/branding_dribbble.gif';
function ExploreSol(){
    return (
<div className='exploreSol-main'>
    <div className='exploreSol-span'>- UNVEILING OUR ARSENAL -</div>
    <div className='exploreSol-h2'><h2 >Explore Our Solutions.</h2></div>

<div className='card-parent-div'>
    <div className='seocard-1'>
        <div><img src={Seoimg} alt=""  className='seo-img'/></div>
        <h2>Search Engine Marketing</h2>
        <div className='list-parent-sol-div'>
            <div><ul>
                <li className='list-parent-sol-div-li'><i class="fa-brands fa-tiktok"></i>TikTok Ads</li>
                <li className='list-parent-sol-div-li'><i class="fa-brands fa-twitter"></i>Twitter Ads</li>
                <li className='list-parent-sol-div-li'><i class="fa-brands fa-linkedin"></i>LinkedIn Ads</li>
                </ul>
                </div>
            <div>
                <ul>
                    <li className='list-parent-sol-div-li'><i class="fa-brands fa-youtube"></i>YouTube Ads</li>
                    <li className='list-parent-sol-div-li'><i class="fa-brands fa-google"></i>Local Ads</li>
                    <li className='list-parent-sol-div-li'><i class="fa-brands fa-google"></i>Search Ads</li>
                </ul>
            </div>
        </div>
        <button>Book Now <i class="fa-solid fa-arrow-right"></i></button>
    </div>

    <div className='smmcard-2'>
        <div><img src={Smmimg} alt=""  className='seo-img'/></div>
        <h2>Social Media <br /> Marketing</h2>
        <div className='list-parent-sol-div'>
            <div><ul>
                <li className='list-parent-smm-div-li'><i class="fa-brands fa-tiktok"></i>TikTok Ads</li>
                <li className='list-parent-smm-div-li'><i class="fa-brands fa-twitter"></i>Twitter Ads</li>
                <li className='list-parent-smm-div-li'><i class="fa-brands fa-linkedin"></i>LinkedIn Ads</li>
                </ul>
                </div>
            <div>
                <ul>
                    <li className='list-parent-smm-div-li'><i class="fa-brands fa-snapchat"></i>Snapchat Ads</li>
                    <li className='list-parent-smm-div-li'><i class="fa-brands fa-snapchat"></i>SnackVideo Ads</li>
                    <li className='list-parent-smm-div-li'><i class="fa-brands fa-facebook"></i>FB & Insta Ads</li>
                </ul>
            </div>
        </div>
        <button className='smm-button'>Book Now <i class="fa-solid fa-arrow-right"></i></button>
    </div>
    <div className='smmcard-2'>
        <div><img src={Wdimg} alt=""  className='seo-img'/></div>
        <h2>Website <br /> Development</h2>
        <div className='list-parent-wd-div'>
            <div><ul>
                <li className='list-parent-smm-div-li'><i class="fa-brands fa-tiktok"></i>Website Design & Development</li>
                <li className='list-parent-smm-div-li'><i class="fa-brands fa-twitter"></i>E-commerce Solutions</li>
                <li className='list-parent-smm-div-li'><i class="fa-brands fa-linkedin"></i>Shopify Development</li>
                </ul>
                </div>
            
        </div>
        <button className='smm-button'>Book Now <i class="fa-solid fa-arrow-right"></i></button>
    </div>
</div>

<div className='card-parent-div-2'>
<div className='smmcard-2'>
        <div><img src={Searchimg} alt=""  className='seo-img'/></div>
        <h2>Search Engine <br /> Optimization SEO</h2>
        <div className='list-parent-wd-div'>
            <div><ul>
                <li className='list-parent-smm-div-li'><i class="fa-brands fa-tiktok"></i>Keyword Research</li>
                <li className='list-parent-smm-div-li'><i class="fa-brands fa-twitter"></i>Local / Technical SEO</li>
                <li className='list-parent-smm-div-li'><i class="fa-brands fa-linkedin"></i>On / Off-page Optimization</li>
                </ul>
                </div>
            
        </div>
        <button className='smm-button'>Book Now <i class="fa-solid fa-arrow-right"></i></button>
    </div>

    <div className='smmcard-2'>
        <div><img src={videoimg} alt=""  className='seo-img'/></div>
        <h2>Video Production <br /> And Marketing</h2>
        <div className='list-parent-wd-div'>
            <div><ul>
                <li className='list-parent-smm-div-li'><i class="fa-brands fa-tiktok"></i>Creative Storytelling</li>
                <li className='list-parent-smm-div-li'><i class="fa-brands fa-twitter"></i>Professional Production</li>
                <li className='list-parent-smm-div-li'><i class="fa-brands fa-linkedin"></i>Strategic Promotion</li>
                </ul>
                </div>
            
        </div>
        <button className='smm-button'>Book Now <i class="fa-solid fa-arrow-right"></i></button>
    </div>

    <div className='smmcard-2'>
        <div><img src={Productimg} alt=""  className='seo-img'/></div>
        <h2>Product Shoot & <br /> Branding</h2>
        <div className='list-parent-wd-div'>
            <div><ul>
                <li className='list-parent-smm-div-li'><i class="fa-brands fa-tiktok"></i>Visual Excellence</li>
                <li className='list-parent-smm-div-li'><i class="fa-brands fa-twitter"></i>Brand Identity</li>
                <li className='list-parent-smm-div-li'><i class="fa-brands fa-linkedin"></i>Strategic Showcase</li>
                </ul>
                </div>
            
        </div>
        <button className='smm-button'>Book Now <i class="fa-solid fa-arrow-right"></i></button>
    </div>

</div>
    
    
</div>
    
        )};


      export default ExploreSol;