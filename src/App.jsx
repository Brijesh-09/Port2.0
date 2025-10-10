import { useState, useEffect, useRef } from 'react'
import './App.css'
import { Navbar } from './components/ui/Navbar'
import { Hero } from './components/ui/Hero'
import { About } from './components/ui/About'
import { Work } from './components/ui/Work'
import { Experince } from './components/ui/Experince'
import { Connect } from './components/ui/Connect'
import { Footer } from './components/ui/Footer'

function App() {
  const heroRef = useRef(null);
  const [isHeroInView, setIsHeroInView] = useState(true); // default: Hero is visible

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroInView(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.5, // Adjust based on when you want the layout to switch
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, []);

  return (
    <>
      <Navbar isHeroInView={isHeroInView} />
      <div ref={heroRef}>
        <Hero />
      </div>
      <About />
      <Work />
      <Experince />
      <Connect/>
      <Footer/>
    </>
  )
}

export default App;
