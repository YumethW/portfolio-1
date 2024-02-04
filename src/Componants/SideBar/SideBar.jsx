import "./SideBar.scss";
import ToggleButton from "./ToggleButton/ToggleButton.jsx";
import Links from "./Links/Links.jsx";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function SideBar() {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
      clipPath: "circle(75rem at 3rem 3rem)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },

    closed: {
      clipPath: "circle(2rem at 3rem 3rem)",
      transition: {
        delay: 0.1,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <div>
      <AnimatePresence>
        {open && (
          <motion.div
            className="backdrop"
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>

      <motion.div className="sidebar" animate={open ? "open" : "closed"}>
        <motion.div className="background" variants={variants}>
          <Links />
        </motion.div>
        <ToggleButton setOpen={setOpen} />
      </motion.div>
    </div>
  );
}

export default SideBar;
