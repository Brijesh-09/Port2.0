import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const projects = [
  { id: 1, title: "ProManim", description: "AI-powered Code-to-Video Generation using Manim", url: "https://github.com/Brijesh-09/Manim" },
  { id: 2, title: "Jenkins-Ansible", description: "In this project the automation task in performed to update the web server as soon as any changes made in the git repository Jenkins Listens to the git using web hooks and run the build after any changes made by the developer", url: "https://github.com/Brijesh-09/Jenkins-Ansible" },
  { id: 3, title: "Deploying a Monorepo", description: "Deploying a Monorepo Application via Docker Containers on an EC2 Server with CI/CD using GitHub Actions", url: "https://brijeshkori.hashnode.dev/deploying-a-monorepo-application-via-docker-containers-on-an-ec2-server-with-cicd-using-github-actions" },
];

export const Work = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const items = gsap.utils.toArray(".gsap-fade-up");
    items.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.killTweensOf(items);
    };
  }, []);

  return (
    <section ref={sectionRef} id="work" style={{ backgroundColor: '#1C1C1C' }} className="w-full  text-white py-28 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        {/* Left sticky intro */}
        <div className="w-full lg:w-1/3 sticky top-28 self-start">
          <h2 className="text-6xl lg:text-7xl font-bold text-gray-400 leading-tight">
            Work
          </h2>
          <p className="text-lg lg:text-xl text-gray-300 mt-8 max-w-md leading-relaxed">
            Check out what I've been working on.
          </p>
        </div>

        {/* Right projects list */}
        <div className="w-full lg:w-2/3 flex flex-col">
          {projects.map((p, i) => (
            <a
              key={p.id}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="block py-12 border-b border-gray-800 gsap-fade-up group last:border-b-0"
            >
              <span className="text-4xl md:text-5xl text-gray-500 mb-5 block font-mono">{`0${i + 1}`}</span>
              <h3 className="text-3xl md:text-5xl xl:text-6xl font-semibold text-white mb-4 group-hover:text-red-200 transition-colors duration-300 ease-in-out">
                {p.title}
              </h3>
              <p className="text-gray-400 max-w-lg text-lg leading-relaxed">{p.description}</p>
            </a>
          ))}
        </div>
      </div>

      <a
        href="https://github.com/Brijesh-09?tab=repositories"
        target="_blank"
        rel="noreferrer"
        className="text-gray-600 flex justify-end mt-20 text-l md:text-2xl font-light hover:underline cursor-pointer"
      >
        and many more ...
      </a>
    </section>
  );
};
