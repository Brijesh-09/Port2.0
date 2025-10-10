import React, { forwardRef } from 'react';

export const About = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="bg-gray-900 w-full px-6 md:px-12 lg:px-24 py-24">
      <h1 className="text-6xl sm:text-7xl md:text-8xl font-sans font-semibold text-gray-500 gsap-fade-up">
        About
      </h1>

      <div className="mt-16 flex flex-col md:flex-row justify-between gap-12 gsap-fade-up">
        <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white  md:w-1/2">
          hello, I'm Brijesh Kori 👋<br />
          a DevOps Engineer based in<br />
          Mumbai. I love to travel & create<br />
        </p>

        <p className="text-base sm:text-lg md:text-xl font-light text-gray-100 md:w-1/2">
          I love to collaborate and create fun websites.<br />
          I also love to try out new things and travel.<br />
          When I'm not working, you can find me exploring<br />
        </p>
      </div>
    </section>
  );
});
