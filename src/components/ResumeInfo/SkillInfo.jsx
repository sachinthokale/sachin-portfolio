/* eslint-disable react/prop-types */
const SkillInfo = ({ info }) => {
  return (
    <div className=" xl:w-2/3 flex flex-col  items-center p-2 gap-4">
      <h1 className="text-4xl font-bold xl:text-4xl">{info.title}</h1>
      <p className=" text-center">{info.description}</p>
      <div className="flex gap-4 flex-wrap w-full justify-center  ">
        {info.info.map((value, index) => {
          return (
            <div key={index} className=" p-2 ">
              <value.icon className="w-28 h-24 text-accent" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillInfo;
