import { Github, Play } from 'lucide-react';
import { useState } from 'react';

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filters = [
    { label: 'All', count: 5 },
    { label: 'Web', count: 4 },
    { label: 'Backend', count: 3 },
    { label: 'DevOps', count: 2 },
    { label: 'Machine Learning', count: 1 },
    { label: 'Desktop', count: 2 },
    { label: 'E-Commerce', count: 1 },
    { label: 'IoT', count: 1 }
  ];

  const projects = [
    {
      title: 'Kanz - Intelligent Accounting Solution',
      description: 'Development of an intelligent accounting management solution for Tunisian SMEs, integrating automated functionalities and a revenue prediction module based on machine learning.',
      image: 'https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Web', 'Backend', 'Machine Learning'],
      technologies: ['React.js', 'Express.js', 'MongoDB', 'Socket.IO', 'ML', 'RAG Chatbot'],
      period: 'January 2025 - May 2025',
      github: '',
      demo: ''
    },
    {
      title: 'DevOps CI/CD Project',
      description: 'Implementation of complete CI/CD pipelines for full-stack application (Spring Boot/Angular): automated build/tests/deployment with Jenkins, SonarQube quality analysis, Docker containerization, Prometheus/Grafana monitoring with real-time dashboards and alerting.',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['DevOps', 'Backend', 'Web'],
      technologies: ['Jenkins', 'Maven', 'JUnit', 'Karma/Jasmine', 'Docker', 'SonarQube', 'Prometheus', 'Grafana'],
      period: 'February 2025 - April 2025',
      github: '',
      demo: ''
    },
    {
      title: 'Batah.tn - E-Commerce Platform',
      description: 'Design and development of integrated applications for stock and order management (Java desktop and Symfony web), with payment integration, interactive maps, and notifications.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Web', 'Backend', 'E-Commerce'],
      technologies: ['Java', 'Symfony', 'MySQL', 'Git', 'Google Maps API', 'Stripe'],
      period: 'January 2024 - May 2024',
      github: '',
      demo: ''
    },
    {
      title: 'Smart Technical Visit Center',
      description: 'Development of a desktop application for personnel management and administrative optimization, with hardware integration via Arduino.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Desktop', 'IoT'],
      technologies: ['Qt', 'C++', 'Arduino', 'SQL'],
      period: 'January 2023 - May 2023',
      github: '',
      demo: ''
    },
    {
      title: 'Chifouri - Vehicle Rental Platform',
      description: 'Creation of a vehicle reservation website with drivers, based on UML modeling and relational database management.',
      image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Web', 'Backend'],
      technologies: ['HTML', 'CSS', 'PHP', 'MySQL', 'GitHub'],
      period: 'January 2022 - May 2022',
      github: '',
      demo: ''
    }
  ];

  return (
    <section id="projects" className="relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            My Creative <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-gray-400">Here are some of the projects I've worked on</p>
        </div>

        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {filters.map((filter) => (
            <button
              key={filter.label}
              onClick={() => setSelectedFilter(filter.label)}
              className={`px-4 py-2 rounded-full transition-all ${
                selectedFilter === filter.label
                  ? 'bg-cyan-600 text-white'
                  : 'bg-cyan-900/40 text-gray-300 hover:bg-cyan-800/40 border border-cyan-500/30'
              }`}
            >
              {filter.label} <span className="text-xs ml-1">{filter.count}</span>
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card-hover bg-gradient-to-br from-cyan-900/20 to-teal-900/20 border border-cyan-500/30 rounded-xl overflow-hidden backdrop-blur-sm group"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] to-transparent"></div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold gradient-text">{project.title}</h3>
                </div>
                <p className="text-xs text-cyan-400 mb-3">{project.period}</p>
                <p className="text-gray-300 mb-4 leading-relaxed text-sm">{project.description}</p>

                <div className="mb-3">
                  <p className="text-xs text-gray-400 mb-2">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-cyan-900/40 border border-cyan-500/30 rounded text-xs text-cyan-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-teal-900/40 border border-teal-500/30 rounded-full text-xs text-teal-300 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button 
                    className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={!project.github}
                  >
                    <Github size={16} />
                    GitHub
                  </button>
                  <button 
                    className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={!project.demo}
                  >
                    <Play size={16} />
                    Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
