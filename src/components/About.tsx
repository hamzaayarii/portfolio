export default function About() {
  return (
    <section id="education" className="relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-cyan-400 font-semibold text-sm tracking-widest uppercase">My Background</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            My <span className="gradient-text glow-effect">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 shadow-xl hover:shadow-cyan-500/20 hover:scale-[1.02]">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-cyan-500/30 transition-all duration-300">
                  <img 
                    src="/esprit-logo.png" 
                    alt="ESPRIT Logo" 
                    className="w-14 h-14 object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        parent.innerHTML = '<span class="text-cyan-600 font-bold text-2xl">ESPRIT</span>';
                      }
                    }}
                  />
                </div>
              </div>

              <div className="flex-1 space-y-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors">ESPRIT Engineering School</h3>
                  <span className="inline-flex items-center px-4 py-2 bg-cyan-500/20 border border-cyan-500/40 rounded-full text-cyan-400 text-sm font-semibold">
                    In Progress
                  </span>
                </div>

                <div>
                  <p className="text-cyan-400 font-semibold text-xl mb-2">
                    Software Engineering Degree
                  </p>
                  <p className="text-gray-400 flex flex-wrap items-center gap-2">
                    <span>September 2021 - August 2026</span>
                    <span>•</span>
                    <span>Tunis, Tunisia</span>
                  </p>
                </div>

                <div className="pt-2">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Specialization in <span className="text-cyan-400 font-semibold">Web and Internet Technologies (TWIN)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
