export const ProjectCard = ({ title, description, imageUrl, projectUrl }) => {
    return (
        <div className="bg-black rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
            <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{title}</h2>
                <p className="text-gray-700 mb-4">{description}</p>
                <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    View Project
                </a>
            </div>
        </div>
    )
}