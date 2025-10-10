// ExperinceCard.jsx

export const ExperinceCard = ({ title, responsibilities, tags }) => {
  return (
    <div className="bg-black rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-700">
      <h2 className="text-2xl text-red-400 font-semibold mb-4">{title}</h2>

      <h3 className="text-xl text-gray-300 font-medium mb-2">Responsibilities:</h3>
      <ul className="list-disc list-inside text-gray-400 mb-4 space-y-1">
        {responsibilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-700 text-white text-sm px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
