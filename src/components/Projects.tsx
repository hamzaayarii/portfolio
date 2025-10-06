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
      badge: 'Featured',
      badgeColor: 'from-purple-500 to-pink-500',
      iconBg: 'from-purple-600/20 to-pink-600/20',
      github: 'https://github.com/hamzaayarii',
      demo: 'https://portfolio-liard-two-nd8q6jb4em.vercel.app'
    },
    {
      title: 'DevOps CI/CD Project',
      description: 'Implementation of complete CI/CD pipelines for full-stack application (Spring Boot/Angular): automated build/tests/deployment with Jenkins, SonarQube quality analysis, Docker containerization, Prometheus/Grafana monitoring with real-time dashboards and alerting.',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['DevOps', 'Backend', 'Web'],
      technologies: ['Jenkins', 'Maven', 'JUnit', 'Karma/Jasmine', 'Docker', 'SonarQube', 'Prometheus', 'Grafana'],
      period: 'February 2025 - April 2025',
      badge: 'Featured',
      badgeColor: 'from-green-500 to-emerald-500',
      iconBg: 'from-green-600/20 to-emerald-600/20',
      github: 'https://github.com/hamzaayarii',
      demo: 'https://portfolio-liard-two-nd8q6jb4em.vercel.app'
    },
    {
      title: 'Batah.tn - E-Commerce Platform',
      description: 'Design and development of integrated applications for stock and order management (Java desktop and Symfony web), with payment integration, interactive maps, and notifications.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Web', 'Backend', 'E-Commerce'],
      technologies: ['Java', 'Symfony', 'MySQL', 'Git', 'Google Maps API', 'Stripe'],
      period: 'January 2024 - May 2024',
      badge: '',
      badgeColor: 'from-cyan-500 to-blue-500',
      iconBg: 'from-cyan-600/20 to-blue-600/20',
      github: 'https://github.com/hamzaayarii',
      demo: 'https://portfolio-liard-two-nd8q6jb4em.vercel.app'
    },
    {
      title: 'Smart Technical Visit Center',
      description: 'Development of a desktop application for personnel management and administrative optimization, with hardware integration via Arduino.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Desktop', 'IoT'],
      technologies: ['Qt', 'C++', 'Arduino', 'SQL'],
      period: 'January 2023 - May 2023',
      badge: '',
      badgeColor: 'from-red-500 to-orange-500',
      iconBg: 'from-red-600/20 to-orange-600/20',
      github: 'https://github.com/hamzaayarii',
      demo: ''
    },
    {
      title: 'Chifouri - Vehicle Rental Platform',
      description: 'Creation of a vehicle reservation website with drivers, based on UML modeling and relational database management.',
      image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Web', 'Backend'],
      technologies: ['HTML', 'CSS', 'PHP', 'MySQL', 'GitHub'],
      period: 'January 2022 - May 2022',
      badge: '',
      badgeColor: 'from-indigo-500 to-purple-500',
      iconBg: 'from-indigo-600/20 to-purple-600/20',
      github: 'https://github.com/hamzaayarii',
      demo: ''
    }
  ];

  // Filter projects based on selected filter
  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(selectedFilter));

  return (
    <section id="projects" className="relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-cyan-400 font-semibold text-sm tracking-wider uppercase">My Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text glow-effect">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Showcasing innovative web solutions and machine learning applications
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {filters.map((filter) => (
            <button
              key={filter.label}
              onClick={() => setSelectedFilter(filter.label)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                selectedFilter === filter.label
                  ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-lg shadow-cyan-500/50 scale-105'
                  : 'bg-slate-800/50 text-gray-300 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-500/50 hover:scale-105'
              }`}
            >
              {filter.label} <span className="text-xs ml-1 opacity-75">{filter.count}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-cyan-500/30 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 hover:scale-[1.02]"
            >
              {/* Image Section with Gradient Overlay */}
              <div className="relative overflow-hidden h-56">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.iconBg} opacity-50 group-hover:opacity-70 transition-opacity duration-500 z-10`}></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-2 transition-all duration-700"
                />
                
                {/* Featured Badge */}
                {project.badge && (
                  <div className="absolute top-4 right-4 z-20">
                    <span className={`px-3 py-1 bg-gradient-to-r ${project.badgeColor} text-white text-xs font-bold rounded-full shadow-lg animate-pulse`}>
                      {project.badge}
                    </span>
                  </div>
                )}

                {/* Hover Overlay with Links */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-xl hover:bg-cyan-500 hover:border-cyan-500 flex items-center gap-2 font-semibold"
                  >
                    <Github size={20} />
                    View Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-xl hover:bg-teal-500 hover:border-teal-500 flex items-center gap-2 font-semibold"
                    >
                      <Play size={20} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 space-y-4">
                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-300 transition-colors">
                  {project.description}
                </p>

                {/* Technologies */}
                <div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-slate-700/50 border border-slate-600/50 rounded text-xs text-gray-300 hover:bg-cyan-500/20 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
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
