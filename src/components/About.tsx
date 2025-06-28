
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Code, Trophy, Users, Star, Target, Briefcase, GraduationCap } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const achievements = [
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Leadership Excellence",
      description: "Successfully led Circuit Circus event at DRESTEIN'24, managing operations and coordinating multiple teams"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Academic Performance", 
      description: "Maintaining excellent academic performance while pursuing Electronics & Communication Engineering"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Building",
      description: "Built and led engineering teams at ZELABRIA, fostering innovation and collaborative problem-solving"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Project Success",
      description: "Completed 4+ major projects spanning embedded systems, IoT development, and circuit design"
    }
  ];

  const roles = [
    {
      title: "Co-Founder & CEO",
      organization: "ZELABRIA",
      period: "2023 - Present",
      description: "Leading innovative embedded systems solutions and driving business growth",
      icon: <Briefcase className="w-5 h-5" />
    },
    {
      title: "HEAD OF OPERATIONS",
      organization: "Circuit Circus Event - DRESTEIN'24",
      period: "2024",
      description: "Managed operations for national level technical symposium with multiple participants",
      icon: <Users className="w-5 h-5" />
    },
    {
      title: "Electronics Engineering Student",
      organization: "Saveetha Engineering College",
      period: "2023 - 2027",
      description: "Specializing in embedded systems and IoT technologies with practical focus",
      icon: <GraduationCap className="w-5 h-5" />
    }
  ];

  const techCategories = [
    {
      title: "Programming Languages",
      skills: ["C/C++", "Python", "JavaScript", "MATLAB"],
      gradient: "from-blue-500/20 to-purple-500/20",
      border: "border-blue-400/30",
      color: "text-blue-300"
    },
    {
      title: "Hardware & Platforms", 
      skills: ["Arduino", "Raspberry Pi", "ESP32/ESP8266", "STM32"],
      gradient: "from-purple-500/20 to-pink-500/20",
      border: "border-purple-400/30",
      color: "text-purple-300"
    },
    {
      title: "Design & Development",
      skills: ["Circuit Design", "PCB Design", "IoT Development", "System Integration"],
      gradient: "from-cyan-500/20 to-teal-500/20", 
      border: "border-cyan-400/30",
      color: "text-cyan-300"
    }
  ];

  return (
    <div className="py-20 px-4 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Passionate Electronics & Communication Engineering student and entrepreneur, dedicated to bridging 
            the gap between theoretical knowledge and practical innovations in embedded systems and IoT technologies.
          </p>
        </motion.div>

        {/* Current Journey - Two Column Layout */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="backdrop-blur-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 rounded-2xl border border-blue-400/20">
              <div className="flex items-center mb-6">
                <GraduationCap className="w-8 h-8 text-blue-400 mr-3" />
                <h3 className="text-2xl font-semibold text-blue-400">Academic Pursuit</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                Currently in my 3rd year pursuing Bachelor's degree in Electronics & Communication Engineering 
                at Saveetha Engineering College, Chennai (2023-2027).
              </p>
              <p className="text-blue-300 font-medium">
                Focus: Embedded Systems, IoT Innovations, Circuit Design
              </p>
            </div>
            
            <div className="backdrop-blur-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-8 rounded-2xl border border-purple-400/20">
              <div className="flex items-center mb-6">
                <Briefcase className="w-8 h-8 text-purple-400 mr-3" />
                <h3 className="text-2xl font-semibold text-purple-400">Entrepreneurial Venture</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                As Co-Founder & CEO of ZELABRIA, I lead innovative projects that transform theoretical 
                concepts into practical solutions.
              </p>
              <p className="text-purple-300 font-medium">
                Focus: Web Development, App Development, Data Analytics, Embedded Systems, IoT Applications, Electronics Solutions
              </p>
            </div>
          </div>
        </motion.div>

        {/* Technical Expertise - Enhanced Grid Layout */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4 flex items-center justify-center">
              <Code className="w-8 h-8 mr-3 text-cyan-400" />
              Technical Expertise
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive skill set spanning multiple domains of technology and engineering
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {techCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className={`backdrop-blur-lg bg-gradient-to-br ${category.gradient} p-6 rounded-2xl border ${category.border}`}
              >
                <h4 className={`text-lg font-semibold ${category.color} mb-4 text-center`}>
                  {category.title}
                </h4>
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div key={skill} className="text-center">
                      <span className={`inline-block px-4 py-2 bg-gradient-to-r ${category.gradient} rounded-full text-sm border ${category.border} hover:scale-105 transition-transform duration-200`}>
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Achievements - Card Grid */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-semibold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-4 flex items-center justify-center">
              <Award className="w-8 h-8 mr-3 text-yellow-400" />
              Key Achievements
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Milestones and accomplishments that showcase leadership and technical excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="group backdrop-blur-lg bg-gradient-to-br from-white/5 to-white/10 p-6 rounded-2xl border border-white/10 hover:border-yellow-400/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-yellow-400 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                    {achievement.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Roles & Leadership - Timeline Style */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-semibold bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent mb-4 flex items-center justify-center">
              <Users className="w-8 h-8 mr-3 text-pink-400" />
              Leadership & Roles
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Key positions and responsibilities that have shaped my professional journey
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-400 to-purple-400"></div>
            <div className="space-y-8">
              {roles.map((role, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                  className="relative flex items-start space-x-6"
                >
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full border-4 border-gray-900">
                    {role.icon}
                  </div>
                  <div className="flex-1 backdrop-blur-lg bg-gradient-to-br from-white/5 to-white/10 p-6 rounded-2xl border border-white/10">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="text-xl font-semibold text-white">{role.title}</h4>
                      <span className="text-pink-400 font-medium text-sm">{role.period}</span>
                    </div>
                    <h5 className="text-purple-300 font-medium mb-2">{role.organization}</h5>
                    <p className="text-gray-300 leading-relaxed">{role.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Professional Highlights - Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center"
        >
          <div className="backdrop-blur-lg bg-gradient-to-br from-white/5 to-white/10 p-8 rounded-2xl border border-white/10">
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-8">
              Professional Highlights
            </h3>
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="text-center group">
                <div className="text-4xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">1+</div>
                <div className="text-gray-300 text-sm">Years of Experience</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">4+</div>
                <div className="text-gray-300 text-sm">Projects Completed</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300">10+</div>
                <div className="text-gray-300 text-sm">Technologies Mastered</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-pink-400 mb-2 group-hover:scale-110 transition-transform duration-300">5+</div>
                <div className="text-gray-300 text-sm">Events & Hackathons</div>
              </div>
            </div>
            
            <div className="p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-400/20">
              <p className="text-gray-300 text-sm leading-relaxed">
                <strong className="text-blue-400">Networking & Growth:</strong> Actively participated in hackathons and technical events 
                across Tamil Nadu, including <strong className="text-purple-400">Kalasalingam University, Jeppiaar Engineering College, 
                St. Joseph's College of Engineering, Sairam Engineering College</strong>, and more, building a strong professional network 
                and staying updated with industry trends.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
