export default function Certifications() {
  const certifications = [
    {
      title: 'Microsoft Azure Fundamentals',
      issuer: 'Microsoft',
      name: 'Hamza Ayari',
      date: 'Earned Credential',
      link: 'https://learn.microsoft.com/fr-fr/users/hamzaayari-7517/achievements/45van35k',
      image: '/azure-certificate.png',
      gradient: 'from-cyan-400 to-blue-500'
    },
    {
      title: 'Hedera Hashgraph Certification',
      issuer: 'Hedera',
      name: 'Hamza Ayari',
      date: 'Earned Credential',
      link: '/hedera-hashgraphe.pdf',
      image: '/hedera-certificate.png',
      gradient: 'from-purple-400 to-pink-500'
    }
  ];

  return (
    <section id="certifications" className="relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Earned <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-gray-400">Professional certifications and achievements</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover bg-gradient-to-br from-cyan-900/20 to-teal-900/20 border border-cyan-500/30 rounded-xl overflow-hidden backdrop-blur-sm block transition-transform hover:scale-105"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">{cert.title}</h3>
                  <p className="text-sm text-cyan-400">{cert.issuer}</p>
                </div>
              </div>
              <div className="h-2 bg-gradient-to-r from-cyan-500 to-teal-500"></div>
              
              {/* View Certificate Badge */}
              <div className="p-4 text-center">
                <span className="inline-flex items-center gap-2 text-cyan-400 text-sm font-semibold hover:text-cyan-300 transition-colors">
                  View Certificate
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
