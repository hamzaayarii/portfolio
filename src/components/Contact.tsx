import { Github, Linkedin, Twitter, Instagram, Facebook, MapPin, Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const myEmail = 'hamzaayari2026@gmail.com';

  const socials = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/hamzaayarii', color: 'hover:bg-gray-700' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/hamza-ayari-9003aa23b', color: 'hover:bg-blue-700' },
    { icon: Twitter, label: 'Twitter', href: '#', color: 'hover:bg-blue-500' },
    { icon: Instagram, label: 'Instagram', href: '#', color: 'hover:bg-cyan-600' },
    { icon: Facebook, label: 'Facebook', href: '#', color: 'hover:bg-blue-600' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setStatusMessage('Sending your message...');

    try {
      // Using Formspree - Free service, works immediately
      // Replace FORM_ID with your form ID from formspree.io
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _replyto: formData.email,
          _subject: `New message from ${formData.name} - Portfolio Contact`
        }),
      });

      if (response.ok) {
        setStatus('success');
        setStatusMessage('Message sent successfully! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
        
        setTimeout(() => {
          setStatus('idle');
          setStatusMessage('');
        }, 5000);
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      console.error('Email send error:', error);
      setStatus('error');
      setStatusMessage('Failed to send message. Please try emailing me directly.');
      
      setTimeout(() => {
        setStatus('idle');
        setStatusMessage('');
      }, 5000);
    }
  };

  return (
    <section id="contact" className="relative py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-cyan-400 font-semibold text-sm tracking-wider uppercase">Get In Touch</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Let's <span className="gradient-text glow-effect">Connect</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-800/30 border border-cyan-500/20 rounded-3xl p-8 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300">
            <div className="border-b border-cyan-500/20 pb-4 mb-6">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <Mail className="text-cyan-400" size={28} />
                Drop Me a Message
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full bg-slate-900/50 border border-cyan-500/30 rounded-xl px-4 py-3 text-white placeholder-gray-400 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                />
                <div className="text-sm text-gray-400 mt-1 pl-1">Your Name</div>
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Your Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full bg-slate-900/50 border border-cyan-500/30 rounded-xl px-4 py-3 text-white placeholder-gray-400 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                />
                <div className="text-sm text-gray-400 mt-1 pl-1">Your Email Address</div>
              </div>

              <div>
                <textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="w-full bg-slate-900/50 border border-cyan-500/30 rounded-xl px-4 py-3 text-white placeholder-gray-400 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 resize-none transition-all"
                />
                <div className="text-sm text-gray-400 mt-1 pl-1">Your Message</div>
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-semibold py-3 rounded-xl transition-all btn-glow flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {status === 'sending' ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Mail size={20} />
                    Send Message
                  </>
                )}
              </button>

              {status === 'success' && (
                <div className="flex items-center gap-2 text-emerald-400 bg-emerald-900/20 border border-emerald-500/30 rounded-xl px-4 py-3">
                  <CheckCircle size={20} />
                  <span className="text-sm">{statusMessage}</span>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-400 bg-red-900/20 border border-red-500/30 rounded-xl px-4 py-3">
                  <AlertCircle size={20} />
                  <span className="text-sm">{statusMessage}</span>
                </div>
              )}
            </form>

            <div className="mt-6 pt-6 border-t border-cyan-500/20">
              <div className="flex items-center gap-2 text-gray-300">
                <Mail size={18} className="text-cyan-400" />
                <span className="text-sm">Email me directly at:</span>
              </div>
              <a 
                href={`mailto:${myEmail}`}
                className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm mt-2 block font-medium"
              >
                {myEmail}
              </a>
            </div>
          </div>

          <div className="bg-slate-800/30 border border-cyan-500/20 rounded-3xl p-8 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300">
            <div className="border-b border-cyan-500/20 pb-4 mb-6">
              <h3 className="text-2xl font-bold text-white">Connect With Me</h3>
            </div>

            <p className="text-gray-300 mb-8">
              Follow me on social media to stay updated with my latest projects and activities.
            </p>

            <div className="space-y-4">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-4 bg-slate-900/50 border border-cyan-500/30 rounded-xl px-6 py-4 transition-all hover:border-cyan-500 hover:bg-cyan-500/10 hover:translate-x-2 duration-300`}
                >
                  <social.icon size={24} className="text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span className="text-white font-medium">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-slate-800/30 border border-cyan-500/20 rounded-3xl p-8 backdrop-blur-sm">
          <div className="flex items-center justify-center gap-3 mb-6">
            <MapPin size={32} className="text-cyan-400" />
            <h3 className="text-3xl font-bold text-white">Find Me Here</h3>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden border-2 border-cyan-500/30">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d411520.8447396329!2d9.537499!3d33.886917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x125a4df25ec70ecb%3A0x8b1f94f1f7f67b7e!2sTunis%2C%20Tunisia!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="filter brightness-90 contrast-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
