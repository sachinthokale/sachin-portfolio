import { Link, useLocation } from "react-router-dom";

const DesktopNav = () => {
  const location = useLocation();

  const links = [
    {
      name: "Home",
      path: "/",
    },

    {
      name: "Resume",
      path: "/resume",
    },
    {
      name: "Work",
      path: "/work",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <div className="hidden text-xl  md:flex xl:flex  gap-4 justify-center items-center">
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            to={link.path}
            className={` p-1 hover:text-accent font-Inconsolata ${
              link.path == location.pathname
                ? "border-b-2 border-accent text-accent transition-all"
                : ""
            }`}
          >
            {link.name}
          </Link>
        );
      })}
      <button className=" font-Inconsolata px-9 py-2 bg-accent text-black rounded-full font-bold hover:bg-accent-hover ">
        Hire me
      </button>
    </div>
  );
};

export default DesktopNav;
