import "./Hero.scss";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../../assets/Animation - 1705917793025.json";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },

  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },

  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 1,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },

  animate: {
    x: "-200%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

function Hero() {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>YUMETH WEERASEKERA</motion.h2>

          <motion.h1 variants={textVariants}>DEVELOPER</motion.h1>
          <motion.h1 variants={textVariants}>DESIGNER</motion.h1>

          <motion.div className="button" variants={textVariants}>
            <motion.button variants={textVariants}>See my work</motion.button>
            <motion.button variants={textVariants}>Keep in touch</motion.button>
          </motion.div>

          <motion.img
            src="/mouse-scroll.svg"
            alt="Mouse scroll"
            variants={textVariants}
            animate="scrollButton"
          />
        </motion.div>
      </div>

      <div className="heroAnimation">
        <Lottie animationData={animationData} />
      </div>

      <motion.div
        className="slidingSVGContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        <img src="/Bread1.svg" alt="" />
        <img src="/Cola.svg" alt="" />
        <img src="/Music.svg" alt="" />
        <img src="/Cap.svg" alt="" />
        <img src="/Bread2.svg" alt="" />
        <img src="/Mountain.svg" alt="" />
        <img src="/Backpack.svg" alt="" />
        <img src="/Spotify.svg" alt="" />
        <img src="/Netflix.svg" alt="" />
      </motion.div>
    </div>
  );
}

export default Hero;
