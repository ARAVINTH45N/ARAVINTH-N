
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const experiences = [
    {
      title: "Co-Founder & CEO",
      company: "ZELABRIA",
      location: "Chennai, India",
      period: "2023 - Present",
      description: [
        "Leading a team of engineers in developing innovative embedded systems solutions",
        "Overseeing product development from concept to market launch",
        "Establishing strategic partnerships with technology companies",
        "Managing business operations and driving company growth"
      ],
      logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=100&h=100&fit=crop",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Electronics Engineering Student",
      company: "Saveetha Engineering College",
      location: "Chennai, India",
      period: "2023 - 2027",
      description: [
        "Pursuing Bachelor's in Electronics & Communication Engineering",
        "Specializing in embedded systems and IoT technologies",
        "Leading technical projects and research initiatives",
        "Maintaining excellent academic performance with practical focus"
      ],
      logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=100&h=100&fit=crop",
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "HEAD OF OPERATIONS",
      company: "\"CIRCUIT CIRCUS\" DRESTEIN'24",
      location: "Chennai, India",
      period: "2024",
      description: [
        "Led operations for Circuit Circus event at DRESTEIN'24, a national level technical symposium",
        "Coordinated with multiple teams and managed event logistics",
        "Attended many events and hackathons all over Tamil Nadu, including Kalasalingam University, Jeppiaar Engineering College, St. Joseph's College of Engineering, Sairam Engineering College, and more",
        "Gained extensive experience in event management and technical coordination"
      ],
      logo: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=100&h=100&fit=crop",
      color: "from-green-500 to-teal-600"
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
            Experience & Leadership
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Building innovative solutions while leading teams and driving technological advancement
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-400 via-purple-400 to-cyan-400"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative flex items-start space-x-8"
              >
                {/* Timeline Dot */}
                <div className={`relative z-10 w-16 h-16 rounded-full bg-gradient-to-r ${exp.color} flex items-center justify-center shadow-lg`}>
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </div>

                {/* Content Card */}
                <div className="flex-1 backdrop-blur-lg bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-blue-400/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-1">{exp.title}</h3>
                      <div className="flex items-center space-x-4 text-blue-400 mb-2">
                        <div className="flex items-center space-x-1">
                          <Building2 className="w-4 h-4" />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 text-purple-400 font-medium">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {exp.description.map((item, i) => (
                      <div key={i} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300 leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
