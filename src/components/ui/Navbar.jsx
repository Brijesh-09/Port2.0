export const Navbar = ({ isHeroInView }) => {
  const commonClasses = `flex justify-between items-center p-8 fixed top-0 left-0 right-0 z-50 transition-all duration-300`;

  return (
    <div
      className={
        isHeroInView
          ? `${commonClasses} bg-transparent text-black`
          : `${commonClasses} backdrop-filter bg-white/50 backdrop-blur-md rounded-b-xl shadow-md border border-white/20 text-black`
      }
    >
      {isHeroInView ? (
        // Layout for Hero section
        <>
          <div className="flex gap-6 font-medium">
            <div>Work</div>
            <div>About</div>
            <div>Contact</div>
          </div>
          <div className="font-medium">DevOps Engineer</div>
        </>
      ) : (
        // Layout for all other sections
        <>
          <div className="font-bold text-xl">Brijesh Kori</div>
          <div className="flex gap-6 font-medium">
            <div>Work</div>
            <div>About</div>
            <div>Connect</div>
          </div>
        </>
      )}
    </div>
  );
};
