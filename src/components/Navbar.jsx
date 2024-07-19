import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
const Navbar = () => {
  return (
    <nav className="p-2  flex justify-between md:justify-around xl:justify-around bg-primary text-white">
      <h1 className=" text-4xl xl:text-6xl font-Inconsolata font-bold">
        Sachin<span className=" text-accent font-bold">.</span>
      </h1>
      <div className="hidden md:flex">
        <DesktopNav />
      </div>
      <div className=" md:hidden">
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
