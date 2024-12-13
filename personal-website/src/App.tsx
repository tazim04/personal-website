import "./App.css";
import Typewriter from "typewriter-effect";
import { useInView } from "react-intersection-observer";

import NavBar from "./components/NavBar/NavBar";
import MouseGlow from "./components/MouseGlow";
import TechCarousel from "./components/TechCarousel/TechCarousel";
import { Button } from "@headlessui/react";
import About from "./sections/About/About";
import Experience from "./sections/Experience/Experience";
import Projects from "./sections/Projects/Projects";

function App() {
  const { ref: aboutRef, inView: isAboutInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: expRef, inView: isExpInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: projRef, inView: isProjInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <div className="text-gray-200 font-robotoMono">
      <MouseGlow />
      <NavBar />

      {/* Main content centered below */}
      <section className="h-screen">
        <div className="flex flex-col md:ms-[50rem] ms-20 absolute md:top-[30vh] top-[20vh]">
          <div className="text-left md:pe-0 pe-5">
            <p className="text-sm md:text-lg mb-2 md:mb-5">Hi, my name is</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-5 md:mb-7 text-rose-500">
              <Typewriter
                options={{
                  strings: ["Tazim Khan."],
                  autoStart: true,
                  cursor: "_",
                  deleteSpeed: Infinity,
                  loop: true,
                  delay: 100,
                }}
              />
            </h1>
            <p className="text-gray-300 text-sm md:text-base">
              I'm a 3rd-year Software Engineering student at the{" "}
              <span className="text-rose-500">University of Ottawa</span>.
            </p>
          </div>
          <div className="flex flex-row flex-wrap gap-4 mt-10">
            <Button className="resume px-4 py-2 md:py-4 w-36 md:w-44 bg-rose-600 rounded-sm transition-all ease-in-out hover:rounded-[1.5rem] active:translate-y-1">
              Resume
            </Button>
            <Button className="projects px-4 py-2 md:py-4 w-36 md:w-44 border-2 border-blue-500 text-blue-300 rounded-sm transition-all ease-in-out hover:rounded-[1.5rem] active:translate-y-1">
              Projects
            </Button>
            <Button
              as="a"
              href="https://github.com/tazim04"
              target="_blank"
              rel="noopener noreferrer"
              className="github px-2 w-fit border-2 border-gray-400 rounded-sm transition-all ease-in-out hover:rounded-[1.5rem] active:translate-y-1"
            >
              <img
                src="./icons/github.png"
                alt="GitHub"
                className="w-8 md:w-11"
              />
            </Button>
          </div>
        </div>
        <div className="absolute md:top-[50vh] top-[56vh]">
          <TechCarousel />
        </div>
      </section>

      <div className="overflow-x-hidden">
        <section
          ref={aboutRef}
          className={`flex justify-center transition-all ease-in-out duration-500 ${
            isAboutInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 md:-translate-x-10"
          }`}
        >
          <About />
        </section>
        <section
          ref={expRef}
          className={`flex justify-center transition-all ease-in-out duration-500 ${
            isExpInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-x-10"
          }`}
        >
          <Experience />
        </section>

        <section
          ref={projRef}
          className={`flex justify-center transition-all ease-in-out duration-500 ${
            isProjInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-x-10"
          }`}
        >
          <Projects />
        </section>
      </div>
    </div>
  );
}

export default App;
