import { BrowserRouter } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import { About, Contact, Experience, Hero, Navbar, Works, StarsCanvas } from "./components";
import PatternBackground from "./components/PatternBackground";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <PatternBackground />
        
        <div className="relative z-10 bg-transparent">
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Works />
          <Contact />
        </div>
        <div className='relative z-0'>
          <StarsCanvas />
        </div>
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;
