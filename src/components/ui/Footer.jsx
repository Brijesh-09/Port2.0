import React, { useEffect, useRef, useState } from 'react';

export const Footer = () => {
  const footerRef = useRef(null);
  const [fillHeight, setFillHeight] = useState(0); // 0–100%

  useEffect(() => {
    const handleScroll = () => {
      if (!footerRef.current) return;

      const rect = footerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // When footer starts entering the viewport from bottom
      const scrollStart = windowHeight; // top of footer at bottom of screen
      const scrollEnd = windowHeight - rect.height; // top of footer at top of screen

      const distance = scrollStart - rect.top; // how much we've scrolled into footer
      const total = scrollStart - scrollEnd;   // total scroll distance while footer is in view

      let ratio = distance / total;

      // Only fill when footer is fully in view and scrolling inside it
      ratio = Math.max(0, Math.min(1, ratio));

      setFillHeight(ratio * 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={footerRef}
      className="relative bg-black text-center py-16 overflow-hidden"
    >
      <div className="relative inline-block text-6xl sm:text-7xl md:text-9xl font-extrabold font-sans">
        {/* Stroke text (outline only) */}
        <span
          className="block text-transparent"
          style={{
            WebkitTextStroke: '2px white',
          }}
        >
          See Yaa!
        </span>

        {/* Fill text, masked by clipPath */}
        <span
          className="absolute left-0 top-0 w-full text-white overflow-hidden"
          style={{
            height: '100%',
            clipPath: `inset(${100 - fillHeight}% 0 0 0)`,
            WebkitTextStroke: '0px',
          }}
        >
          See Yaa!
        </span>

        {/* Eyes */}
        <span
          role="img"
          aria-label="eyes"
          className="inline-block transition-transform duration-300 hover:scale-125 ml-4 align-middle"
        >
          {/* <picture>
            <source
              srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f440/512.webp"
              type="image/webp"
            />
            <img
              src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f440/512.gif"
              alt="👀"
              width="96"
              height="48"
              className="inline-block"
            />
          </picture> */}

          
        </span>
      </div>
        <h4 className='text-white font-light'>2025 All rights Reserved.</h4>

    </div>
  );
};
