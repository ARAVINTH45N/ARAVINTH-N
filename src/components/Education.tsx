
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const education = [
    {
      degree: "Bachelor of Engineering",
      field: "Electronics & Communication Engineering",
      institution: "Saveetha Engineering College",
      location: "Chennai, Tamil Nadu",
      period: "2023 - 2027",
      status: "Currently Pursuing (3rd Year)",
      gpa: "8.5/10.0",
      highlights: [
        "Specialization in Embedded Systems and IoT",
        "Active member of Electronics Club",
        "Led multiple technical projects",
        "Consistent academic excellence"
      ],
      logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=100&h=100&fit=crop"
    },
    {
      degree: "Higher Secondary Certificate",
      field: "Physics, Chemistry, Mathematics",
      institution: "State Board",
      location: "Tamil Nadu",
      period: "2021 - 2023",
      status: "Completed",
      gpa: "90%",
      highlights: [
        "Strong foundation in Mathematics and Physics",
        "Excellence in Science subjects",
        "School technical team member",
        "Science exhibition winner"
      ],
      logo: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=100&h=100&fit=crop"
    }
  ];

  const certifications = [
    "DATABASE FOR DEVELOPERS - ORACLE",
    "INTERNET OF THINGS - IIT KHARAGPUR",
    "CLOUD COMPUTING - IIT KHARAGPUR",
    "EMBEDDED SYSTEMS - IIT BHUBANESWAR"
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
            Education & Qualifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Building a strong academic foundation while pursuing practical expertise in electronics engineering
          </p>
        </motion.div>

        <div className="space-y-8 mb-16">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-blue-400/50 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                <div className="flex items-center space-x-4 mb-6 lg:mb-0">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                    <img
                      src={edu.logo}
                      alt={edu.institution}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </div>
                  <div className="lg:hidden">
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                      {edu.status}
                    </span>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-1">{edu.degree}</h3>
                      <h4 className="text-lg text-blue-400 mb-2">{edu.field}</h4>
                      <div className="flex items-center space-x-2 text-gray-300 mb-2">
                        <GraduationCap className="w-5 h-5" />
                        <span>{edu.institution}, {edu.location}</span>
                      </div>
                      <div className="text-purple-400 font-medium">{edu.period}</div>
                    </div>
                    <div className="flex flex-col items-start lg:items-end space-y-2 mt-4 lg:mt-0">
                      <span className="hidden lg:inline px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                        {edu.status}
                      </span>
                      <div className="flex items-center space-x-1 text-yellow-400">
                        <Award className="w-4 h-4" />
                        <span className="font-semibold">{edu.gpa}</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    {edu.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300 text-sm">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl border border-white/10"
        >
          <div className="flex items-center space-x-3 mb-6">
            <BookOpen className="w-6 h-6 text-purple-400" />
            <h3 className="text-2xl font-semibold text-purple-400">Certifications & Courses</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-400/20 hover:border-blue-400/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-blue-400" />
                  <span className="text-gray-300 text-sm">{cert}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
