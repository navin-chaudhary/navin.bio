import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';

const Chatbot = () => {
  const { isDark } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: "Hi! I'm Navin's AI assistant. I can help you learn about his skills, projects, and experience. What would you like to know?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const botResponses = {
    skills: "Navin is a Full Stack Developer with expertise in:\n\n• Frontend: React.js, Next.js, JavaScript (ES6+), TypeScript, HTML5, CSS3\n• Backend: Node.js, Express.js, Python, RESTful APIs\n• UI Frameworks: Bootstrap, Material-UI, ShadCN, Responsive Design\n• Database: MongoDB, SQL basics\n• Tools: VS Code, Git/GitHub, Postman\n• Payments: Cashfree, Stripe integration",
    
    experience: "Navin currently works as a Full Stack Developer at WAY2REACH (Vesio Energy Pvt Ltd.) since February 2025. His responsibilities include:\n\n• Building dynamic web apps using MERN stack\n• JWT authentication and security management\n• Payment gateway integration (Cashfree & Stripe)\n• Performance optimization and debugging\n• Agile team collaboration",
    
    projects: "Here are Navin's key projects:\n\n• E-Commerce: Full-featured online store with authentication and payment integration\n• Home Finder: Real estate platform with property listings, search filters, and detailed property information\n• Gituser: GitHub profile viewer with user data fetching\n• Weather App: Comprehensive weather information with forecasts\n• News Website: NYT API integration with search and filtering\n\nAll projects are responsive and showcase his full-stack capabilities.",
    
    contact: "You can reach Navin through:\n\n• Email: heynavin.im@gmail.com\n• Phone: +91 9157154504\n• GitHub: github.com/navin-chaudhary\n• LinkedIn: linkedin.com/in/navinchaudhary9\n• Portfolio: navin-bio.vercel.app",
    
    education: "Navin studied Computer Engineering at LDRP Institute of Technology and Research in Gandhinagar (Jul 2023 – Apr 2024). He's primarily self-taught, learning the MERN stack through YouTube tutorials and building real-world projects to gain practical experience in Next.js, TypeScript, and modern web development.",
    
    default: "I can help you with information about Navin's skills, experience, projects, contact details, or education. Just ask me about any of these topics!"
  };

  const quickReplies = [
    "Skills & Tech",
    "Experience",
    "Projects",
    "Contact Info",
    "Education"
  ];

  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('skill') || message.includes('tech') || message.includes('technology')) {
      return botResponses.skills;
    } else if (message.includes('experience') || message.includes('work') || message.includes('job')) {
      return botResponses.experience;
    } else if (message.includes('project') || message.includes('portfolio') || message.includes('app')) {
      return botResponses.projects;
    } else if (message.includes('contact') || message.includes('email') || message.includes('phone') || message.includes('reach')) {
      return botResponses.contact;
    } else if (message.includes('education') || message.includes('study') || message.includes('degree') || message.includes('college')) {
      return botResponses.education;
    } else {
      return botResponses.default;
    }
  };

  const handleSendMessage = async (message = inputValue) => {
    if (!message.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      text: message,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        type: 'bot',
        text: getBotResponse(message),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleQuickReply = (reply) => {
    handleSendMessage(reply);
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 ${
          isDark
            ? 'bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] text-white hover:shadow-blue-500/50'
            : 'bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] text-white hover:shadow-blue-500/50'
        }`}
      >
        {isOpen ? <FaTimes size={24} /> : <FaRobot size={24} />}
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className={`fixed bottom-24 right-6 z-40 w-96 h-[500px] rounded-2xl shadow-2xl transition-all duration-300 ${
          isDark 
            ? 'bg-[#151212] border border-[#272627] shadow-blue-500/10' 
            : 'bg-white border border-[#e2e8f0] shadow-blue-500/20'
        }`}>
          {/* Header */}
          <div className={`p-6 border-b rounded-t-2xl ${
            isDark 
              ? 'border-[#272627] bg-gradient-to-r from-[#242323] to-[#2d2c2c]' 
              : 'border-[#e2e8f0] bg-gradient-to-r from-gray-50 to-white'
          }`}>
            <div className="flex items-center gap-4">
              <div className={`relative p-3 rounded-full ${
                isDark ? 'bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6]' : 'bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6]'
              }`}>
                <FaRobot className="text-white" size={20} />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h3 className={`font-bold text-lg ${
                  isDark ? 'text-white' : 'text-[#1e293b]'
                }`}>
                  Navin's AI Assistant
                </h3>
                <p className={`text-sm ${
                  isDark ? 'text-[#c2c1c1]' : 'text-[#64748b]'
                }`}>
                  Online • Ask me anything about Navin!
                </p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="h-80 p-6 space-y-4 overflow-y-auto">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[85%] p-4 rounded-2xl shadow-sm ${
                  message.type === 'user'
                    ? isDark
                      ? 'bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] text-white'
                      : 'bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] text-white'
                    : isDark
                    ? 'bg-[#242323] text-[#c2c1c1] border border-[#272627]'
                    : 'bg-gray-100 text-[#64748b] border border-[#e2e8f0]'
                }`}>
                  <p className="text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
                  <p className={`text-xs mt-2 ${
                    message.type === 'user'
                      ? 'text-blue-100'
                      : isDark ? 'text-[#9e9ea4]' : 'text-[#94a3b8]'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className={`max-w-[85%] p-4 rounded-2xl ${
                  isDark ? 'bg-[#242323] text-[#c2c1c1] border border-[#272627]' : 'bg-gray-100 text-[#64748b] border border-[#e2e8f0]'
                }`}>
                  <div className="flex items-center gap-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-[#3b82f6] rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-[#3b82f6] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-[#3b82f6] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                    <span className="text-xs">AI is typing...</span>
                  </div>
                </div>
              </div>
            )}
            
            {/* Quick Replies */}
            {messages.length === 1 && !isTyping && (
              <div className="space-y-2">
                <p className={`text-xs text-center ${
                  isDark ? 'text-[#9e9ea4]' : 'text-[#94a3b8]'
                }`}>
                  Quick questions:
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {quickReplies.map((reply, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickReply(reply)}
                      className={`px-3 py-2 text-xs rounded-full transition-all duration-300 hover:scale-105 ${
                        isDark 
                          ? 'bg-[#242323] text-[#c2c1c1] hover:bg-[#2d2c2c] hover:text-[#3b82f6] border border-[#272627]' 
                          : 'bg-gray-100 text-[#64748b] hover:bg-gray-200 hover:text-[#3b82f6] border border-[#e2e8f0]'
                      }`}
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className={`p-6 border-t rounded-b-2xl ${
            isDark ? 'border-[#272627] bg-[#242323]' : 'border-[#e2e8f0] bg-gray-50'
          }`}>
            <div className="flex gap-3">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className={`flex-1 px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300 ${
                  isDark
                    ? 'bg-[#2d2c2c] text-white border border-[#272627] focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/20'
                    : 'bg-white text-[#1e293b] border border-[#e2e8f0] focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/20'
                }`}
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!inputValue.trim()}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  inputValue.trim()
                    ? isDark
                      ? 'bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] text-white hover:shadow-lg'
                      : 'bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] text-white hover:shadow-lg'
                    : isDark
                    ? 'bg-[#2d2c2c] text-[#64748b] cursor-not-allowed'
                    : 'bg-gray-200 text-[#94a3b8] cursor-not-allowed'
                }`}
              >
                <FaPaperPlane size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
