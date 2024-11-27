//src/pages/Preheader.tsx
import { motion } from "framer-motion";

function Preheader() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <motion.div
        className="h-12 w-12"
        style={{backgroundColor: '#00B8BB'}}
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />
    </div>
  )
}

export default Preheader