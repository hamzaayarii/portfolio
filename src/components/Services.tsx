import { Lightbulb, Rocket, Code2, CheckCircle2, Zap } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Lightbulb,
      iconColor: 'from-purple-500 to-pink-500',
      title: 'AI Integration & Solutions',
      description: 'Building simple AI-powered features using existing models and APIs.',
      keyFeatures: [
        'ChatGPT & OpenAI API Integration',
        'Pre-trained Model Implementation',
        'Data Analysis & Visualization',
        'Chatbot Development'
      ],
      technologies: ['Python', 'OpenAI API', 'Scikit-learn', 'Pandas', 'LangChain', 'Hugging Face'],
      deliverables: 'Functional AI features integrated into your applications'
    },
    {
      icon: Rocket,
      iconColor: 'from-orange-500 to-red-500',
      title: 'MVP Development for Startups',
      description: 'Rapid prototyping and MVP development to validate your startup ideas quickly.',
      keyFeatures: [
        'Rapid Prototype Development',
        'Full-Stack Web Applications',
        'API Development & Integration',
        'Cloud Deployment & Scalability'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'CI/CD'],
      deliverables: 'Functional MVP ready for user testing and investor demos'
    }
  ];

  return (
    <section id="services" className="relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-cyan-400 font-semibold text-sm tracking-widest uppercase">What I Offer</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            My <span className="gradient-text glow-effect">Services</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Transforming ideas into stunning, high-performance web applications that bring visions to life
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 shadow-xl hover:shadow-cyan-500/20 hover:scale-[1.02]"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className={`inline-flex p-4 bg-gradient-to-br ${service.iconColor} rounded-xl shadow-lg`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Key Features */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <h4 className="text-white font-semibold">Key Features</h4>
                </div>
                <ul className="space-y-2">
                  {service.keyFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-1.5 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Code2 className="w-5 h-5 text-cyan-400" />
                  <h4 className="text-white font-semibold">Technologies</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-700/50 hover:bg-cyan-500/20 border border-slate-600/50 hover:border-cyan-500/50 rounded-lg text-xs text-gray-300 hover:text-cyan-400 transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div className="pt-4 border-t border-slate-700/50">
                <div className="flex items-start gap-2">
                  <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-semibold mb-1 text-sm">Deliverables</h4>
                    <p className="text-gray-400 text-sm">{service.deliverables}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
