import React from 'react';
function Author (){
    return(
        <>
       

       <div className="authorImg">
<div className="image-overlay">
  <div className="Parent-author-main-div">
<div className='Author-left-div'>
    <p>- Soar Beyond Limits With PPCFly Agency-</p>
    <h2>Asia's No.1  Digital <br /> Marketing  Agency.</h2>
    <span>Elevate Your Online Presence with PPCFly's <br /> Proven Digital Marketing Solutions. Drive <br />Traffic. Drive Sales. Drive Growth. </span>
    <button >For Free Consultation- To Fill The Form <i class="fa-solid fa-right-long" ></i></button>
    </div>

    <div className='right-main-div'>
        <h2>Book A Free Consultation</h2>
        <span>Guaranteed Response Within One Hour!</span>
    <form>
    <div className="mb-3">
    {/* <label for="exampleInputName1" className="form-label">Name</label> */}
    <input type="Text" className="form-control" id="exampleInputName1" placeholder='Name'/>
  </div>
  <div className="mb-3">
    {/* <label for="exampleInputEmail1" className="form-label">Email address</label> */}
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email '/>
    
  </div>
  <div className="mb-3">
    {/* <label for="exampleInputNum1" className="form-label">Phone</label> */}
    <input type="Num" className="form-control" id="exampleInputNum1" placeholder='Phone'/>
  </div>
  <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" id='dropDown' type="button" data-bs-toggle="dropdown" aria-expanded="false">
    What Service are you looking for?
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Social Media Marketing</a></li>
    <li><a class="dropdown-item" href="#">Search Engine Marketing</a></li>
    <li><a class="dropdown-item" href="#">Web Development</a></li>
    <li><a class="dropdown-item" href="#">Search Engine Optimization</a></li>
    <li><a class="dropdown-item" href="#">Product Shoot & Branding</a></li>
    <li><a class="dropdown-item" href="#">Video Production & Marketing</a></li>
    
  </ul>
</div>
<div class="input-group">
  <input type="text" class="form-control" id= 'yourMsg'aria-label="Text input with segmented dropdown button" placeholder='Your Message'/>
  
  
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  </div>
  </div>
</div>
        </>
)};
export default Author;