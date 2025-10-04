import { Github, GitPullRequest, GitFork } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function GitHub() {
  const githubUsername = 'hamzaayarii';
  const [stats, setStats] = useState({
    repos: 0,
    pullRequests: 0,
  });

  useEffect(() => {
    // Fetch GitHub user stats
    fetch(`https://api.github.com/users/${githubUsername}`)
      .then(res => res.json())
      .then(data => {
        setStats(prev => ({
          ...prev,
          repos: data.public_repos || 0,
        }));
      })
      .catch(err => console.error('Error fetching GitHub data:', err));

    // Fetch pull requests
    fetch(`https://api.github.com/search/issues?q=author:${githubUsername}+type:pr`)
      .then(res => res.json())
      .then(data => {
        setStats(prev => ({ ...prev, pullRequests: data.total_count || 0 }));
      })
      .catch(err => console.error('Error fetching PRs:', err));
  }, []);

  const statsData = [
    { icon: Github, label: `${stats.repos} Repositories`, sublabel: 'Public projects' },
    { icon: GitPullRequest, label: `${stats.pullRequests} Pull Requests`, sublabel: 'Contributions made' },
    { icon: GitFork, label: 'Active Contributor', sublabel: 'Open source' }
  ];

  return (
    <section className="relative py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-cyan-400 font-semibold text-sm tracking-wider uppercase">My Work</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            GitHub <span className="gradient-text glow-effect">Contributions</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto rounded-full"></div>
        </div>

        <div className="bg-slate-800/30 border border-cyan-500/20 rounded-3xl p-8 backdrop-blur-sm">
          <p className="text-center text-gray-300 mb-8 text-lg">
            Check out my GitHub contributions and see what I've been working on lately!
          </p>

          <div className="mb-12 overflow-x-auto pb-4">
            <div className="flex justify-center">
              <div className="w-full bg-slate-900/50 p-8 rounded-xl border border-cyan-500/20">
                {/* GitHub Contribution Graph - Shows actual commits */}
                <img 
                  src={`https://ghchart.rshah.org/06b6d4/${githubUsername}`}
                  alt="GitHub Contribution Graph"
                  className="w-full h-auto mx-auto rounded-lg"
                  style={{ imageRendering: 'crisp-edges', minHeight: '200px' }}
                />
                <div className="flex items-center justify-end gap-2 mt-6 text-xs text-gray-400">
                  <span>Less</span>
                  <div className="w-3 h-3 bg-slate-800 rounded-sm border border-cyan-500/20"></div>
                  <div className="w-3 h-3 bg-cyan-900 rounded-sm"></div>
                  <div className="w-3 h-3 bg-cyan-700 rounded-sm"></div>
                  <div className="w-3 h-3 bg-cyan-500 rounded-sm"></div>
                  <div className="w-3 h-3 bg-cyan-400 rounded-sm"></div>
                  <span>More</span>
                </div>
                <div className="text-center mt-4 text-sm text-gray-300">
                  <p className="mb-2 text-base font-semibold text-cyan-400">
                    965 contributions in the last year
                  </p>
                  <a 
                    href={`https://github.com/${githubUsername}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    View detailed contribution activity on GitHub →
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {statsData.map((stat, index) => (
              <div
                key={index}
                className="bg-slate-900/50 border border-cyan-500/20 rounded-xl p-6 text-center hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all duration-300"
              >
                <stat.icon size={32} className="text-cyan-400 mx-auto mb-3" />
                <div className="text-xl font-bold text-white mb-1">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.sublabel}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-300 mb-6 text-lg">Want to see more? Visit my GitHub profile!</p>
            <a 
              href={`https://github.com/${githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 btn-glow"
            >
              <Github size={20} />
              View GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
