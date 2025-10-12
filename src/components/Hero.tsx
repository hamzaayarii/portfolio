import { Github, Linkedin, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [displayedText1, setDisplayedText1] = useState('');
  const [displayedText2, setDisplayedText2] = useState('');
  const fullText1 = 'Full Stack Developer';
  const fullText2 = '& DevOps Engineer';

  useEffect(() => {
    const startTyping = () => {
      let index1 = 0;
      const timer1 = setInterval(() => {
        if (index1 <= fullText1.length) {
          setDisplayedText1(fullText1.slice(0, index1));
          index1++;
        } else {
          clearInterval(timer1);
          // Start second text after first completes
          let index2 = 0;
          const timer2 = setInterval(() => {
            if (index2 <= fullText2.length) {
              setDisplayedText2(fullText2.slice(0, index2));
              index2++;
            } else {
              clearInterval(timer2);
              // Wait 2 seconds, then delete and restart
              setTimeout(() => {
                let deleteIndex2 = fullText2.length;
                const deleteTimer2 = setInterval(() => {
                  if (deleteIndex2 >= 0) {
                    setDisplayedText2(fullText2.slice(0, deleteIndex2));
                    deleteIndex2--;
                  } else {
                    clearInterval(deleteTimer2);
                    // Delete first text
                    let deleteIndex1 = fullText1.length;
                    const deleteTimer1 = setInterval(() => {
                      if (deleteIndex1 >= 0) {
                        setDisplayedText1(fullText1.slice(0, deleteIndex1));
                        deleteIndex1--;
                      } else {
                        clearInterval(deleteTimer1);
                        // Wait a bit then restart
                        setTimeout(startTyping, 500);
                      }
                    }, 50);
                  }
                }, 50);
              }, 2000);
            }
          }, 80);
        }
      }, 100);
    };

    startTyping();
  }, []);
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Profile Image with animated border */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-teal-500/30 rounded-full blur-2xl animate-pulse"></div>
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-cyan-500/50 shadow-2xl shadow-cyan-500/50 transform hover:scale-105 transition-all duration-500">
              <img
                src="/hamza-pic2.png"
                alt="Hamza Ayari"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback if image doesn't load
                  e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop";
                }}
              />
              {/* Green online indicator */}
              <div className="absolute top-4 right-4 w-5 h-5 bg-emerald-400 rounded-full border-4 border-slate-900 animate-pulse"></div>
            </div>
          </div>

          {/* Greeting Text */}
          <div className="space-y-4 animate-slide-in">
            <p className="text-gray-400 text-lg md:text-xl animate-fade-in">Hey, I'm Hamza Ayari</p>
            
            {/* Main Title with Typing Effect */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold min-h-[4rem] md:min-h-[5rem] lg:min-h-[6rem]">
              <span className="gradient-text glow-effect inline-block">
                {displayedText1}
                <span className="animate-pulse">|</span>
              </span>
            </h1>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white min-h-[3rem] md:min-h-[4rem] lg:min-h-[5rem]">
              <span className="text-cyan-400 inline-block">
                {displayedText2}
                {displayedText2.length > 0 && displayedText2.length < fullText2.length && (
                  <span className="animate-pulse">|</span>
                )}
              </span>
            </h2>
          </div>

          {/* Professional Description */}
          <div className="max-w-4xl">
            <p className="text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed">
              Full Stack Developer and DevOps Engineer, with expertise in <span className="text-cyan-400 font-semibold">React</span>, 
              <span className="text-cyan-400 font-semibold"> Node.js</span>, 
              <span className="text-cyan-400 font-semibold"> Docker</span>, and 
              <span className="text-cyan-400 font-semibold"> AWS</span>. 
              Proven track record of deploying production-ready applications, developing intelligent automation systems, 
              and architecting scalable cloud infrastructure. Software Engineering student with hands-on experience.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <a
              href="#contact"
              className="group flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 px-8 py-4 rounded-xl transition-all duration-300 btn-glow font-semibold text-lg"
            >
              <Mail size={20} />
              <span>Get In Touch</span>
            </a>
            <a
              href="#projects"
              className="flex items-center gap-2 bg-slate-800/50 hover:bg-slate-700/50 border border-cyan-500/30 hover:border-cyan-500/60 px-8 py-4 rounded-xl transition-all duration-300 font-semibold text-lg"
            >
              View My Work
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 pt-4">
            <div className="flex gap-4">
              <a 
                href="https://github.com/hamzaayarii" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-800/50 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={24} className="text-gray-300 hover:text-cyan-400" />
              </a>
              <a 
                href="https://www.linkedin.com/in/hamza-ayari-9003aa23b" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-800/50 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} className="text-gray-300 hover:text-cyan-400" />
              </a>
              <a 
                href="mailto:hamzaayari2026@gmail.com" 
                className="w-12 h-12 bg-slate-800/50 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail size={24} className="text-gray-300 hover:text-cyan-400" />
              </a>
            </div>
          </div>

          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-cyan-400 text-sm font-medium">Available for opportunities</span>
          </div>
        </div>
      </div>

      {/* Background gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none"></div>
    </section>
  );
}
