import { Code2, Server, Database, Cloud, Brain } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Programming Languages',
      skills: [
        { name: 'Python', description: 'High-level programming for AI & data science' },
        { name: 'JavaScript', description: 'Full-stack web development' },
        { name: 'R', description: 'Statistical computing & data visualization' },
        { name: 'C', description: 'System programming & performance-critical applications' },
        { name: 'C++', description: 'Object-oriented programming & game development' },
        { name: 'Shell Scripting', description: 'Automation & system administration' }
      ]
    },
    {
      icon: Server,
      title: 'Backend Development',
      subtitle: 'Full-Featured Web Framework',
      skills: [
        { name: 'Django', description: 'Python web framework for rapid development' },
        { name: 'Flask', description: 'Lightweight Python web framework' },
        { name: 'FastAPI', description: 'Modern, fast API framework for Python' },
        { name: 'RESTful APIs', description: 'Web service architecture for client-server communication' },
        { name: 'Microservices', description: 'Distributed architecture pattern' },
        { name: 'PostgreSQL', description: 'Advanced relational database system' }
      ]
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      skills: [
        { name: 'Python ML', description: 'Basic machine learning with Python' },
        { name: 'Scikit-learn', description: 'Simple ML models & algorithms' },
        { name: 'LangChain', description: 'Working with LLM applications' },
        { name: 'RAG Basics', description: 'Simple retrieval-augmented generation' },
        { name: 'OpenAI API', description: 'Integrating ChatGPT & GPT models' },
        { name: 'Hugging Face', description: 'Using pre-trained AI models' }
      ]
    },
    {
      icon: Database,
      title: 'Data & Visualization',
      skills: [
        { name: 'Pandas', description: 'Data manipulation & analysis' },
        { name: 'NumPy', description: 'Basic numerical computing' },
        { name: 'Matplotlib', description: 'Simple data visualization' },
        { name: 'Data Cleaning', description: 'Preparing data for analysis' },
        { name: 'CSV/JSON', description: 'Working with data formats' },
        { name: 'Basic SQL', description: 'Database queries & management' }
      ]
    },
    {
      icon: Database,
      title: 'UI/UX Design',
      skills: [
        { name: 'Figma', description: 'Interface design & prototyping tool' },
        { name: 'Wireframing', description: 'Basic layout sketching' },
        { name: 'Prototyping', description: 'Interactive mockup creation' },
        { name: 'User Flows', description: 'Mapping user journeys' },
        { name: 'Responsive Design', description: 'Mobile-friendly layouts' },
        { name: 'Color Theory', description: 'Basic color palette selection' }
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      skills: [
        { name: 'Azure ML', description: 'Microsoft cloud ML platform' },
        { name: 'AWS SageMaker', description: 'Amazon ML model training & deployment' },
        { name: 'Docker', description: 'Containerization platform' },
        { name: 'Jenkins', description: 'CI/CD automation server' },
        { name: 'MLflow', description: 'ML lifecycle management platform' },
        { name: 'Databricks', description: 'Unified analytics platform' }
      ]
    }
  ];

  return (
    <section id="skills" className="relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-cyan-400 font-semibold text-sm tracking-widest uppercase">My Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Skills & <span className="gradient-text glow-effect">Technologies</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Mastering cutting-edge technologies across AI, machine learning, and full-stack development to build intelligent, scalable solutions
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-cyan-500/30 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 shadow-xl hover:shadow-cyan-500/20 hover:scale-[1.02]"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-xl border border-cyan-500/30 group-hover:border-cyan-500/50 transition-all">
                  <category.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {category.title}
                  </h3>
                  {category.subtitle && (
                    <p className="text-xs text-gray-400 mt-0.5">{category.subtitle}</p>
                  )}
                </div>
              </div>

              {/* Skills Tags with Tooltips */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="relative group/tooltip">
                    <span
                      className="px-3 py-1.5 bg-slate-700/50 hover:bg-cyan-500/20 border border-slate-600/50 hover:border-cyan-500/50 rounded-lg text-sm text-gray-300 hover:text-cyan-400 transition-all duration-300 cursor-default hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 inline-block"
                    >
                      {skill.name}
                    </span>
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-slate-800 border border-cyan-500/50 rounded-lg text-xs text-gray-200 whitespace-nowrap opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-300 pointer-events-none z-10 shadow-xl shadow-cyan-500/20">
                      {skill.description}
                      {/* Tooltip Arrow */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
                        <div className="border-4 border-transparent border-t-cyan-500/50"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
