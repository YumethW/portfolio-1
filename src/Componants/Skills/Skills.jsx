import "./Skills.scss";
import { motion } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 0,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

function Skills() {
  return (
    <motion.div
      className="skills"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          A digital wizard <br /> with a caffeine powered wand.
        </p>
        <hr />
      </motion.div>

      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <h1>
            Turning{" "}
            <motion.b whileHover={{ color: "#d72638" }}>
              Coffee into Code
            </motion.b>{" "}
            and
          </h1>
        </div>
        <div className="title">
          <h1>
            Ideas into{" "}
            <motion.b whileHover={{ color: "#d72638" }}>Innovation</motion.b>
          </h1>
        </div>
      </motion.div>

      <motion.div className="listContainer" variants={variants}>
        <motion.div className="skillBox">
          <h2>HTML CSS JS</h2>
          <p>
            With a strong foundation in HTML, a keen eye for CSS styling, and
            the ability to wield JavaScript for dynamic functionality, I bring a
            well-rounded skill set to web development. From crafting precise
            layouts to implementing intricate animations, I leverage these
            languages to create seamless and engaging user experiences. Let us
            transform code into a symphony of effective digital solutions
          </p>
        </motion.div>

        <motion.div className="skillBox">
          <h2>UX Design</h2>
          <p>
            Embarking on a journey through the digital realm with a compass in
            creativity and a map in user-centric design. Proficient in the art
            of wireframes, master of prototypes, and fluent in the language of
            delightful user experiences. Armed with empathy and armed with
            pixels, I strive to turn the mundane into the memorable, one click
            at a time.
          </p>
        </motion.div>

        <motion.div className="skillBox">
          <h2>Java</h2>
          <p>
            Proficient in the art of Object-Oriented Programming (OOP), I bring
            a wealth of experience in crafting elegant and efficient Java
            solutions. From encapsulation to polymorphism, my skill set
            encompasses the core principles of OOP, enabling me to design
            scalable and maintainable software with finesse.
          </p>
        </motion.div>

        <motion.div className="skillBox">
          <h2>React</h2>
          <p>
            Crafting seamless user interfaces with a passion for creating
            dynamic and responsive web applications. Experienced in
            component-based architecture, state management, and the latest React
            features while ensuring a delightful user experience.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Skills;
