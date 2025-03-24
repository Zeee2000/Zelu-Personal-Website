import { motion } from "framer-motion";

const PatternBackground = () => {
  return (
    <div className="absolute inset-0 z-0">
      {/* Base Background */}
      <div className="absolute inset-0 bg-[#0a192f]" />

      {/* Animated Grid Pattern */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 1px 1px, rgba(100, 255, 218, 0.15) 2px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
        animate={{
          backgroundPosition: ["0px 0px", "-40px -40px"],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f]/0 via-[#0a192f]/50 to-[#0a192f]" />
    </div>
  );
};

export default PatternBackground; 