import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import PatternBackground from "./PatternBackground";
import { useState, useEffect } from "react";

const Hero = () => {
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHint(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      <PatternBackground />

      {/* Hint Element */}
      {showHint && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute xs:top-[15%] top-[25%] left-1/2 transform -translate-x-1/2 z-10 
            bg-[#915EFF]/10 backdrop-blur-sm border border-[#915EFF]/30
            px-4 py-2 xs:px-6 xs:py-3 rounded-full shadow-xl
            w-auto max-w-[90%] xs:max-w-none"
        >
          <div className="flex items-center justify-center gap-2">
            <span className="text-white/90 text-xs xs:text-sm font-medium whitespace-nowrap">
              ✨ Click and drag to explore
            </span>
          </div>
        </motion.div>
      )}

      {/* Hero Content */}
      <div className="absolute top-[120px] w-full">
        <div className={`${styles.paddingX} max-w-7xl mx-auto`}>
          <div className='flex flex-row items-start gap-5'>
            <div className='flex flex-col justify-center items-center mt-5'>
              <div className='w-5 h-5 rounded-full bg-[#64ffda]' />
              <div className='w-1 sm:h-80 h-40 cyan-gradient' />
            </div>

            <div>
              <h1 className={`${styles.heroHeadText}`}>
                Hi, I'm <span className='text-[#64ffda]'>Zelu</span>
              </h1>
              <p className={`${styles.heroSubText}`}>
                I am a software engineer
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3D Computer */}
      <div className='absolute top-0 left-0 w-full h-[800px]'>
        <ComputersCanvas />
      </div>

      {/* Scroll Indicator */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-[#8892b0] flex justify-center items-start p-2 hover:border-[#64ffda] transition-colors duration-300'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-[#64ffda] mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
