const About = () => {
  return (
    <div className="w-6/12 relative -top-96 right-80">
      <h1 className="text-left text-2xl">
        <span className="text-rose-500 glow-text">00.</span> About Me
      </h1>

      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

      <div className="bg-gray-300 bg-opacity-5 rounded-lg p-7 grid grid-cols-4 gap-12">
        <div className="border-r border-gray-500 pr-6 col-span-3">
          <p className="text-base leading-relaxed">
            Hi, My name is Tazim Khan! I'm an aspiring Software Engineeer
            studying Software Engineering at the{" "}
            <span className="text-rose-500 font-bold">
              University of Ottawa
            </span>
            . I am highly driven, ambitious, and passionate about learning and
            problem-solving. With hands-on experience as a Full-Stack Developer
            at the{" "}
            <span className="text-rose-500 font-bold">
              Canada Revenue Agency
            </span>
            , and a strong foundation in software development, I excel in
            creating innovative solutions and collaborating within dynamic
            teams.
            <br />
            <br />
            Through both academic and professional experiences, I have honed my
            technical expertise, teamwork, and communication skills. I enjoy
            bringing ideas to life through personal and team-driven projects and
            am always eager to embrace new challenges that push my limits.
          </p>
        </div>
        <div className="">
          <img src="./linkedin.jpg" alt="Tazim Khan" className="w-72" />
        </div>
      </div>
    </div>
  );
};

export default About;
