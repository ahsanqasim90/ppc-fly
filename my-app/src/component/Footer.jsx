import React from 'react'
import footerLogo from '../assets/footerlogo.png'
import pakistan from '../assets/pakistan.png'
import canada from '../assets/canada.png'
import UK from '../assets/united-kingdom.png'
import US from '../assets/united-states.png'
import Social from './Social'


function Footer(){
    return(
        
        <div className='footer-parent'>
<div className='footer-parent-two'>
<div>
    <img src={footerLogo} alt=""  id='log-img-footer'/>
</div>

<div className='logo-details'>

<span>PPCFly</span> Agency takes pride in its award-winning status. Our relentless pursuit of innovation and <span>remarkable</span> results has earned us esteemed recognition in the industry.

</div>
</div>

<hr />

<div className='country-locations-footer'>

    <div className="location"><img src={pakistan} alt="" id='countryImg'/> Pakistan <br />
    <hr />
    <div className='details'>
        <i class="fa-solid fa-phone" ></i>
            <div >
                <p>
                    Phone: <br />
                    <span >+92 326 1333 444</span>
                </p>
            </div>
        </div>
    

    <div className='details'>
    <i class="fa-regular fa-envelope" ></i>
            <div >
                <p>
                    Our @ Email: <br />
                    <span >contact@ppcfly.com</span>
                </p>
            </div>
        </div>

        <div className='details'>
        <i class="fa-solid fa-location-dot" ></i>
            <div >
                <p>
                Our Location: <br />
                    <span >13J, Ali Zeb Main Road, Block J Gulberg III, Lahore</span>
                </p>
            </div>
        </div>
    </div>




    <div className="location"><img src={canada} alt="" id='countryImg'/> Canada <br />
    

<hr />
  
    
<div className='details'>
        <i class="fa-solid fa-location-dot" ></i>
            <div >
                <p>
                Our Location: <br />
                    <span >40 Ave NE Bay 30, Calgary, AB T2E 6L1, Canada</span>
                </p>
            </div>
        </div>

    <div className='details'>
    <i class="fa-regular fa-envelope" ></i>
            <div >
                <p>
                    Our @ Email: <br />
                    <span >contact@ppcfly.com</span>
                </p>
            </div>
        </div>

       

    
</div>



    <div className="location"><img src={UK} alt="" id='countryImg'/> United-Kingdom <br />
   <hr />
    <div className='details'>
        <i class="fa-solid fa-location-dot" ></i>
            <div >
                <p>
                Our Location: <br />
                    <span >45 Gracechurch St, London EC3V 0BT, United Kingdom</span>
                </p>
            </div>
        </div>
        
    <div className='details'>
    <i class="fa-regular fa-envelope" ></i>
            <div >
                <p>
                    Our @ Email: <br />
                    <span >contact@ppcfly.com</span>
                </p>
            </div>
        </div>
</div>



    <div className="location"><img src={US} alt="" id='countryImg'/> United-States <br />
<hr />
   
    <div className='details'>
        <i class="fa-solid fa-location-dot" ></i>
            <div >
                <p>
                Our Location: <br />
                    <span > 30 N Gould Street Ste 9509 Sheridan WY 82801</span>
                </p>
            </div>
        </div>
        
    <div className='details'>
    <i class="fa-regular fa-envelope" ></i>
            <div >
                <p>
                    Our @ Email: <br />
                    <span >contact@ppcfly.com</span>
                </p>
            </div>
        </div>
</div>



    <div className="location">Services <br />

    <hr />
    <ul>
    <li id='loc-li'>Explore Solutions</li>
    <li id='loc-li'>Search Engine Marketing</li>
    <li id='loc-li'>Website Development</li>
    <li id='loc-li'>Search Engine Optimization</li>
     
    </ul>
  
    </div>
</div>

<div className='copyright-div'>
    <p>Copyright @ <span>ppcfly.com</span> 2023. All Right Reserved</p>
</div>
        </div>
    )
}
export default Footer;