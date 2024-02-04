import "./Parallax.scss";
import { motion } from "framer-motion";

function Parallax({ type }) {
  return (
    <div
      className="parallax"
      style={{
        background: type === "skills" ? "#0c0c1d" : "#cdedf6",
      }}
    >
      <motion.h1 style={{ color: type === "skills" ? "#cdedf6" : "#0c0c1d" }}>
        {type === "skills" ? "SKILLS" : "PROJECTS"}
      </motion.h1>

      <motion.div
        className="background"
        style={{
          backgroundImage:
            type === "skills"
              ? 'url("/public/background2.svg")'
              : 'url("/public/background1.svg")',
        }}
      ></motion.div>
    </div>
  );
}

export default Parallax;
