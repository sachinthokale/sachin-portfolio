import { FaReact, FaHtml5, FaCss3, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiSocketdotio } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { useState } from "react";
import ExperienceInfo from "../components/ResumeInfo/ExperienceInfo";
import SkillInfo from "../components/ResumeInfo/SkillInfo";
import EducationInfo from "../components/ResumeInfo/EducationInfo";
import AboutMe from "../components/ResumeInfo/AboutMe";

const about = {
  title: "About Me",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptates voluptas asperiores",
  info: [
    {
      title: "Name",
      value: "Sachin Thokale",
    },
    {
      title: "Phone",
      value: "+92-9921531696",
    },
    {
      title: "Email",
      value: "sachinthokale999@gmail.com",
    },
    {
      title: "Experience",
      value: "1 Year",
    },
    {
      title: "Languages",
      value: "English Hindi Marathi",
    },
  ],
};
const experience = {
  title: "My Experience",
  description:
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptates voluptas asperiores.",
  info: [
    {
      company: "SnapSmart",
      position: "Full Stack Developer",
      Duration: "December-2023 - May-2024",
    },
    {
      company: "SnapSmart",
      position: "Full Stack Developer",
      Duration: "December-2023 - May-2024",
    },
    {
      company: "SnapSmart",
      position: "Full Stack Developer",
      Duration: "December-2023 - May-2024",
    },
  ],
};
const education = {
  title: "My Education",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptates voluptas asperiores",
  info: [
    {
      Institute: "Coding Blocks",
      Degree: "MERN Stack Developement Bootcamp",
      Duration: "Jan-2022 - December-2023",
    },
    {
      Institute: "Pravara rural Engineering College Loni Maharashtra",
      Degree: "Bachelor of Engineering",
      Duration: "Jan-2016 - December-2021",
    },
    {
      Institute: "Maharashtra State Board",
      Degree: "Higher Secondary",
      Duration: "Jan-2014 - December-2016",
    },
  ],
};
const skills = {
  title: "My Skills",
  description:
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptates voluptas asperiores",
  info: [
    {
      icon: FaReact,
      name: "React.js",
    },
    {
      icon: FaNodeJs,
      name: "Node.js",
    },
    {
      icon: DiMongodb,
      name: "mongoDB",
    },
    {
      icon: FaHtml5,
      name: "html5",
    },
    {
      icon: FaCss3,
      name: "Css",
    },
    {
      icon: IoLogoJavascript,
      name: "javascript",
    },
    {
      icon: SiTailwindcss,
      name: "Tailwindcss",
    },
    {
      icon: SiSocketdotio,
      name: "socket-io",
    },
  ],
};

const Resume = () => {
  const [value, setValue] = useState(experience);
  const [activeButton, setActiveButton] = useState(0);

  const handlebuttonChange = (button, index) => {
    setActiveButton(index);
    console.log(index);
    console.log("b is", button);
    if (button == "Experience") {
      setValue(experience);
    } else if (button == "Education") {
      setValue(education);
    } else if (button == "Skills") {
      setValue(skills);
    } else {
      setValue(about);
    }
  };

  return (
    <div className="  bg-primary w-screen h-screen text-white font-Inconsolata flex justify-center  p-2">
      <div className=" pt-8 w-full xl:w-3/4  flex flex-col xl:flex-row">
        <div className=" xl:w-1/3  p-2 flex flex-col  gap-4">
          <div className=" hidden xl:flex flex-col gap-4">
            <h1 className="text-4xl font-bold">Why Hire Me?</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
              ratione!
            </p>
          </div>
          {["Experience", "Skills", "Education", "About Me"].map(
            (button, index) => {
              return (
                <button
                  className={`w-full font-bold xl:text-2xl hover:text-accent p-2 border border-gray-500 rounded-md  ${
                    activeButton === index
                      ? " bg-accent border-none text-black hover:text-black"
                      : ""
                  }`}
                  key={index}
                  title={button}
                  onClick={() => handlebuttonChange(button, index)}
                >
                  {button}
                </button>
              );
            }
          )}
        </div>
        {value.title == "My Experience" && <ExperienceInfo info={value} />}
        {value.title == "My Skills" && <SkillInfo info={value} />}
        {value.title == "My Education" && <EducationInfo info={value} />}
        {value.title == "About Me" && <AboutMe info={value} />}
      </div>
    </div>
  );
};

export default Resume;
