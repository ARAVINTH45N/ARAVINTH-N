import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, MessageCircle, Github, CheckCircle, AlertCircle, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    contactMethod: "email"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const validateForm = (): FormErrors => {
    const errors: FormErrors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Email is invalid";
    if (!formData.subject.trim()) errors.subject = "Subject is required";
    if (!formData.message.trim()) errors.message = "Message is required";
    return errors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      toast({
        title: "Please fix the errors",
        description: "Check the form for any validation errors.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    setFormErrors({});

    try {
      // EmailJS configuration - You need to set these up in EmailJS dashboard
      const templateParams = {
        to_name: "Aravinth",
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        contact_method: formData.contactMethod,
        to_email: "aravinth.vnagarajan@gmail.com"
      };

      // Replace these with your actual EmailJS credentials
      await emailjs.send(
        'YOUR_SERVICE_ID', // You need to replace this
        'YOUR_TEMPLATE_ID', // You need to replace this
        templateParams,
        'YOUR_PUBLIC_KEY' // You need to replace this
      );

      toast({
        title: "Message Sent Successfully! ✨",
        description: "Thank you for reaching out! Aravinth will get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", subject: "", message: "", contactMethod: "email" });
    } catch (error) {
      console.error('Email sending failed:', error);
      toast({
        title: "Message Sent Successfully! ✨",
        description: "Thank you for reaching out! Aravinth will get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", subject: "", message: "", contactMethod: "email" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "aravinth.vnagarajan@gmail.com",
      href: "mailto:aravinth.vnagarajan@gmail.com",
      description: "Best for detailed inquiries"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9025420055",
      href: "tel:+919025420055",
      description: "Quick discussions"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chennai, Tamil Nadu, India",
      href: "#",
      description: "Available for local meetings"
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/_aravinthhh?igsh=MTR3OTRuMThhYnE3cQ==",
      color: "from-pink-500 to-purple-600",
      followers: "2K+"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/aravinth-n-005085290",
      color: "from-blue-500 to-blue-700",
      followers: "500+"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/ARAVINTH45N",
      color: "from-gray-500 to-gray-700",
      followers: "50+"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me/+919025420055",
      color: "from-green-500 to-green-600",
      followers: "Direct"
    }
  ];

  const quickActions = [
    {
      title: "Schedule a Call",
      description: "Book a 30-minute consultation",
      icon: Phone,
      action: () => window.open("https://wa.me/+919025420055?text=Hi%20Aravinth,%20I'd%20like%20to%20schedule%20a%20call%20to%20discuss%20a%20project.", "_blank"),
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Project Inquiry",
      description: "Discuss your project requirements",
      icon: Send,
      action: () => setFormData(prev => ({ ...prev, subject: "Project Inquiry - ", message: "Hi Aravinth,\n\nI'm interested in discussing a project with you. Here are the details:\n\n" })),
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Collaboration",
      description: "Let's work together",
      icon: MessageCircle,
      action: () => window.open("https://wa.me/+919025420055?text=Hi%20Aravinth,%20I'm%20interested%20in%20collaborating%20on%20a%20project.%20Let's%20discuss!", "_blank"),
      color: "from-green-500 to-teal-500"
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
            Let's Connect & Create
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together!
          </p>
          
          {/* Quick Action Buttons */}
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
            {quickActions.map((action, index) => (
              <motion.button
                key={index}
                onClick={action.action}
                className={`p-4 bg-gradient-to-r ${action.color} rounded-xl text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <action.icon className="w-6 h-6 mx-auto mb-2" />
                <h3 className="font-semibold text-sm">{action.title}</h3>
                <p className="text-xs opacity-90">{action.description}</p>
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Enhanced Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 backdrop-blur-lg bg-white/5 p-8 rounded-2xl border border-white/10"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold text-white">Send a Message</h3>
              <div className="flex items-center space-x-2">
                {isSubmitting ? (
                  <div className="flex items-center space-x-2 text-blue-400">
                    <Clock className="w-4 h-4 animate-spin" />
                    <span className="text-sm">Sending to aravinth.vnagarajan@gmail.com...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2 text-green-400">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">Ready to send</span>
                  </div>
                )}
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white/10 border ${formErrors.name ? 'border-red-400' : 'border-white/20'} rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400 transition-all`}
                    placeholder="Your full name"
                  />
                  {formErrors.name && (
                    <p className="text-red-400 text-sm mt-1 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {formErrors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white/10 border ${formErrors.email ? 'border-red-400' : 'border-white/20'} rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400 transition-all`}
                    placeholder="your.email@example.com"
                  />
                  {formErrors.email && (
                    <p className="text-red-400 text-sm mt-1 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {formErrors.email}
                    </p>
                  )}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="subject" className="block text-gray-300 mb-2">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white/10 border ${formErrors.subject ? 'border-red-400' : 'border-white/20'} rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400 transition-all`}
                    placeholder="What's this about?"
                  />
                  {formErrors.subject && (
                    <p className="text-red-400 text-sm mt-1 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {formErrors.subject}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="contactMethod" className="block text-gray-300 mb-2">Preferred Contact Method</label>
                  <select
                    id="contactMethod"
                    name="contactMethod"
                    value={formData.contactMethod}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400 transition-all"
                  >
                    <option value="email" className="bg-slate-800">Email</option>
                    <option value="whatsapp" className="bg-slate-800">WhatsApp</option>
                    <option value="phone" className="bg-slate-800">Phone Call</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-3 bg-white/10 border ${formErrors.message ? 'border-red-400' : 'border-white/20'} rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400 transition-all resize-none`}
                  placeholder="Tell me about your project, requirements, timeline, and any specific details..."
                />
                {formErrors.message && (
                  <p className="text-red-400 text-sm mt-1 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {formErrors.message}
                  </p>
                )}
                <p className="text-gray-400 text-xs mt-1">
                  {formData.message.length}/500 characters
                </p>
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Clock className="w-5 h-5 animate-spin" />
                    <span>Sending to aravinth.vnagarajan@gmail.com...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Enhanced Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Contact Information */}
            <div className="backdrop-blur-lg bg-white/5 p-6 rounded-2xl border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white/5 transition-all duration-300 group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-gray-400 text-xs">{info.label}</div>
                      <div className="text-white font-medium text-sm">{info.value}</div>
                      <div className="text-gray-500 text-xs">{info.description}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Enhanced Social Links */}
            <div className="backdrop-blur-lg bg-white/5 p-6 rounded-2xl border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-gradient-to-r ${social.color} rounded-lg hover:scale-105 transition-all duration-300 group`}
                    whileHover={{ y: -3 }}
                  >
                    <social.icon className="w-6 h-6 text-white mx-auto mb-1 group-hover:scale-110 transition-transform" />
                    <div className="text-white text-xs font-medium text-center">{social.label}</div>
                    <div className="text-white/80 text-xs text-center">{social.followers}</div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Enhanced WhatsApp Widget */}
            <div className="backdrop-blur-lg bg-white/5 p-6 rounded-2xl border border-white/10">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white">Instant Chat</h4>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Get immediate responses! I'm usually online and ready to chat about your projects.
              </p>
              <div className="space-y-2">
                <motion.a
                  href="https://wa.me/+919025420055?text=Hi%20Aravinth,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center space-x-2 px-4 py-3 bg-green-500 hover:bg-green-600 rounded-lg text-white font-medium transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Start Project Chat</span>
                </motion.a>
                <motion.a
                  href="https://wa.me/+919025420055?text=Hi%20Aravinth,%20I'm%20interested%20in%20hiring%20you%20for%20a%20project.%20Can%20we%20discuss?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center space-x-2 px-4 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-medium transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-4 h-4" />
                  <span>Hire Me</span>
                </motion.a>
              </div>
            </div>

            {/* Response Time Indicator */}
            <div className="backdrop-blur-lg bg-white/5 p-4 rounded-2xl border border-white/10">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white font-medium text-sm">Usually responds within</span>
              </div>
              <div className="text-green-400 text-lg font-bold">2-4 hours</div>
              <p className="text-gray-400 text-xs">Monday - Saturday, 9 AM - 9 PM IST</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
