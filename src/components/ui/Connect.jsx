import ConnectGlobe from "./Globe"

export const Connect = () => {
    return (
        <><div>
            <div className="w-full bg-black text-white py-24 px-6 lg:px-16">
                <h2 className="text-6xl lg:text-7xl font-bold text-gray-400">
                    Connect
                </h2>
                <p className="text-xl lg:text-2xl text-gray-300 mt-6">
                    Thinking about working with me?
                </p>
            </div>
        </div>
        <div className="bg-black">
                <div className="max-w-l py-16 flex justify-center">
                    <ul className="flex flex-col sm:flex-row  sm:items-center gap-4">
                        <li>
                            <a
                                className="text-gray-600 hover:underline"
                                href="https://github.com/your-username"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>
                        </li>
                        <li>
                            <a
                               className="text-gray-600 hover:underline"
                                href="https://www.linkedin.com/in/your-profile"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LinkedIn
                            </a>
                        </li>
                         <li>
                            <a
                                className="text-gray-600 hover:underline"
                                href="https://twitter.com/your-handle"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Blogs
                            </a>
                        </li>
                    </ul>
                </div>
            </div></>
    )
}