import SaveAltIcon from "@mui/icons-material/SaveAlt";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Photo from "../components/Photo";
import { Link } from "react-router-dom";
import resume from "../../public/sachin-thokale-resume (1).pdf";
const Home = () => {
  return (
    <div className=" bg-primary text-white font-Inconsolata p-2 w-screen h-screen flex flex-col md:flex-row xl:flow-row xl:justify-center items-center ">
      <div className=" p-2 flex flex-col items-center md:items-start xl:items-start gap-1 md:gap-5 xl:gap-5 w-full md:w-1/2 xl:w-1/2 order-2 md:order-none">
        <p className="text-xl md:text-2xl xl:text-2xl">Software Developer</p>
        <div className=" font-Inconsolata flex flex-col  items-center md:items-start xl:items-start">
          <h1 className="  text-4xl md:text-6xl xl:text-6xl font-bold">
            Hello I'm
          </h1>
          <h1 className=" text-4xl md:text-6xl xl:text-6xl font-bold text-accent">
            Sachin Thokale
          </h1>
        </div>
        <p className=" leading-5 text-center md:text-left xl:text-left">
          I am a Bachelor of Engineering graduate with a strong foundation in
          MERN stack development. My expertise spans both frontend and backend
          development, making me a versatile asset for web development roles.
        </p>
        <div className="flex flex-col md:flex-row xl:flex-row items-center gap-2">
          <Link
            to={resume}
            target="blank"
            className=" text-xl md:text-2xl xl:text-2xl text-accent border border-accent px-6 xl:px-8 py-1 xl:py-2 rounded-full flex gap-2 justify-center items-center"
          >
            <p> Download CV</p>
            <SaveAltIcon />
          </Link>
          <div className="p-2 flex gap-4 text-accent fons">
            <Link
              to={"https://github.com/sachinthokale?tab=repositories"}
              target="blank"
            >
              <GitHubIcon fontSize="large" />
            </Link>
            <Link
              to={"https://www.linkedin.com/in/sachin-thokale-39bb1320b/"}
              target="blank"
            >
              <LinkedInIcon fontSize="large" />
            </Link>
            <Link>
              <WhatsAppIcon fontSize="large" />
            </Link>
          </div>
        </div>
      </div>
      <div className=" order-1 md:order-none">
        <Photo />
      </div>
    </div>
  );
};

export default Home;
