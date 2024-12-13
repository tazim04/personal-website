import "./About.css";

const About = () => {
  return (
    <div className="md:w-6/12 w-11/12 relative md:right-80">
      <h1 className="text-left text-2xl">
        <span className="text-rose-500 glow-text">00.</span> About Me
      </h1>

      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

      <div className="bg-gray-300 bg-opacity-5 rounded-lg md:p-7 p-5 grid md:grid-cols-4 grid-cols-1 gap-8">
        <div className="md:border-r border-b pb-6 border-gray-500 md:pe-6 col-span-3">
          <p className="md:text-base text-sm leading-relaxed">
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
            <br />
            <br />
            <div className="mb-3">My technical experties:</div>
            <ul className="list-disc list-inside grid grid-cols-1 gap-y-1 marker:text-rose-500">
              <li>
                <span className="font-bold">Frontend:</span> React, Angular,
                Next.js
              </li>
              <li>
                <span className="font-bold">Backend:</span> Node.js, Express.js,
                Spring Boot, WebSockets (Socket.io)
              </li>
              <li>
                <span className="font-bold">Languages:</span>{" "}
                JavaScript/TypeScript, Java, Kotlin, Python, C#
              </li>
              <li>
                <span className="font-bold">Databases:</span> MySQL, PostgreSQL,
                MongoDB, Firebase
              </li>
              <li>
                <span className="font-bold">Tools:</span> Docker, Git, AWS EC2
              </li>
              <li>
                <span className="font-bold">Testing:</span> JUnit, Cypress
              </li>
            </ul>
          </p>
        </div>
        <div className="flex items-center justify-center">
          <img src="./linkedin.jpg" alt="Tazim Khan" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default About;
