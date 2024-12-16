import ExpDetails from "./ExpDetails/ExpDetails";

const Experience = () => {
  const exps = [
    {
      title: "Full-Stack Developer (CO-OP)",
      company: "Canada Revenue Agency",
      duration: "May 2023 - Sept. 2023, Jan 2024 - Apr. 2024",
      details: [
        "Contributed to the development of an Angular component library by creating Angular pages and components to aid developers in the digitalization of CRA forms.",
        "Developed REST APIs in Java to facilitate frontend-backend communication and ensure proper PDF generation.",
        "Conducted JUnit testing for input validators, identifying issues in over 70% of the validators.",
        "Maintained Git workflows by managing branches, resolving conflicts, and reviewing pull requests.",
      ],
    },
    {
      title: "WebMaster",
      company: "University of Ottawa Health and Fitness Society",
      duration: "August 2024 – Present",
      details: [
        "Developed and maintained the UOHFS website using Next.js and Tailwind CSS.",
        "Automated real-time updates for the 'Events' page by integrating Google Calendar API with Next.js Server Side Rendering, removing the need for manual updates.",
        "Designed a user-friendly, responsive, and visually appealing website to meet client requirements.",
      ],
    },
  ];

  return (
    <div className="2xl:w-1/2 md:w-5/6 relative w-11/12 2xl:left-80 md:left-20">
      <h1 className="text-right text-2xl">
        <span className="text-rose-500 glow-text">01.</span> Experience
      </h1>

      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

      <div className="bg-gray-300 bg-opacity-5 rounded-lg md:p-7 p-3">
        {exps.map((job, index) => (
          <div key={index} className="mb-6">
            <ExpDetails job={job} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
