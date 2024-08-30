// import React from 'react'
//  function Marketing (){
//     return(
//         <div className='marketingMain'>
// <div>
// <h2>
//           Who We Are?<br />
//           Data-Driven Marketing <span className="animatedText">Agency.</span>
//         </h2>
// </div>
//         </div>

    
//         )};
//         export default Marketing;
import React, { useState, useEffect } from 'react';

function Marketing() {
  const [typedText, setTypedText] = useState('');
  const text = 'Agency.';

  useEffect(() => {
    const interval = setInterval(() => {
      // Get the next character from the text
      const nextCharacter = text.charAt(typedText.length);
      // Append the next character to the typedText
      setTypedText(prevTypedText => prevTypedText + nextCharacter);
      // If the typedText matches the text, reset it
      if (typedText === text) {
        setTypedText('');
      }
    }, 100); // Adjust typing speed as needed

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [typedText]); // Re-run effect when typedText changes

  return (
    <div className='marketingMain'>
      <div className='marketingInfo-div'>
        <h2>
          Who We Are?<br />
          Data-Driven Marketing <span className='marketingMain-span'>{typedText}</span>
        </h2>

        <div className='p-div'>
            <p>
        Positioned as a trailblazing marketing agency,<span className='marketingMain-span-one'> PPCFly Agency </span>  takes pride in its award-winning status. Our relentless pursuit of innovation and <span className='marketingMain-span-one'>remarkable results</span>  has earned us esteemed recognition in the industry. Beyond being a conventional agency, we are a symbol of excellence, fueled by our <span className='marketingMain-span-one'>distinguished accolades</span> .
        </p>
        <button className='p-button '>Book A Meeting</button>
        </div>
      </div>
    </div>
  );
}

export default Marketing;
