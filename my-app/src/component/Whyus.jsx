import React from 'react'
import Img9 from '../assets/company-registration.png';
import Img10 from '../assets/talentedtroop.png';

import Img11 from '../assets/valuesculture.png';
function Whyus(){
    return(
<div className='whyus-parent'>
    <div className="Whyus-left">
        <h2 className='whyUsh2'>Why Us.</h2>
        {/* <div className='whyus-p'></div> */}
        <p>Empowering Success Propelling Businesses to <span className='whyus-span'>$11.5M</span>  in <span className='whyus-span'>12 Months</span>, Liberated from Revenue Share Limits.</p>
    <h6>Unleashing Growth through Our Distinctive Approach</h6>
    <div className='list-div'>
        <div className="left-list-div">
            <ul>
                <li className='list-style'><i aria-hidden="true" class="fas fa-chart-pie"></i>Industry Innovators</li>
                <li className='list-style'><i aria-hidden="true" class="fas fa-chart-pie"></i>Strategic Leaders</li>
                <li className='list-style'><i aria-hidden="true" class="fas fa-chart-pie"></i>Trailblazing Minds</li>
            </ul>

            <button type='button' className='free-concel'>For Free Conceltation</button>
        </div>
        <div className="right-list-div">
        <ul>
                <li className='list-style'><i aria-hidden="true" class="fas fa-chart-pie"></i>Expert Collaborators</li>
                <li className='list-style'><i aria-hidden="true" class="fas fa-chart-pie"></i>Client-Centric Ethos</li>
                <li className='list-style'><i aria-hidden="true" class="fas fa-chart-pie"></i>Excellence in Results</li>
            </ul>
            <button type='button' className='success-stories'>Our Success Stories</button>
        </div>
    </div>
    <div className='percentage-main'>
        <div className="percentage"><p><span >75+</span><br />
        Mil Generated</p></div>
        <div className="percentage"><p><span >169%</span><br />
        PPC Sales</p>
        </div>
        <div className="percentage"><p><span>72%</span><br />
Profit Acquired</p>
        </div>
        <div className="percentage"><p><span>5%</span><br />
        Average TACOS</p>
        </div>
    </div>
    </div>
    <div className="Whyus-mid">
        <div className='company-div'>
            <img src={Img9} alt="company registeration image" /><br />
            <h1>Company Story</h1>
            <p>
            Our journey is a tapestry woven with client triumphs, innovation, and unwavering commitment to digital excellence.
            </p>
        </div>
    </div>
    <div className="Whyus-right">
        <div>
            <div className='Talentedtroop'>
           <div className='talentedtroop-img'> <img src={Img10} alt="" /></div>
                <div><h2>Talented Troop</h2>
                <p>Meet our dynamic team of digital aviators, united by expertise and fueled by a shared passion for crafting exceptional marketing strategies.</p></div>
            </div>
            <div className='ValuesCulture'>
               <div className='valuesCulture-img'> <img src={Img11} alt="" /></div>
                <div><h2>Values & Culture</h2>
                <p>Integrity and innovation form the bedrock of our culture, guiding us to craft digital strategies that redefine success.</p></div>
            </div>
        </div>
    </div>
</div>
  
        )};
export default Whyus;