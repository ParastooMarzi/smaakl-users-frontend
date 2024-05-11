import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";
import logo from "../assets/logo.png"
const Header = () => {
  return (
    <div className="border-b-2 border-b-red-500  h-30">
      <div className="container mx-auto flex justify-between items-center">
      <a href="/" className="inline-block w-32 h-13">
  <img
    src={logo}
    className="w-full h-full"
    alt="Logo"
  />
</a>


        <div className="md:hidden">
          <MobileNav />
        </div>
        <div className="hidden md:block">
          <MainNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
