export const Hero = () => {
    return (
        <section className="w-full px-6 md:px-12 lg:px-24 py-20">
            <h1
                id="hero-name"
                className="text-7xl sm:text-8xl md:text-9xl font-bold leading-tight tracking-tight font-sans text-left gsap-fade-up"
            >
                brijesh <br /> kori
            </h1>

            <div className="mt-12 flex flex-col md:flex-row justify-between gap-10 gsap-fade-up">
                <div className="md:w-1/2">
                    <h6 className="text-xl sm:text-2xl font-medium leading-relaxed">
                        I'm a DevOps Engineer and self-taught <br />
                        full-stack developer who enjoys building <br />
                        apps, and exploring creative side projects
                    </h6>
                </div>

                <div className="md:w-1/2">
                    <p className="text-lg sm:text-xl leading-relaxed">
                        With a passion for DevOps and full-stack development,<br/>I build efficient systems
                        and engaging web apps that solve real-world problems beautifully.
                    </p>
                    <p className="text-lg sm:text-xl leading-relaxed mt-6">
                        I transform ideas into stunning realities, all while sweating the small stuff to
                        perfection.
                    </p>
                </div>
            </div>
        </section>
    );
};
