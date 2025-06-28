
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative">
      <div className="text-center space-y-8">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-48 h-48 rounded-full overflow-hidden border-4 border-blue-400/50 shadow-2xl backdrop-blur-sm"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full"></div>
          <img
            src="/lovable-uploads/e8e90f80-f89a-4e22-8a72-b3914ce4e162.png"
            alt="Aravinth N"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent to-blue-400/10"></div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="space-y-4"
        >
          <h1 className="text-6xl lg:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Aravinth N
          </h1>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-2"
          >
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Electronics & Communication Engineering Student
            </p>
            <p className="text-lg lg:text-xl text-blue-400 font-semibold">
              Aspiring Developer
            </p>
            <p className="text-lg lg:text-xl text-purple-400 font-semibold">
              Co-Founder & CEO @ ZELABRIA
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex justify-center space-x-6"
        >
          <motion.button
            onClick={scrollToAbout}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
          >
            Explore My Work
          </motion.button>
          
          <motion.button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border border-blue-400/50 rounded-full text-blue-400 font-semibold hover:bg-blue-400/10 transition-all duration-300"
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 text-blue-400" />
      </motion.div>
    </div>
  );
};

export default Hero;
