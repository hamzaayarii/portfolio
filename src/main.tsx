import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { logPerformance } from './utils/performance';

// Log performance metrics in development
logPerformance();

// Render without StrictMode in production for better performance
const root = createRoot(document.getElementById('root')!);

if (import.meta.env.DEV) {
  // Use StrictMode only in development
  import('react').then(({ StrictMode }) => {
    root.render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  });
} else {
  // Production: render directly without StrictMode
  root.render(<App />);
}
