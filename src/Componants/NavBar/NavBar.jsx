import "./NavBar.scss";
import { motion } from "framer-motion";
import github from "/github-icon.svg";
import linkedIn from "/linkedin-icon.svg";
import SideBar from "../SideBar/SideBar.jsx";

function NavBar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <SideBar />

        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          trasition={{ duration: 0.5 }}
        >
          <img src="/Logo.svg" alt="Logo" />
        </motion.span>

        <div className="socials">
          <a href="https://github.com/YumethW">
            <img src={github} alt="Github" />
          </a>
          <a href="https://www.linkedin.com/in/yumeth-weerasekera/">
            <img src={linkedIn} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
