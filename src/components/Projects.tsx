
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Leaf, GraduationCap, Brain } from "lucide-react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "ECOVERSE",
      description: "A centralized platform for eco city management and sustainable urban development",
      image: "/lovable-uploads/554620d8-e4a8-4dbd-ba6d-08393c1df30e.png",
      icon: <Leaf className="w-6 h-6" />,
      tech: ["React", "Node.js", "MongoDB", "IoT Integration"],
      github: "https://github.com/ARAVINTH45N",
      demo: "https://ecoverse.aravinth.dev",
      details: "ECOVERSE is a comprehensive platform designed for eco-friendly city management, integrating smart city solutions with environmental monitoring and sustainable development initiatives. Built with modern web technologies and IoT integration for real-time environmental data collection.",
      category: "IoT & Sustainability"
    },
    {
      id: 2,
      title: "ACAD SMART",
      description: "Centralized platform for faculties and research scholars publications reports",
      image: "/lovable-uploads/a44e2615-e200-489b-9570-10160b9c41c5.png",
      icon: <GraduationCap className="w-6 h-6" />,
      tech: ["React", "Express.js", "PostgreSQL", "PDF Processing"],
      github: "https://github.com/ARAVINTH45N",
      demo: "https://acadsmart.aravinth.dev",
      details: "ACAD SMART streamlines academic publication management, providing a unified platform for faculty members and research scholars to manage, track, and report their research publications and academic achievements. Features automated report generation and analytics dashboard.",
      category: "Educational Technology"
    },
    {
      id: 3,
      title: "Adaptive Learning System",
      description: "Intelligent learning system design tailored for individual student needs",
      image: "/lovable-uploads/c2e99449-d955-4f01-92b1-dcbad304c3d5.png",
      icon: <Brain className="w-6 h-6" />,
      tech: ["Python", "Machine Learning", "React", "TensorFlow"],
      github: "https://github.com/ARAVINTH45N",
      demo: "https://adaptive-learning.aravinth.dev",
      details: "An AI-powered adaptive learning system that personalizes educational content based on individual student learning patterns, performance metrics, and cognitive abilities to optimize learning outcomes. Utilizes machine learning algorithms for real-time content adaptation.",
      category: "AI & Machine Learning"
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
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Showcasing innovative solutions that bridge technology and real-world applications, 
            demonstrating expertise in embedded systems, web development, and AI technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative backdrop-blur-lg bg-white/5 rounded-2xl border border-white/10 overflow-hidden hover:border-blue-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
              onMouseEnter={() => setSelectedProject(project.id)}
              onMouseLeave={() => setSelectedProject(null)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute top-4 right-4 p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full shadow-lg">
                  {project.icon}
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/60 backdrop-blur-sm text-white text-xs rounded-full border border-white/20">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-xs border border-blue-400/30 hover:scale-105 transition-transform duration-200">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4 mb-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 group/link"
                  >
                    <Github className="w-4 h-4 group-hover/link:scale-110 transition-transform duration-200" />
                    <span className="text-sm font-medium">Source Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-300 group/link"
                  >
                    <ExternalLink className="w-4 h-4 group-hover/link:scale-110 transition-transform duration-200" />
                    <span className="text-sm font-medium">Live Demo</span>
                  </a>
                </div>

                {selectedProject === project.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                    className="pt-4 border-t border-white/10"
                  >
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.details}
                    </p>
                  </motion.div>
                )}
              </div>

              {/* Hover Overlay Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="backdrop-blur-lg bg-gradient-to-br from-white/5 to-white/10 p-8 rounded-2xl border border-white/10">
            <h3 className="text-2xl font-semibold text-white mb-4">Interested in Collaboration?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new projects, innovative ideas, and opportunities to create something amazing together.
            </p>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
            >
              Let's Build Something Great
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
