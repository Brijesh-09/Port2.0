import { Globe } from '@/components/ui/Globe';

export const Connect = () => {
  return (
    <section style={{ backgroundColor: '#1C1C1C' }} id='connect' className=" text-white min-h-screen flex flex-col justify-between">
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24 gap-12 lg:gap-16 w-full">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-6xl lg:text-7xl font-bold text-gray-400 leading-tight">
            Connect
          </h2>
          <p className="text-lg sm:text-2xl lg:text-3xl text-white font-medium mb-6 sm:mb-8 leading-relaxed">
            Let’s make something great together{' '}
            <a
              href="mailto:brijeshkori22@gmail.com"
              className="relative group text-red-200 font-bold underline transition-colors hover:text-red-400"
            >
              drop me a line!
              {/* Tooltip */}
              <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-[-2px] transition-all duration-300 text-sm text-gray-200 bg-gray-800 px-3 py-1 rounded-lg whitespace-nowrap pointer-events-none shadow-lg">
                brijeshkori22@gmail.com
              </span>
            </a>
          </p>
        </div>



        {/* Right: Globe */}
        <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-[500px] relative overflow-visible flex items-center justify-center">
          <Globe className="!h-full w-full max-w-[400px] sm:max-w-[500px] drop-shadow-[0_0_80px_rgba(255,255,255,0.3)]" />
        </div>
      </div>

      {/* Footer Links */}
      <footer style={{ backgroundColor: '#1C1C1C' }} className="py-8 sm:py-10 border-t border-gray-800">
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
