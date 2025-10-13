export const Navbar = ({ isHeroInView }) => {
  const commonClasses = `flex justify-between items-center p-8 fixed top-0 left-0 right-0 z-50 transition-all duration-300`;

return (
    <div
      className={
        isHeroInView
          ? `${commonClasses} bg-transparent text-black`
          : `${commonClasses} backdrop-filter bg-white/10 backdrop-blur-sm rounded-b-xl shadow-md border border-white/20 text-black`
      }
    >
      {isHeroInView ? (
        // Layout for Hero section
        <>
          <div className="flex gap-6 font-medium">
            <a
              href="#work"
              className="hover:text-red-500 transition-colors duration-200"
            >
              Work
            </a>
            <a
              href="#about"
              className="hover:text-red-500 transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#connect"
              className="hover:text-red-500 transition-colors duration-200"
            >
              Contact
            </a>
          </div>
          <div className="font-medium">DevOps Engineer</div>
        </>
      ) : (
        // Layout for all other sections
        <>
          <a
            href="#hero"
            className="font-bold text-xl hover:text-red-500 transition-colors duration-200"
          >
            Brijesh Kori
          </a>
          <div className="flex gap-6 font-medium">
            <a
              href="#work"
              className="hover:text-red-500 transition-colors duration-200"
            >
              Work
            </a>
            <a
              href="#about"
              className="hover:text-red-500 transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#connect"
              className="hover:text-red-500 transition-colors duration-200"
            >
              Connect
            </a>
          </div>
        </>
      )}
    </div>
  );
};
