/* eslint-disable react/prop-types */
const ExperienceInfo = ({ info }) => {
  return (
    <div className=" xl:w-2/3 flex flex-col justify-center xl:justify-normal items-center p-2 gap-4">
      <h1 className="text-4xl font-bold xl:text-4xl">{info.title}</h1>
      <p className=" text-center">{info.description}</p>
      <div className="flex gap-4 flex-col w-full">
        {info.info.map((value, index) => {
          return (
            <div
              key={index}
              className=" border border-gray-600 rounded-md  p-2 w-full"
            >
              <p className=" text-accent">{value.Duration}</p>
              <h1>{value.position}</h1>
              <p>{value.company}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExperienceInfo;
