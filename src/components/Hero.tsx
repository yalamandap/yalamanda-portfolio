import { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Code } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    'Full Stack Developer',
    'AI Enthusiast',
    'Problem Solver',
    'Software Engineer'
  ];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));
      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-teal-900/20"></div>
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Spacer */}
      <div className="mt-6" />

      <div className="text-center z-10 px-4 max-w-4xl mx-auto">
        {/* Profile Image */}
        <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-400 to-teal-400 p-1 animate-pulse">
          <img
            src="https://i.postimg.cc/DzTVjNk4/IMG-20241228-WA0139-1.jpg"
            alt="Papana Yalamanda Rao"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* Name and Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-teal-400 to-blue-400 bg-clip-text text-transparent animate-fade-in">
          Papana Yalamanda Rao
        </h1>

        <div className="text-2xl md:text-3xl text-gray-300 mb-8 h-12">
          <span className="border-r-2 border-blue-400 animate-pulse">
            {text}
          </span>
        </div>

        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Final-year B.Tech IT student with a passion for creating innovative solutions 
          through code. Specializing in Full Stack Development and AI integration.
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://github.com/yalamandap"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-slate-800/50 text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/yalamanda-rao-papana-5309b9284"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-slate-800/50 text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:yalamandap6@gmail.com"
            className="p-3 rounded-full bg-slate-800/50 text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110"
          >
            <Mail size={24} />
          </a>
          <a
            href="https://leetcode.com/u/chinnu_naidu/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-slate-800/50 text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110"
          >
            <Code size={24} />
          </a>
        </div>

        {/* CTA Button */}
        <button
          onClick={scrollToAbout}
          className="group bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
        >
          Explore My Work
          <ChevronDown className="ml-2 inline-block group-hover:translate-y-1 transition-transform" size={20} />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-blue-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-400 rounded-full animate-bounce mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
