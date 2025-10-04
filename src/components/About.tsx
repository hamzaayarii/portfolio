export default function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-cyan-400 font-semibold text-sm tracking-wider uppercase">Get to know me</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            LET ME <span className="gradient-text glow-effect">INTRODUCE</span> MYSELF
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 space-y-6 text-gray-300">
            <div className="bg-slate-800/30 border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300">
              <p className="text-lg leading-relaxed">
                👋 Hi! I'm a passionate <span className="text-cyan-400 font-semibold">Software Engineering Student</span> with 
                a strong focus on creating innovative solutions and learning new technologies every day.
              </p>
            </div>

            <div className="bg-slate-800/30 border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300">
              <p className="text-lg leading-relaxed">
                💻 I specialize in <span className="text-cyan-400 font-semibold">Full Stack Development</span> and <span className="text-cyan-400 font-semibold">DevOps</span>, 
                building modern web applications with cutting-edge technologies.
              </p>
            </div>

            <div className="bg-slate-800/30 border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300">
              <p className="text-lg leading-relaxed">
                🚀 My tech stack includes <span className="text-cyan-400 font-semibold">React, Node.js, Python, Docker, Kubernetes</span>, 
                and I'm always excited to explore emerging technologies.
              </p>
            </div>

            <div className="bg-slate-800/30 border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300">
              <p className="text-lg leading-relaxed">
                🎯 I believe in continuous learning, clean code, and building products that make a real impact. 
                Let's create something amazing together!
              </p>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-teal-500/30 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-cyan-500/40 shadow-2xl shadow-cyan-500/30 transform group-hover:scale-105 transition-all duration-500">
                  <img
                    src="/hamza.png"
                    alt="Hamza Ayari"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative rings */}
                <div className="absolute inset-0 rounded-full border-2 border-cyan-400/20 scale-110 animate-pulse"></div>
                <div className="absolute inset-0 rounded-full border-2 border-teal-400/20 scale-125 animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
