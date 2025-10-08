// Lightweight performance monitoring utility
// Only runs in development mode

export const logPerformance = () => {
  if (import.meta.env.DEV && 'performance' in window) {
    // Log after page fully loads
    window.addEventListener('load', () => {
      setTimeout(() => {
        const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (perfData) {
          console.log('🚀 Performance Metrics:');
          console.log(`  DNS Lookup: ${Math.round(perfData.domainLookupEnd - perfData.domainLookupStart)}ms`);
          console.log(`  TCP Connection: ${Math.round(perfData.connectEnd - perfData.connectStart)}ms`);
          console.log(`  Request Time: ${Math.round(perfData.responseStart - perfData.requestStart)}ms`);
          console.log(`  Response Time: ${Math.round(perfData.responseEnd - perfData.responseStart)}ms`);
          console.log(`  DOM Processing: ${Math.round(perfData.domComplete - perfData.domLoading)}ms`);
          console.log(`  Load Complete: ${Math.round(perfData.loadEventEnd - perfData.fetchStart)}ms`);
        }

        // Log largest contentful paint
        if ('PerformanceObserver' in window) {
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            console.log(`  LCP (Largest Contentful Paint): ${Math.round(lastEntry.startTime)}ms`);
          });
          
          try {
            lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
          } catch {
            // Ignore errors if not supported
          }
        }
      }, 0);
    });
  }
};
