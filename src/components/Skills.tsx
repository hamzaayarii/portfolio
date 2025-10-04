import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('languages');

  const tabs = [
    { id: 'languages', label: 'Languages' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'databases', label: 'Databases' },
    { id: 'devops', label: 'DevOps' },
    { id: 'tools', label: 'Tools' }
  ];

  const skills = {
    languages: [
      { name: 'Java', icon: '☕' },
      { name: 'C++', icon: 'C++' },
      { name: 'Golang', icon: 'Go' },
      { name: 'Dart', icon: '🎯' },
      { name: 'JavaScript', icon: 'JS' }
    ],
    frontend: [
      { name: 'React', icon: '⚛️' },
      { name: 'Angular', icon: '🅰️' },
      { name: 'Vue', icon: '💚' },
      { name: 'Next.js', icon: '▲' }
    ],
    backend: [
      { name: 'Node.js', icon: '🟢' },
      { name: 'Express', icon: '🚂' },
      { name: 'Spring Boot', icon: '🍃' },
      { name: 'Django', icon: '🐍' }
    ],
    databases: [
      { name: 'MongoDB', icon: '🍃' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'MySQL', icon: '🐬' },
      { name: 'Redis', icon: '📮' }
    ],
    devops: [
      { name: 'Docker', icon: '🐳' },
      { name: 'Kubernetes', icon: '☸️' },
      { name: 'Jenkins', icon: '🔧' },
      { name: 'AWS', icon: '☁️' }
    ],
    tools: [
      { name: 'Git', icon: '📚' },
      { name: 'VS Code', icon: '💻' },
      { name: 'Postman', icon: '📮' },
      { name: 'Figma', icon: '🎨' }
    ]
  };

  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Professional <span className="gradient-text">Skills & Tools</span>
          </h2>
        </div>

        <div className="bg-gradient-to-br from-cyan-900/20 to-teal-900/20 border border-cyan-500/30 rounded-xl p-8 backdrop-blur-sm">
          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-lg transition-all ${
                  activeTab === tab.id
                    ? 'bg-cyan-600 text-white'
                    : 'bg-cyan-900/40 text-gray-300 hover:bg-cyan-800/40'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="relative">
            <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
              {tabs.find(t => t.id === activeTab)?.label === 'Languages' ? 'Programming Languages' : tabs.find(t => t.id === activeTab)?.label}
            </h3>

            <div className="flex items-center justify-center gap-8">
              <button className="text-cyan-400 hover:text-cyan-300">
                <ChevronLeft size={32} />
              </button>

              <div className="grid grid-cols-5 gap-8 max-w-4xl">
                {skills[activeTab as keyof typeof skills].map((skill, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-3 p-4 bg-cyan-900/20 rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition-all card-hover"
                  >
                    <div className="text-4xl">{skill.icon}</div>
                    <span className="text-sm text-gray-300">{skill.name}</span>
                  </div>
                ))}
              </div>

              <button className="text-cyan-400 hover:text-cyan-300">
                <ChevronRight size={32} />
              </button>
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full ${
                    i === 0 ? 'bg-cyan-500' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>

            <div className="text-center mt-6 text-sm text-cyan-400">
              Swipe Autopilot
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
