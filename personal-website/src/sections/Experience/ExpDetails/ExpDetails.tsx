import "./ExpDetails.css";

type ExpDetailsProps = {
  job: {
    title: string;
    company: string;
    duration: string;
    details: string[];
  };
};
const ExpDetails: React.FC<ExpDetailsProps> = ({ job }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md p-6 text-gray-200 font-robotoMono">
      {/* Job Title and Company */}
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-rose-500">{job.title}</h2>
        <p className="text-lg text-gray-400">{job.company}</p>
      </div>

      {/* Duration */}
      <p className="text-sm text-gray-500 mb-4">
        <span className="font-semibold">Duration:</span> {job.duration}
      </p>

      {/* Job Details */}
      <div className="text-sm text-gray-300 leading-relaxed">
        {job.details.map((point, index) => (
          <div key={index}>
            <ul className="list-disc list-inside grid grid-cols-1 gap-y-1 marker:text-rose-500">
              <li className="text-indent">{point}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpDetails;
