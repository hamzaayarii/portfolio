import { Download } from 'lucide-react';

export default function Resume() {
  return (
    <section id="resume" className="relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            My <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-gray-400 mb-6">Download or view my professional resume</p>
          
          {/* Download CV Button */}
          <a
            href="/cv.pdf"
            download="Hamza_Ayari_CV.pdf"
            className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            <Download size={20} />
            Download Resume
          </a>
        </div>

        {/* CV Viewer */}
        <div className="bg-gradient-to-br from-cyan-900/20 to-teal-900/20 border border-cyan-500/30 rounded-xl overflow-hidden backdrop-blur-sm p-4">
          <div className="bg-white rounded-lg overflow-hidden" style={{ height: '800px' }}>
            <iframe
              src="/cv.pdf"
              className="w-full h-full"
              title="Resume PDF"
            />
          </div>
        </div>

        {/* Alternative: If iframe doesn't work, show this message */}
        <div className="text-center mt-6">
          <p className="text-gray-400 text-sm">
            If the PDF doesn't display above, you can{' '}
            <a 
              href="/cv.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 underline"
            >
              open it in a new tab
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
