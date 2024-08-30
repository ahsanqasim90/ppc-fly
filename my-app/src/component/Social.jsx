// import React from "react";
//  import Img2 from "../assets/meta.webp";
//  import Img3 from "../assets/youtube.png";
//  import Img4 from "../assets/tiktok.jpg";
//  import Img5 from "../assets/snapchat.png";
//  import Img6 from "../assets/shopify-partner-2.webp";
//  import Img7 from "../assets/google-partner.jpg";

// function Social(){
// return (
// <div className="Advertising-parent">
//     <div className="slidesFade" ><img src={Img2} alt="" className="icon"/></div>
//     <div className="slidesFade" ><img src={Img3} alt="" className="icon"/></div>
//     <div className="slidesFade" ><img src={Img4} alt="" className="icon"/></div>
//     <div className="slidesFade" ><img src={Img5} alt="" className="icon"/></div>
//     <div className="slidesFade" ><img src={Img6} alt="" className="icon"/></div>
//     <div className="slidesFade" ><img src={Img7} alt="" className="icon"/></div>
//  </div>
// )};
// export default Social;

import React, { useEffect, useState } from "react";
import Img2 from "../assets/meta.webp";
import Img3 from "../assets/youtube.png";
import Img4 from "../assets/tiktok.jpg";
import Img5 from "../assets/snapchat.png";
import Img6 from "../assets/shopify-partner-2.webp";
import Img7 from "../assets/google-partner.jpg";

function Social() {
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    // Shuffle the icons when the component mounts
    shuffleIcons();
    // Start a timer to shuffle the icons every 2 seconds
    const interval = setInterval(shuffleIcons, 2000);
    return () => clearInterval(interval); // Cleanup the timer when the component unmounts
  }, []);

  // Function to shuffle the icons
  const shuffleIcons = () => {
    const shuffledIcons = [Img2, Img3, Img4, Img5, Img6, Img7].sort(() => Math.random() - 0.5);
    setIcons(shuffledIcons);
  };

  return (
    <div className="Advertising-parent">
      {icons.map((icon, index) => (
        <div key={index} className="slidesFade">
          <img src={icon} alt={`Icon ${index}`} className="icon" />
        </div>
      ))}
    </div>
  );
}

export default Social;
