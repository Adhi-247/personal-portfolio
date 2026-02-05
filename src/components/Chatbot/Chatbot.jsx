import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiMessageCircle, 
  FiX, 
  FiSend, 
  FiUser,
  FiMic,
  FiPaperclip,
  FiSmile
} from 'react-icons/fi';
import adeeshaImage from '../../assets/Adeeshaprabashwara.JPG';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Adeesha's AI assistant. How can I help you learn more about his skills and projects?",
      sender: 'bot',
      timestamp: new Date().toLocaleTimeString(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const botResponses = {
    skills: "🚀 Adeesha is skilled in React, Node.js, Express, MongoDB, MySQL, Java, JavaScript, Python, PHP, Kotlin, and many other technologies. He specializes in full-stack development with MERN stack, Java Servlets, and PHP-based applications. Want to see his full skills section?",
    projects: "💼 Check out his amazing projects: Online Electrical Appliance Store (MERN Stack), Disaster Management System for Sri Lanka (MERN Stack), Online Train Reservations System (Java Servlet), and Boat Safari Trip Management System (PHP & MySQL). All projects have GitHub repos and demo videos! Would you like specific details about any project?",
    experience: "🎓 Adeesha has completed AI/ML Engineer certification from SLIIT, Python programming from Simplilearn, and ICT Diploma from ICBT Campus. He was also a former Sri Lanka National Football Team player and won multiple sports awards!",
    education: "📚 He's currently pursuing BSc (Hons) in Information Technology at SLIIT (2023-2027), specializing in Software Engineering. Previously studied at Rahula College, Matara. Always staying updated with the latest technologies!",
    contact: "📧 You can reach Adeesha at adeeshaprabashwarasenarath7@gmail.com or call +94 71 106 3357. Connect with him on LinkedIn and GitHub for collaboration opportunities. He's based in Colombo, Sri Lanka and always open to new opportunities!",
    hello: "👋 Hello! Nice to meet you! I'm Adeesha's AI assistant. I can tell you about his software development projects, technical skills, certifications, and sports achievements. What would you like to know?",
    help: "🤖 I can tell you about Adeesha's skills, projects, experience, education, or how to contact him. Try asking: 'Tell me about his projects', 'What technologies does he use?', or 'How can I contact him?'",
    about: "👨‍💻 Adeesha Prabashwara is a passionate Software Engineering student at SLIIT specializing in full-stack and mobile development. He builds scalable web applications with MERN stack, Java, and PHP. He's also a former Sri Lanka National Football Team player! Always eager to learn new technologies and work on innovative projects!",
    github: "💻 You can find all of Adeesha's projects on GitHub at github.com/Adhi-247! His main projects include e-commerce systems, disaster management platforms, train booking systems, and safari management applications. Each project card has direct links to source code and demo videos!",
    demo: "🌐 Most projects have demo videos on YouTube! Click on the 'Live Demo' buttons on project cards to watch them in action. You can see real working demonstrations of the Electrical Store and Disaster Management systems!",
    football: "⚽ Adeesha represented Sri Lanka Under-18 & Under-19 National Football Team at the Asian Championships in Indonesia (2019-2020). He also won Southern Province School Games, SLIIT Colours Award, and Rahula College Colours Award. He served as Football Team Captain in 2019!",
    default: "🤔 That's an interesting question! I'd recommend checking out Adeesha's portfolio sections or reaching out to him directly for more specific information. You can ask me about his projects, skills, education, experience, or football achievements!"
  };

  const generateResponse = (input) => {
    const lowercaseInput = input.toLowerCase();
    
    if (lowercaseInput.includes('skill') || lowercaseInput.includes('technology') || lowercaseInput.includes('tech') || lowercaseInput.includes('stack')) {
      return botResponses.skills;
    } else if (lowercaseInput.includes('project') || lowercaseInput.includes('work') || lowercaseInput.includes('portfolio') || lowercaseInput.includes('app')) {
      return botResponses.projects;
    } else if (lowercaseInput.includes('experience') || lowercaseInput.includes('job') || lowercaseInput.includes('career') || lowercaseInput.includes('certificate') || lowercaseInput.includes('certification')) {
      return botResponses.experience;
    } else if (lowercaseInput.includes('education') || lowercaseInput.includes('study') || lowercaseInput.includes('learn') || lowercaseInput.includes('sliit') || lowercaseInput.includes('university') || lowercaseInput.includes('college')) {
      return botResponses.education;
    } else if (lowercaseInput.includes('contact') || lowercaseInput.includes('reach') || lowercaseInput.includes('email') || lowercaseInput.includes('phone') || lowercaseInput.includes('call')) {
      return botResponses.contact;
    } else if (lowercaseInput.includes('hello') || lowercaseInput.includes('hi') || lowercaseInput.includes('hey') || lowercaseInput.includes('good')) {
      return botResponses.hello;
    } else if (lowercaseInput.includes('help')) {
      return botResponses.help;
    } else if (lowercaseInput.includes('about') || lowercaseInput.includes('who')) {
      return botResponses.about;
    } else if (lowercaseInput.includes('github') || lowercaseInput.includes('code') || lowercaseInput.includes('repository') || lowercaseInput.includes('repo')) {
      return botResponses.github;
    } else if (lowercaseInput.includes('demo') || lowercaseInput.includes('live') || lowercaseInput.includes('website') || lowercaseInput.includes('video')) {
      return botResponses.demo;
    } else if (lowercaseInput.includes('football') || lowercaseInput.includes('sport') || lowercaseInput.includes('soccer') || lowercaseInput.includes('athlete') || lowercaseInput.includes('player')) {
      return botResponses.football;
    } else {
      return botResponses.default;
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: generateResponse(inputValue),
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString(),
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickReplies = [
    "Tell me about skills",
    "Show me projects", 
    "How to contact?",
    "Football achievements",
    "GitHub repositories",
    "About Adeesha"
  ];

  const chatVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8, 
      y: 20,
      transition: { duration: 0.3 }
    },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        duration: 0.3,
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };

  const messageVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.3 }
    }
  };

  const typingVariants = {
    animate: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 0.6,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            onClick={() => setIsOpen(true)}
            className="relative bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* Pulsing Ring */}
            <motion.div
              className="absolute inset-0 rounded-full bg-purple-500"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 0, 0.7]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Icon */}
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FiMessageCircle size={24} />
            </motion.div>
            
            {/* Notification Badge */}
            <motion.div
              className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, type: "spring" }}
            >
              1
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mb-4 w-80 sm:w-96 h-[500px] bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-700/50 flex flex-col overflow-hidden"
            variants={chatVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {/* Header */}
            <motion.div 
              className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 flex items-center justify-between relative overflow-hidden"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {/* Animated Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-30"
                animate={{
                  x: [-50, 50, -50],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <div className="flex items-center space-x-3 relative z-10">
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={adeeshaImage}
                    alt="Adeesha"
                    className="w-10 h-10 rounded-full border-2 border-white/50 object-cover"
                  />
                  <motion.div
                    className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
                <div>
                  <h3 className="font-semibold text-white">Adeesha&apos;s AI Assistant</h3>
                  <p className="text-xs text-purple-100">Online • Ask me anything!</p>
                </div>
              </div>
              
              <motion.button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiX size={20} />
              </motion.button>
            </motion.div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-gray-800">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  variants={messageVariants}
                  initial="hidden"
                  animate="visible"
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-end space-x-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <motion.div
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                      whileHover={{ scale: 1.1 }}
                    >
                      {message.sender === 'user' ? (
                        <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                          <FiUser size={14} className="text-white" />
                        </div>
                      ) : (
                        <img
                          src={adeeshaImage}
                          alt="Bot"
                          className="w-8 h-8 rounded-full border border-purple-500/50 object-cover"
                        />
                      )}
                    </motion.div>
                    
                    <motion.div
                      className={`p-3 rounded-2xl relative ${
                        message.sender === 'user'
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                          : 'bg-gray-800 text-gray-100 border border-gray-700'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p className="text-sm">{message.text}</p>
                      <span className={`text-xs mt-1 block ${
                        message.sender === 'user' ? 'text-purple-100' : 'text-gray-400'
                      }`}>
                        {message.timestamp}
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex justify-start"
                >
                  <div className="flex items-end space-x-2">
                    <img
                      src={adeeshaImage}
                      alt="Bot typing"
                      className="w-8 h-8 rounded-full border border-purple-500/50 object-cover"
                    />
                    <div className="bg-gray-800 border border-gray-700 rounded-2xl p-3">
                      <motion.div className="flex space-x-1">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            variants={typingVariants}
                            animate="animate"
                            className="w-2 h-2 bg-purple-400 rounded-full"
                            transition={{ delay: i * 0.2 }}
                          />
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length <= 1 && (
              <motion.div 
                className="px-4 py-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-xs text-gray-400 mb-2">Quick questions:</p>
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply, index) => (
                    <motion.button
                      key={index}
                      onClick={() => {
                        setInputValue(reply);
                        setTimeout(handleSendMessage, 100);
                      }}
                      className="text-xs px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full hover:bg-purple-500/30 transition-colors border border-purple-500/30"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {reply}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Input Area */}
            <motion.div 
              className="p-4 border-t border-gray-700/50"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center space-x-2">
                <motion.button
                  className="text-gray-400 hover:text-purple-400 transition-colors p-2 rounded-full hover:bg-gray-800"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiPaperclip size={16} />
                </motion.button>
                
                <div className="flex-1 relative">
                  <textarea
                    ref={inputRef}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me about Adeesha's work..."
                    className="w-full bg-gray-800 text-gray-100 rounded-xl px-4 py-2 pr-10 resize-none h-10 focus:outline-none focus:ring-2 focus:ring-purple-500 border border-gray-700 placeholder-gray-400"
                    rows="1"
                  />
                  <motion.button
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-purple-400 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FiSmile size={16} />
                  </motion.button>
                </div>
                
                <motion.button
                  className="text-gray-400 hover:text-purple-400 transition-colors p-2 rounded-full hover:bg-gray-800"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiMic size={16} />
                </motion.button>
                
                <motion.button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: inputValue.trim() ? 1.1 : 1 }}
                  whileTap={{ scale: inputValue.trim() ? 0.9 : 1 }}
                >
                  <FiSend size={16} />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;
