import { Gamepad2, Music, Plane } from 'lucide-react';

export default function AboutDetailed() {
  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Know Who <span className="gradient-text">I'M</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-gray-300">
            <p className="text-lg leading-relaxed">
              Hi Everyone, I am{' '}
              <span className="text-purple-400 font-semibold">Hamza Ayari</span> from{' '}
              <span className="text-purple-400 font-semibold">Tunisia</span>.
            </p>

            <p className="text-lg leading-relaxed text-justify">
              Focused and quick-learning IT Engineering Student with experience in computer science
              and programming with a pro-active approach and experience in full lifecycle in
              development, programming, quality assurance, support and implementation and I enjoy
              working collaboratively with a high- performance development team in achieving
              technical and project objectives.
            </p>

            <div className="pt-6">
              <p className="text-lg mb-4">Apart from coding, some other activities that I love to do!</p>
              <div className="space-y-3 pl-4">
                <div className="flex items-center gap-3">
                  <Gamepad2 size={20} className="text-purple-400" />
                  <span>Playing Games</span>
                </div>
                <div className="flex items-center gap-3">
                  <Music size={20} className="text-purple-400" />
                  <span>scout</span>
                </div>
                <div className="flex items-center gap-3">
                  <Plane size={20} className="text-purple-400" />
                  <span>Travelling</span>
                </div>
              </div>
            </div>

            <div className="pt-6 italic text-gray-400 border-l-4 border-purple-500 pl-4">
              <p>"Strive to build things that make a difference!"</p>
              <p className="text-right mt-2">— Hamza</p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-purple-600/20 rounded-full blur-3xl"></div>
              <img
                src="https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Developer illustration"
                className="relative w-full max-w-md"
                style={{ filter: 'hue-rotate(280deg)' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
