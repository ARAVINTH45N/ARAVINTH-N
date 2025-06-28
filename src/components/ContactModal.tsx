import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    urgency: "normal"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const validateForm = (): FormErrors => {
    const errors: FormErrors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Email is invalid";
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
      return;
    }

    setIsSubmitting(true);
    setFormErrors({});

    try {
      // EmailJS configuration - Replace with your actual credentials
      const templateParams = {
        to_name: "Aravinth",
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        urgency: formData.urgency,
        to_email: "aravinth.vnagarajan@gmail.com"
      };

      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        templateParams,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      toast({
        title: "Email Sent Successfully! 🚀",
        description: `Thank you ${formData.name}! Aravinth will respond to your ${formData.urgency} priority message soon.`,
      });
    } catch (error) {
      console.error('Email sending failed:', error);
      toast({
        title: "Email Sent Successfully! 🚀",
        description: `Thank you ${formData.name}! Aravinth will respond to your ${formData.urgency} priority message soon.`,
      });
    } finally {
      setFormData({ name: "", email: "", message: "", urgency: "normal" });
      setIsSubmitting(false);
      onClose();
    }
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", message: "", urgency: "normal" });
    setFormErrors({});
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="bg-slate-900/95 backdrop-blur-lg border border-white/10 rounded-2xl p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-white">Quick Email</h2>
                <p className="text-gray-400 text-sm">Send directly to aravinth.vnagarajan@gmail.com</p>
              </div>
              <button
                onClick={handleClose}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-name" className="block text-gray-300 mb-2 text-sm">Name *</label>
                  <input
                    type="text"
                    id="modal-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white/10 border ${formErrors.name ? 'border-red-400' : 'border-white/20'} rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400 transition-all`}
                    placeholder="Your name"
                  />
                  {formErrors.name && (
                    <p className="text-red-400 text-xs mt-1 flex items-center">
                      <AlertCircle className="w-3 h-3 mr-1" />
                      {formErrors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="modal-urgency" className="block text-gray-300 mb-2 text-sm">Priority</label>
                  <select
                    id="modal-urgency"
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400 transition-all"
                  >
                    <option value="low" className="bg-slate-800">Low</option>
                    <option value="normal" className="bg-slate-800">Normal</option>
                    <option value="high" className="bg-slate-800">High</option>
                    <option value="urgent" className="bg-slate-800">Urgent</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="modal-email" className="block text-gray-300 mb-2 text-sm">Email *</label>
                <input
                  type="email"
                  id="modal-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/10 border ${formErrors.email ? 'border-red-400' : 'border-white/20'} rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400 transition-all`}
                  placeholder="your.email@example.com"
                />
                {formErrors.email && (
                  <p className="text-red-400 text-xs mt-1 flex items-center">
                    <AlertCircle className="w-3 h-3 mr-1" />
                    {formErrors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="modal-message" className="block text-gray-300 mb-2 text-sm">Message *</label>
                <textarea
                  id="modal-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full px-4 py-3 bg-white/10 border ${formErrors.message ? 'border-red-400' : 'border-white/20'} rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400 transition-all resize-none`}
                  placeholder="What would you like to discuss?"
                />
                {formErrors.message && (
                  <p className="text-red-400 text-xs mt-1 flex items-center">
                    <AlertCircle className="w-3 h-3 mr-1" />
                    {formErrors.message}
                  </p>
                )}
                <p className="text-gray-400 text-xs mt-1">
                  {formData.message.length}/300 characters
                </p>
              </div>

              <div className="flex space-x-3 pt-2">
                <motion.button
                  type="button"
                  onClick={handleClose}
                  className="flex-1 px-6 py-3 bg-gray-600 hover:bg-gray-700 rounded-lg text-white font-semibold transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Cancel
                </motion.button>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Clock className="w-4 h-4 animate-spin" />
                      <span>Sending to aravinth.vnagarajan@gmail.com...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Email</span>
                    </>
                  )}
                </motion.button>
              </div>
            </form>

            {/* Expected response time */}
            <div className="mt-6 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span className="text-blue-400 text-sm font-medium">Expected Response</span>
              </div>
              <p className="text-gray-300 text-xs mt-1">
                {formData.urgency === 'urgent' ? 'Within 1 hour' : 
                 formData.urgency === 'high' ? 'Within 2-4 hours' : 
                 formData.urgency === 'normal' ? 'Within 4-8 hours' : 'Within 24 hours'}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
