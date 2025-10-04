import { useState } from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  const experiences = [
    {
      role: 'Engineering Intern',
      company: '3S Spring',
      companyUrl: 'https://3sspring.com',
      location: 'Tunis, Tunisia',
      period: 'July 2025 - September 2025',
      description: 'Designed and developed a comprehensive ERP platform for internship management with modern UI/UX design.',
      responsibilities: [
        'Created intuitive UI/UX interfaces using Figma',
        'Built full-stack application with MERN stack (React.js, Node.js, Express.js, MongoDB)',
        'Implemented DevOps practices: CI/CD pipelines, Docker containerization',
        'Integrated quality monitoring tools (Jenkins, SonarQube) and version control (Bitbucket)'
      ],
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Docker', 'Jenkins', 'SonarQube', 'Bitbucket', 'Figma']
    },
    {
      role: 'Summer Intern - Security',
      company: 'Tunisie Telecom',
      companyUrl: 'https://www.tunisietelecom.tn/entreprise',
      location: 'Tunis, Tunisia',
      period: 'June 2024 - August 2024',
      description: 'Designed and deployed an open-source security audit solution for networks and web applications.',
      responsibilities: [
        'Deployed specialized security tools (VMware, Kali Linux, Jok3r)',
        'Performed penetration testing on networks and web applications',
        'Identified system vulnerabilities and security weaknesses',
        'Produced comprehensive and actionable audit reports'
      ],
      technologies: ['VMware', 'Kali Linux', 'Jok3r', 'Metasploitable', 'Pentesting']
    },
    {
      role: 'Summer Intern - Infrastructure',
      company: 'Tunisie Telecom',
      companyUrl: 'https://www.tunisietelecom.tn/entreprise',
      location: 'Tunis, Tunisia',
      period: 'August 2022 - September 2022',
      description: 'Gained hands-on experience in telecommunications infrastructure operations.',
      responsibilities: [
        'Assisted in installation of telecommunications equipment',
        'Performed maintenance on network infrastructure',
        'Provided technical support for system troubleshooting',
        'Learned industry best practices for telecom operations'
      ],
      technologies: ['Network Infrastructure', 'Telecommunications', 'Technical Support']
    }
  ];

  return (
    <section id="experience" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">My professional journey and accomplishments</p>
        </div>

        <div className="relative">
          {/* Timeline line - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-500 to-teal-500"></div>
          
          {/* Mobile timeline line - left side */}
          <div className="md:hidden absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-cyan-500 to-teal-500"></div>

          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                } justify-start`}
              >
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'} pl-12 md:pl-0`}>
                  <div className="card-hover bg-gradient-to-br from-cyan-900/20 to-teal-900/20 border border-cyan-500/30 rounded-xl p-4 sm:p-6 backdrop-blur-sm">
                    <div className={`flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mb-3 sm:mb-4 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                      <Briefcase size={20} className="text-cyan-400 sm:w-6 sm:h-6" />
                      <h3 className="text-xl sm:text-2xl font-bold gradient-text">{exp.role}</h3>
                    </div>

                    <a 
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg sm:text-xl font-semibold text-white hover:text-cyan-400 transition-colors inline-flex items-center gap-2 mb-2"
                    >
                      <ExternalLink size={16} className="text-cyan-400 sm:w-[18px] sm:h-[18px]" />
                      {exp.company}
                    </a>

                    <div className={`flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mb-3 sm:mb-4 text-gray-400 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} className="sm:w-4 sm:h-4" />
                        <span className="text-xs sm:text-sm">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} className="sm:w-4 sm:h-4" />
                        <span className="text-xs sm:text-sm">{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-3 sm:mb-4 leading-relaxed font-medium text-sm sm:text-base text-left">{exp.description}</p>

                    {expandedIndex === index && (
                      <>
                        <ul className={`space-y-2 mb-3 sm:mb-4 text-left ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                          {exp.responsibilities.map((resp, respIndex) => (
                            <li key={respIndex} className={`text-gray-400 text-xs sm:text-sm flex items-start gap-2 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                              <span className="text-cyan-400 mt-1">•</span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>

                        <div className={`flex flex-wrap gap-2 justify-start ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 sm:px-3 py-1 bg-cyan-900/40 border border-cyan-500/30 rounded-full text-xs text-cyan-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </>
                    )}

                    <button
                      onClick={() => toggleExpand(index)}
                      className={`mt-3 sm:mt-4 flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors ${index % 2 === 0 ? 'md:ml-auto' : ''}`}
                    >
                      <span className="text-xs sm:text-sm font-medium">
                        {expandedIndex === index ? 'Show Less' : 'Show More'}
                      </span>
                      {expandedIndex === index ? <ChevronUp size={14} className="sm:w-4 sm:h-4" /> : <ChevronDown size={14} className="sm:w-4 sm:h-4" />}
                    </button>
                  </div>
                </div>

                {/* Timeline dot - desktop center, mobile left */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-cyan-500 rounded-full border-2 sm:border-4 border-[#0a0a1a] -translate-x-1/2 md:translate-x-0"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
