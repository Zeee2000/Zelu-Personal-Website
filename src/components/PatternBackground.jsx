import { motion } from "framer-motion";

const PatternBackground = () => {
  return (
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-[#0a192f]" />
      <div 
        className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: `
            radial-gradient(circle at center, #64ffda 1px, transparent 1px),
            radial-gradient(circle at center, #64ffda 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          backgroundPosition: '0 0, 25px 25px'
        }}
      >
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ['0px 0px, 25px 25px', '25px 25px, 50px 50px']
          }}
          transition={{
            duration: 10,
            ease: "linear",
            repeat: Infinity
          }}
          style={{
            backgroundImage: `
              radial-gradient(circle at center, #64ffda 1px, transparent 1px),
              radial-gradient(circle at center, #64ffda 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>
      
      {/* Overlay gradient for depth */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(10, 25, 47, 0.2) 100%)'
        }}
      />
    </div>
  );
};

export default PatternBackground; 