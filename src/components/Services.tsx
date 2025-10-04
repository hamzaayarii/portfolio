import { Monitor, Smartphone, Hexagon } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Monitor,
      title: 'Web Development',
      description: 'Elegant, scalable, and easy to use responsive web applications build using modern technologies and best practices.',
      tags: ['React', 'Nextjs', 'Angular', 'OpenAI', 'Spring Boot']
    },
    {
      icon: Smartphone,
      title: 'Mobile Application',
      description: 'Optimized native applications with intuitive UIs, powered by scalable back-ends, tailored for your business requirements.',
      tags: ['React Native', 'Flutter', 'FireBase', 'Swift']
    },
    {
      icon: Hexagon,
      title: 'Blockchain Development',
      description: 'Next-generation blockchain applications that combine security, transparency and usability for the web3 ecosystem.',
      tags: ['Solidity', 'Web3j', 'Ethereum', 'Smart Contracts']
    }
  ];

  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            I provide comprehensive solutions for your digital needs with cutting-edge technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-hover bg-gradient-to-br from-cyan-900/20 to-teal-900/20 border border-cyan-500/30 rounded-xl p-8 backdrop-blur-sm"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-cyan-500/20 p-4 rounded-lg">
                  <service.icon size={40} className="text-cyan-400" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-center mb-4 text-white">
                {service.title}
              </h3>

              <p className="text-gray-300 text-center mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2 justify-center">
                {service.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-cyan-900/40 border border-cyan-500/30 rounded-full text-sm text-cyan-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block bg-gradient-to-br from-cyan-900/40 to-teal-900/40 border border-cyan-500/30 rounded-xl p-12 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4 gradient-text">#OpenToWork</h3>
            <p className="text-xl mb-6 text-white">Need a Platform Engineer?</p>
            <p className="text-gray-300 max-w-2xl mb-8">
              I provide freelance services in software development, system architecture, code optimization.
              With extensive experience in various technologies, I can deliver high-quality, scalable solutions
              tailored to your business needs.
            </p>
            <p className="text-gray-300 mb-8">
              Let's collaborate to bring your projects to life.
            </p>
            <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
