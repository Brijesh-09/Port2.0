import { Globe } from '@/components/ui/Globe';

export const Connect = () => {
    return (
        <section className="bg-black text-white min-h-screen flex flex-col justify-between">
            <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-24 gap-16">
                {/* Left Content */}
                <div className="lg:w-1/2">
                    <h2 className="text-5xl lg:text-6xl font-extrabold text-gray-300 mb-6">
                        Connect
                    </h2>
                    <p className="text-2xl lg:text-3xl text-white font-medium mb-6">
                       Thinking about working with me? <span className="text-red-500 font-bold">Mail</span>.
                    </p>
                    <p className="text-gray-400 text-base leading-relaxed">
                        With points of presence currently active in Singapore and India, I ensure low-latency, high-performance delivery for my projects worldwide. The network is continuously expanding to new locations.
                    </p>
                </div>

                {/* Right: Globe */}
                <div className="lg:w-1/2 w-full h-[500px] relative overflow-visible pr-8">
                    <Globe className="!h-full drop-shadow-[0_0_80px_rgba(255,255,255,0.3)]" />
                </div>
            </div>

            {/* Footer Links */}
            <div className="bg-black  py-10">
                <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
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
            </div>
        </section>
    );
};
