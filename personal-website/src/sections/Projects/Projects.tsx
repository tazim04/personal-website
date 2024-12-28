import Project from "./Project";

const Projects = () => {
  const projects = [
    {
      title: "TeeChat",
      description:
        "Built a real-time chatting application using WebSockets (Socket.io) that facilitates instant messaging between multiple clients. Securely stored passwords using one-way hashing and implemented JWT tokens for authorization.",
      technologies: ["React", "Express.js", "Socket.io", "MongoDB", "AWS EC2"],
      thumbnail: "./projects/TeeChat.jpg",
      link: "https://www.teechat.chat/",
    },
    {
      title: "UOHFS Website",
      description:
        "Developed and maintained the University of Ottawa Health and Fitness Society website using Next.js and Tailwind CSS. Automated real-time updates for the 'Events' page using Google Calendar API.",
      technologies: ["Next.js", "Tailwind CSS", "Google Calendar API"],
      thumbnail: "./thumbnails/uohfs.jpg",
      link: "https://uohfs-website.vercel.app/",
    },
    {
      title: "StudySync",
      description:
        "Collaborated in a team of 5 to develop a Team Management System's Team Creation Sub-System. Built secure backend infrastructure with Spring Boot and connected responsive Angular UI with robust APIs.",
      technologies: ["Angular", "Spring Boot (Kotlin)", "PostgreSQL", "Docker"],
      thumbnail: "./thumbnails/studysync.jpg",
      link: "https://github.com/tazim04/studysync",
    },
    {
      title: "Talk Box",
      description:
        "Collaborated to develop a Talk Box device using a Raspberry Pi and C# (.NET) to enable nonverbal users with limited motor control to communicate effectively.",
      technologies: ["C#", ".NET", "Raspberry Pi (Linux)"],
      thumbnail: "./thumbnails/talkbox.jpg",
      link: "https://github.com/tazim04/talkbox",
    },
  ];

  return (
    <div className="w-6/12 relative right-80">
      <h1 className="text-left text-2xl">
        <span className="text-rose-500 glow-text">02.</span> Projects
      </h1>

      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

      <div className="bg-gray-300 bg-opacity-5 rounded-lg p-7">
        {projects.map((proj, index) => (
          <div key={index} className="mb-6">
            <Project project={proj} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
