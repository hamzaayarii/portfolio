import { memo } from 'react';

// Optimized CSS-only starfield - no DOM manipulation, better performance
const Starfield = memo(() => {
  return (
    <div className="starfield">
      {/* Use CSS-only stars for better performance */}
      <div className="stars-layer-1"></div>
      <div className="stars-layer-2"></div>
      <div className="stars-layer-3"></div>
    </div>
  );
});

Starfield.displayName = 'Starfield';

export default Starfield;
