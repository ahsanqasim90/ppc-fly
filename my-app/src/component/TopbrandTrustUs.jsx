// import React, { useState, useEffect } from 'react';
// import Images1 from '../assets/Accenture-Color.png';
// import Images2 from '../assets/BBC-Arts-B.png';
// import Images3 from '../assets/Burberry.png';
// import Images4 from '../assets/chadwick.png';
// import Images5 from '../assets/Chanel_BrandCrowd.png';
// import Images6 from '../assets/Citibank-Color-Logo.svg';
// import Images7 from '../assets/Deutsche-Bank-Color-Logo.svg';
// import Images8 from '../assets/Disney.svg';
// import Images9 from '../assets/dmb digital.png';
// import Images10 from '../assets/Drt log.webp';
// import Images11 from '../assets/Duracell-Color-Logo.svg';
// import Images12 from '../assets/lavinstar.png';
// import Images13 from '../assets/Moet-Chandon-Logo-Design-1024x577-1.webp';
// import Images14 from '../assets/Nespresso-Color-Logo.svg';
// import Images15 from '../assets/NHL-Color-Logo-966x1024-1.png';
// import Images16 from '../assets/NYU-Color-Logo-B-915x1024-1.png';
// import Images17 from '../assets/Philips-Healthcare-Color-Logo.svg';
// import Images18 from '../assets/Playtex-Color-Logo.svg';
// import Images19 from '../assets/rivera labs.png';
// import Images20 from '../assets/Salesforce-2.svg';
// import Images21 from '../assets/Samsung-Color-Logo.svg';
// import Images22 from '../assets/Sony-Color-Logo.svg';
// import Images23 from '../assets/Vice-Color-Logo.svg';
// import Images24 from '../assets/Viacom-Color-Logo.svg';

// function TopbrandTrustUs (){




//     const [imagesDiv1, setImagesDiv1] = useState([]);
//     const [imagesDiv2, setImagesDiv2] = useState([]);

//     useEffect(() => {
//         // Function to shuffle images and distribute them between two divs
//         const shuffleImages = () => {
//             const allImages = [
//                 Images1, Images2, Images3, Images4, Images5, Images6, Images7, Images8,
//                 Images9, Images10, Images11, Images12, Images13, Images14, Images15,
//                 Images16, Images17, Images18, Images19, Images20, Images21, Images22,
//                 Images23, Images24
//             ];
//             // Shuffle the array of images
//             const shuffledImages = allImages.sort(() => Math.random() - 0.5);

//             // Distribute images between two divs (6 to 7 images in each div)
//             const imagesDiv1 = shuffledImages.slice(0, 7);
//             const imagesDiv2 = shuffledImages.slice(7, 14);

//             setImagesDiv1(imagesDiv1);
//             setImagesDiv2(imagesDiv2);
//         };

//         // Initial shuffle
//         shuffleImages();

//         // Shuffle images every 5 seconds
//         const interval = setInterval(shuffleImages, 5000);

//         // Clear interval on component unmount
//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <div className="main-topBrand">
//             <h1>Top Brands Trust Us.</h1>
//             <div className="image-container">
//                 <div className="image-row">
//                     {imagesDiv1.map((image, index) => (
//                         <img key={index} src={image} alt='' />
//                     ))}
//                 </div>
//                 <div className="image-row">
//                     {imagesDiv2.map((image, index) => (
//                         <img key={index} src={image} alt='' />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }


  

// export default TopbrandTrustUs;

import React, { useState, useEffect } from 'react';


// Import all images
import Images1 from '../assets/Accenture-Color.png';
import Images2 from '../assets/BBC-Arts-B.png';
import Images3 from '../assets/Burberry.png';
import Images4 from '../assets/chadwick.png';
import Images5 from '../assets/Chanel_BrandCrowd.png';
import Images6 from '../assets/Citibank-Color-Logo.svg';
import Images7 from '../assets/Deutsche-Bank-Color-Logo.svg';
import Images8 from '../assets/Disney.svg';
import Images9 from '../assets/dmb digital.png';
import Images10 from '../assets/Drt log.webp';
import Images11 from '../assets/Duracell-Color-Logo.svg';
import Images12 from '../assets/lavinstar.png';
import Images13 from '../assets/Moet-Chandon-Logo-Design-1024x577-1.webp';
import Images14 from '../assets/Nespresso-Color-Logo.svg';
import Images15 from '../assets/NHL-Color-Logo-966x1024-1.png';
import Images16 from '../assets/NYU-Color-Logo-B-915x1024-1.png';
import Images17 from '../assets/Philips-Healthcare-Color-Logo.svg';
import Images18 from '../assets/Playtex-Color-Logo.svg';
import Images19 from '../assets/rivera labs.png';
import Images20 from '../assets/Salesforce-2.svg';
import Images21 from '../assets/Samsung-Color-Logo.svg';
import Images22 from '../assets/Sony-Color-Logo.svg';
import Images23 from '../assets/Vice-Color-Logo.svg';
import Images24 from '../assets/Viacom-Color-Logo.svg';

function TopbrandTrustUs() {
    const [imagesDiv1, setImagesDiv1] = useState([]);
    const [imagesDiv2, setImagesDiv2] = useState([]);

    useEffect(() => {
        // Function to shuffle images and distribute them between two divs
        const shuffleImages = () => {
            const allImages = [
                Images1, Images2, Images3, Images4, Images5, Images6, Images7, Images8,
                Images9, Images10, Images11, Images12, Images13, Images14, Images15,
                Images16, Images17, Images18, Images19, Images20, Images21, Images22,
                Images23, Images24
            ];
            // Shuffle the array of images
            const shuffledImages = allImages.sort(() => Math.random() - 0.5);

            // Distribute images between two divs (6 to 7 images in each div)
            const imagesDiv1 = shuffledImages.slice(0, 7);
            const imagesDiv2 = shuffledImages.slice(7, 14);

            setImagesDiv1(imagesDiv1);
            setImagesDiv2(imagesDiv2);
        };

        // Initial shuffle
        shuffleImages();

        // Shuffle images every 5 seconds
        const interval = setInterval(shuffleImages, 5000);

        // Clear interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="main-topBrand">
            <h1>Top Brands Trust Us.</h1>
            <div className="image-container">
                <div className="image-row">
                    {imagesDiv1.map((image, index) => (
                        <img key={index} src={image} alt='' style={{ width: '12%', height: 'auto' }} />
                    ))}
                </div>
                <div className="image-row">
                    {imagesDiv2.map((image, index) => (
                        <img key={index} src={image} alt='' style={{ width: '12%', height: 'auto' }} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TopbrandTrustUs;

