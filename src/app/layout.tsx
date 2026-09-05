import type { Metadata } from "next";
import { ThemeProvider } from './context/ThemeContext';

export const metadata: Metadata = {
  title: "Janndhelle Marth Zulueta · Portfolio",
  description: "AI Automation & Technical Systems Specialist Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;14..32,400;14..32,600;14..32,700;14..32,800;14..32,900&display=swap" 
          rel="stylesheet" 
        />
        <script src="https://cdn.tailwindcss.com"></script>
        <style dangerouslySetInnerHTML={{
          __html: `
            * { box-sizing: border-box; margin: 0; padding: 0; }
            html { scroll-behavior: smooth; }
            
            /* Light Mode Variables */
            :root {
              --bg-primary: #0a0a0f;
              --bg-secondary: #0f0f1a;
              --bg-card: rgba(255, 255, 255, 0.03);
              --bg-card-hover: rgba(255, 255, 255, 0.06);
              --text-primary: #e2e8f0;
              --text-secondary: #94a3b8;
              --text-muted: #64748b;
              --border-color: rgba(255, 255, 255, 0.05);
              --shadow-color: rgba(0, 0, 0, 0.3);
              --glass-bg: rgba(255, 255, 255, 0.03);
              --glass-border: rgba(255, 255, 255, 0.05);
              --input-bg: rgba(255, 255, 255, 0.05);
            }
            
            /* Light Mode Overrides */
            html.light {
              --bg-primary: #f8fafc;
              --bg-secondary: #f1f5f9;
              --bg-card: rgba(255, 255, 255, 0.8);
              --bg-card-hover: rgba(255, 255, 255, 0.95);
              --text-primary: #0f172a;
              --text-secondary: #475569;
              --text-muted: #94a3b8;
              --border-color: rgba(0, 0, 0, 0.06);
              --shadow-color: rgba(0, 0, 0, 0.08);
              --glass-bg: rgba(255, 255, 255, 0.7);
              --glass-border: rgba(0, 0, 0, 0.06);
              --input-bg: rgba(0, 0, 0, 0.04);
            }
            
            body { 
              font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              background: var(--bg-primary);
              color: var(--text-primary);
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              overflow-x: hidden;
              transition: background 0.3s ease, color 0.3s ease;
            }
            
            /* Glass Effect */
            .glass {
              background: var(--glass-bg);
              backdrop-filter: blur(20px);
              -webkit-backdrop-filter: blur(20px);
              border: 1px solid var(--glass-border);
              transition: background 0.3s ease, border-color 0.3s ease;
            }
            
            .glass-light {
              background: var(--bg-card);
              backdrop-filter: blur(16px);
              -webkit-backdrop-filter: blur(16px);
              border: 1px solid var(--border-color);
              transition: background 0.3s ease, border-color 0.3s ease;
            }
            
            /* Gradient Text */
            .gradient-text {
              background: linear-gradient(135deg, #818cf8, #c084fc, #f472b6);
              background-size: 300% 300%;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              animation: gradientShift 6s ease-in-out infinite;
            }
            
            .gradient-text-2 {
              background: linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6);
              background-size: 300% 300%;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              animation: gradientShift 8s ease-in-out infinite;
            }
            
            .gradient-bg {
              background: linear-gradient(135deg, #6366f1, #8b5cf6, #d946ef);
              background-size: 300% 300%;
              animation: gradientShift 4s ease-in-out infinite;
            }
            
            @keyframes gradientShift {
              0%, 100% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
            }
            
            /* Card Styles */
            .card-modern {
              background: var(--bg-card);
              backdrop-filter: blur(12px);
              border: 1px solid var(--border-color);
              transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
              border-radius: 1.5rem;
            }
            .card-modern:hover {
              transform: translateY(-8px) scale(1.01);
              border-color: rgba(99, 102, 241, 0.3);
              box-shadow: 0 30px 60px -20px rgba(99, 102, 241, 0.2);
            }
            
            /* Tag Styles */
            .tag-glow {
              background: rgba(99, 102, 241, 0.08);
              border: 1px solid rgba(99, 102, 241, 0.15);
              color: #c7d2fe;
              padding: 0.25rem 1rem;
              border-radius: 9999px;
              font-size: 0.75rem;
              font-weight: 500;
              transition: all 0.3s ease;
              backdrop-filter: blur(8px);
            }
            .tag-glow:hover {
              background: rgba(99, 102, 241, 0.15);
              transform: scale(1.05);
              border-color: rgba(99, 102, 241, 0.3);
            }
            
            html.light .tag-glow {
              background: rgba(99, 102, 241, 0.1);
              color: #4f46e5;
              border-color: rgba(99, 102, 241, 0.2);
            }
            html.light .tag-glow:hover {
              background: rgba(99, 102, 241, 0.15);
            }
            
            /* Floating Animation */
            .float-animation {
              animation: float 6s ease-in-out infinite;
            }
            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-20px); }
            }
            
            /* Scroll Progress Bar */
            .scroll-progress {
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              height: 3px;
              background: linear-gradient(90deg, #6366f1, #d946ef);
              transform-origin: 0%;
              z-index: 1000;
            }
            
            /* Smooth fade in */
            .fade-in {
              opacity: 0;
              transform: translateY(30px);
              animation: fadeInUp 0.8s ease forwards;
            }
            
            @keyframes fadeInUp {
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            
            .fade-in-delay-1 { animation-delay: 0.1s; }
            .fade-in-delay-2 { animation-delay: 0.2s; }
            .fade-in-delay-3 { animation-delay: 0.3s; }
            .fade-in-delay-4 { animation-delay: 0.4s; }
            .fade-in-delay-5 { animation-delay: 0.5s; }
            
            /* Scrollbar */
            ::-webkit-scrollbar {
              width: 8px;
            }
            ::-webkit-scrollbar-track {
              background: var(--bg-secondary);
            }
            ::-webkit-scrollbar-thumb {
              background: linear-gradient(180deg, #6366f1, #d946ef);
              border-radius: 4px;
            }
            
            /* Special background */
            .bg-grid {
              background-image: 
                radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.08) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.08) 0%, transparent 50%);
            }
            
            html.light .bg-grid {
              background-image: 
                radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.06) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.06) 0%, transparent 50%);
            }
            
            /* Theme toggle button */
            .theme-toggle {
              position: relative;
              width: 48px;
              height: 48px;
              border-radius: 9999px;
              display: flex;
              align-items: center;
              justify-content: center;
              transition: all 0.3s ease;
              cursor: pointer;
            }
            .theme-toggle:hover {
              transform: scale(1.1);
            }
          `
        }} />
      </head>
      <body>
        <ThemeProvider>
          <div className="scroll-progress" style={{ transform: 'scaleX(0)' }} id="scroll-progress"></div>
          {children}
          
          <script dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('scroll', () => {
                const scrolled = window.scrollY;
                const max = document.documentElement.scrollHeight - window.innerHeight;
                const progress = (scrolled / max) * 100;
                document.getElementById('scroll-progress').style.transform = 'scaleX(' + progress / 100 + ')';
              });
            `
          }} />
        </ThemeProvider>
      </body>
    </html>
  );
}