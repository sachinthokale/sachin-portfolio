/* eslint-disable react/prop-types */
const EducationInfo = ({ info }) => {
  return (
    <div className=" xl:w-2/3 flex flex-col justify-center items-center xl:justify-start p-2">
      <h1 className="text-4xl font-bold xl:text-4xl">{info.title}</h1>
      <p className=" text-center">{info.description}</p>
      <div className="flex gap-4 flex-wrap w-full justify-center ">
        {info.info.map((value, index) => {
          return (
            <div
              key={index}
              className=" border border-gray-500 rounded-md p-2  w-full flex flex-col gap-2 xl:gap-4 "
            >
              <p className=" text-accent">{value.Duration}</p>
              <h1>{value.Degree}</h1>
              <p>{value.Institute}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EducationInfo;
// Institute: "Coding Blocks",
//       Degree: "MERN Stack Developement Bootcamp",
//       Duration: "Jan-2022 - December-2023",
