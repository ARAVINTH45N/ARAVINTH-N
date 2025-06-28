
import { motion } from "framer-motion";
import { Instagram, Linkedin, Mail, MessageCircle, Github } from "lucide-react";
import { useState } from "react";
import ContactModal from "./ContactModal";

const SocialPanel = () => {
  const [showContactModal, setShowContactModal] = useState(false);

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/_aravinthhh?igsh=MTR3OTRuMThhYnE3cQ==",
      color: "from-pink-500 to-purple-600",
      label: "Instagram",
      hoverColor: "hover:from-pink-400 hover:to-purple-500"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/aravinth-n-005085290",
      color: "from-blue-500 to-blue-700",
      label: "LinkedIn",
      hoverColor: "hover:from-blue-400 hover:to-blue-600"
    },
    {
      icon: Github,
      href: "https://github.com/ARAVINTH45N",
      color: "from-gray-500 to-gray-700",
      label: "GitHub",
      hoverColor: "hover:from-gray-400 hover:to-gray-600"
    },
    {
      icon: MessageCircle,
      href: "https://wa.me/+919025420055",
      color: "from-green-500 to-green-600",
      label: "WhatsApp",
      hoverColor: "hover:from-green-400 hover:to-green-500"
    },
    {
      icon: Mail,
      onClick: () => setShowContactModal(true),
      color: "from-red-500 to-orange-500",
      label: "Email",
      hoverColor: "hover:from-red-400 hover:to-orange-400"
    }
  ];

  return (
    <>
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 space-y-4"
      >
        {socialLinks.map((social, index) => (
          <motion.div
            key={social.label}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.1, x: 5 }}
            className="group relative"
          >
            {social.href ? (
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${social.color} ${social.hoverColor} shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
              >
                <social.icon className="w-6 h-6 text-white relative z-10" />
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            ) : (
              <button
                onClick={social.onClick}
                className={`flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${social.color} ${social.hoverColor} shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
              >
                <social.icon className="w-6 h-6 text-white relative z-10" />
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            )}
            
            <div className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-black/90 text-white px-3 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap border border-white/10 backdrop-blur-sm">
              <span className="font-medium">{social.label}</span>
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-black/90 rotate-45 border-l border-b border-white/10"></div>
            </div>
          </motion.div>
        ))}
        
        {/* Online Status Indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: socialLinks.length * 0.1 + 0.5 }}
          className="flex items-center justify-center"
        >
          <div className="relative">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-30"></div>
          </div>
        </motion.div>
      </motion.div>

      <ContactModal 
        isOpen={showContactModal} 
        onClose={() => setShowContactModal(false)} 
      />
    </>
  );
};

export default SocialPanel;
