import React from 'react';
import webdevImg from '../assets/seoExper.webp';
 function SeoDevel(){
    return(
       <>
       <div className='bookAmeeting'>
        <div className='bookAmeeting-content'>
            <span>- Our Feature -</span>
            <h1>We Help Bussiness To Grow <br />Faster And Bigger</h1>
            <button className='bookameet-btn'>Book A Meeting <i class="fa-solid fa-right-to-bracket"></i></button>
        </div>
       </div>
<div className='webDev-parent'>



<div className='webDev-left'>
<span className='image-header-span' >
- Crafting Digital Experiences For Success -
</span>
<h2>
Web <br /> Development & <br /> SEO Expertise.
</h2>
<div>
    <img src={webdevImg} alt="" id='seoExper-img'/>
    </div>

</div>

<div className='webDev-right'>
    <div className='icon-parent'>
        <div className='icon-box-content'>
            <i class="fa-regular fa-file" id='icon-box-icons'></i>
        <h2>Search Engine <br />Optimization (SEO)</h2>
        <span>Boost visibility with strategic SEO techniques.</span>
        </div>

        <div className='icon-box-content'>
        <i class="fa-regular fa-user" id='icon-box-icons'></i>
            
        <h2>User Experience (UX)<br /> Design</h2>
        <span>
Enhance user engagement through intuitive designs</span>
        </div>
      
    </div>

    <div className='icon-parent'>
        <div className='icon-box-content'>
            <i class="fa-solid fa-display" id='icon-box-icons'></i>
        <h2>Website Design &<br />Development</h2>
        <span>
Shape captivating websites for your brand's identity.</span>
        </div>

        <div className='icon-box-content'>
        <i class="fa-solid fa-cart-shopping" id='icon-box-icons'></i>
        
            
        <h2> E-Commerce <br />
Solutions</h2>
        <span>
       Sales with tailor-made e-commerce strategies.
       </span>
        </div>
      
    </div>

    <div className='icon-parent'>
        <div className='icon-box-content'>
        <i class="fa-solid fa-qrcode" id='icon-box-icons'></i>
            
        <h2>Technical SEO</h2>
        <span>
        Fine-tune with technical SEO precision.</span>
        </div>

        <div className='icon-box-content'>
        
        <i class="fa-solid fa-qrcode" id='icon-box-icons'></i>
        
            
        <h2> ON / OFF Page SEO</h2>
        <span>
        Fine-tune with technical SEO precision.
       </span>
        </div>
      
    </div>
</div>




</div>
</>
    )
};
export default SeoDevel;