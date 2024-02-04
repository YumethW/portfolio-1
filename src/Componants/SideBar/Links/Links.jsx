import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.15,
    },
  },

  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemsVariants = {
  open: {
    y: 0,
    opacity: 1,
  },

  closed: {
    y: 50,
    opacity: 0,
  },
};

function Links() {
  const navLinks = ["Homepage", "Skills", "Projects", "Contact", "About"];

  return (
    <motion.div className="Links" variants={variants}>
      {navLinks.map((navLinks) => (
        <motion.div
          key={navLinks}
          variants={itemsVariants}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.a href={`#${navLinks}`}>{navLinks}</motion.a>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Links;
