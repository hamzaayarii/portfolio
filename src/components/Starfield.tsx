import { useEffect, useRef } from 'react';

export default function Starfield() {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const starCount = 200;
    const stars: HTMLDivElement[] = [];

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      
      // Random starting position
      const startLeft = Math.random() * 100;
      const startTop = Math.random() * 100;
      
      star.style.left = `${startLeft}%`;
      star.style.top = `${startTop}%`;
      star.style.animationDelay = `${Math.random() * 3}s`;
      star.style.opacity = `${Math.random() * 0.7 + 0.3}`;
      
      // Random movement duration between 20-40 seconds for smooth slow movement
      const duration = 20 + Math.random() * 20;
      star.style.animationDuration = `${duration}s`;
      
      canvasRef.current.appendChild(star);
      stars.push(star);
    }

    return () => {
      stars.forEach(star => star.remove());
    };
  }, []);

  return <div ref={canvasRef} className="starfield" />;
}
