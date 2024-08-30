import React from 'react'
function Map(){return(
<div className='map-embed-parent'>
    <div className='contact-info'>
        <span>- PARTNERING FOR UNPRECEDENTED GROWTH -</span><br />
        <h2>Join The Success <br /> Journey.</h2>
        <div className='phone-num'>
        <i class="fa-solid fa-phone" id='contact-info-icons'></i>
            <div >
                <p>
                    Phone: <br />
                    <span className='num'>+92 326 1333 444</span>
                </p>
            </div>
        </div>
    

    <div className='phone-num'>
    <i class="fa-regular fa-envelope" id='contact-info-icons'></i>
            <div >
                <p>
                    Our @ Email: <br />
                    <span className='num'>contact@ppcfly.com</span>
                </p>
            </div>
        </div>

        <div className='phone-num'>
        <i class="fa-solid fa-location-dot" id='contact-info-icons'></i>
            <div >
                <p>
                Our Location: <br />
                    <span className='num'>13J, Ali Zeb Main Road, Block J Gulberg III, Lahore</span>
                </p>
            </div>
        </div>
        
        </div>

        <div className='google-map'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.801991009616!2d74.35062937469557!3d31.502126048044833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919059bd5501949%3A0x928c4d38c3c426c5!2sGITMIT%20CO-WORKING%20SPACE!5e0!3m2!1sen!2s!4v1711138038743!5m2!1sen!2s" 
        width="600" height="450" 
         allowFullScreen=""
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        title='responsive google map'  class="ratio ratio-1x1"></iframe>
        </div>




    </div>

)};
export default Map;