import { Globe } from '@/components/ui/Globe';

export const Connect = () => {
  return (
    <section className="bg-black text-white min-h-screen flex flex-col justify-between">
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24 gap-12 lg:gap-16 w-full">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-300 mb-4 sm:mb-6 leading-tight">
            Connect
          </h2>
          <p className="text-lg sm:text-2xl lg:text-3xl text-white font-medium mb-6 sm:mb-8 leading-relaxed">
            Thinking about working with me?{' '}
            <span className="text-red-500 font-bold">Mail</span>.
          </p>
        </div>

        {/* Right: Globe */}
        <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-[500px] relative overflow-visible flex items-center justify-center">
          <Globe className="!h-full w-full max-w-[400px] sm:max-w-[500px] drop-shadow-[0_0_80px_rgba(255,255,255,0.3)]" />
        </div>
      </div>

      {/* Footer Links */}
      <footer className="bg-black py-8 sm:py-10 border-t border-gray-800">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm sm:text-base">
          <a
            className="text-gray-500 hover:text-white transition"
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="text-gray-500 hover:text-white transition"
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="text-gray-500 hover:text-white transition"
            href="https://twitter.com/your-handle"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blogs
          </a>
        </div>
      </footer>
    </section>
  );
};
