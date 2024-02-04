import "./Projects.scss";

const projectItems = [
  {
    id: 1,
    title: "Real Estate locating System",
    img: "/ProjectImgs/realestate.png",
    description:
      "This project presents a client-side web application developed using HTML5 and React JS, offering users the capability to search for properties based on diverse criteria such as property type, price range, number of bedrooms, listing date, and postcode area. The application leverages React Widgets to augment form elements, ensuring uniformity, dependability, and accessibility across the user interface.",
    tags: "React",
  },
  {
    id: 2,
    title: "Shopping Manager Application",
    img: "/ProjectImgs/shoppingManager.png",
    description:
      "An Online Shopping System that facilitates both the management and user interaction aspects of an online shopping platform. The project is divided into two phases, each focusing on different aspects of the system: console menu implementation, and graphical user interface (GUI) implementation. Additionally, another phase involves testing and system validation to ensure the robustness and reliability of the code.",
    tags: "Java, Swing, Object Oriented Programming",
  },
  {
    id: 3,
    title: "Title",
    img: "/ProjectImgs/realestate.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, ab aspernatur dignissimos doloremque ea eaque laudantium neque nobis, nulla quam quidem recusandae sapiente, voluptatum. Cupiditate est possimus saepe voluptate voluptates.",
    tags: "etc",
  },
  {
    id: 4,
    title: "Title",
    img: "/ProjectImgs/shoppingManager.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, ab aspernatur dignissimos doloremque ea eaque laudantium neque nobis, nulla quam quidem recusandae sapiente, voluptatum. Cupiditate est possimus saepe voluptate voluptates.",
    tags: "etc",
  },
];
function Projects() {
  return <div className="projects"></div>;
}

export default Projects;
