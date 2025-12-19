import { useEffect, useState } from 'react';
import {
  Hero,
  About,
  Skills,
  Projects,
  Achievements,
  GitHub,
  Contact,
  Footer,
  Loader,
  NavBar,
} from './components';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (can be replaced with actual data fetching)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader isLoading={isLoading} />
      <NavBar />
      <div className="min-h-screen bg-black text-white overflow-hidden pt-16">
        <div id="hero"><Hero /></div>
        <div id="about"><About /></div>
        <div id="skills"><Skills /></div>
        <div id="projects"><Projects /></div>
        <div id="achievements"><Achievements /></div>
        <div id="github"><GitHub /></div>
        <div id="contact"><Contact /></div>
        <Footer />
      </div>
    </>
  );
}

export default App;
