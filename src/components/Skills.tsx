
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C/C++", level: 90 },
        { name: "Python", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "MATLAB", level: 75 }
      ]
    },
    {
      title: "Embedded Systems",
      skills: [
        { name: "Arduino", level: 95 },
        { name: "Raspberry Pi", level: 90 },
        { name: "ESP32/ESP8266", level: 88 },
        { name: "STM32", level: 75 }
      ]
    },
    {
      title: "Hardware & Design",
      skills: [
        { name: "Circuit Design", level: 85 },
        { name: "PCB Design", level: 80 },
        { name: "Altium Designer", level: 75 },
        { name: "KiCad", level: 82 }
      ]
    },
    {
      title: "Technologies & Tools",
      skills: [
        { name: "IoT Development", level: 90 },
        { name: "React/Node.js", level: 85 },
        { name: "Git/GitHub", level: 88 },
        { name: "Linux", level: 78 }
      ]
    }
  ];

  return (
    <div className="py-20 px-4 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Expertise across hardware design, embedded programming, and modern web technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl border border-white/10"
            >
              <h3 className="text-2xl font-semibold text-blue-400 mb-6">{category.title}</h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-blue-400 text-sm">{skill.level}%</span>
                    </div>
                    
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ 
                          duration: 1.5, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl border border-white/10 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-purple-400 mb-4">Core Competencies</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">3+</div>
                <div className="text-gray-300">Years of Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">10+</div>
                <div className="text-gray-300">Technologies Mastered</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
