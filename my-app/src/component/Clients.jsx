import React from 'react'
import Client1 from '../assets/client1.webp'
import Client2 from '../assets/client2.webp'
  function Client(){
    return(
<div className='client-main-div'>
    <div><h2 className='client-heading'>Our Clients Get Results.</h2></div>

    <div className='client-card'>
   
   
    {/* <div class="card" >
  <img src={Client1} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h2 class="card-title">“The Results Speak For Themselves”</h2>
    <div className='percentages-of-clients'>
        <div> 
            <span className='percentages-of-clients-span'>+664%</span><br />
Organic Traffic
</div>
        <div><span className='percentages-of-clients-span'>+360%</span><br />
        Online Leads</div>
    </div>
    <p class="card-text">Thrive used SEO & PPC to increase the overall traffic to the new Farah website by +664% and along with the new CRO focused Website were able to increase online leads by over +360%</p>
    <h6>Read Farah's Case Study »</h6>
  
  </div>
</div> */}
<div class="card" >
  <img src={Client1} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h2 class="card-title">“The Results Speak For Themselves”</h2>
    <div className='percentages-of-clients'>
        <div> 
            <span className='percentages-of-clients-span'>+664%</span><br />
Organic Traffic
</div>
<hr />
        <div className='left-div-client'><span className='percentages-of-clients-span'>+360%</span><br />
        Online Leads</div>
    </div>
    <p class="card-text">Thrive used SEO & PPC to increase the overall traffic to the new Farah website by +664% and along with the new CRO focused Website were able to increase online leads by over +360%</p>
    <h6>Read Farah's Case Study »</h6>
  
  </div>
</div>

<div class="card" >
  <img src={Client2} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h2 class="card-title">“Thrive Goes Above And Beyond”</h2>
    <div className='percentages-of-clients'>
        <div> 
            <span  className='percentages-of-clients-span'>+800%</span><br />
            Conversion Rate
</div>
<hr />
        <div className='left-div-client'><span  className='percentages-of-clients-span'>+640%</span><br />
        Online Leads</div>
    </div>
    <p class="card-text">Thrive's digital marketing experts audited Nationwide Construction's current website and identified areas of opportunity. Our web design team developed a modern WordPress website boasting…</p>
    <h6>Read Nationwide Constructions' Case Study »</h6>
  
  </div>
</div>
    </div>
</div>
  )};
  export default Client;