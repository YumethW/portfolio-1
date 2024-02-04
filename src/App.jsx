import "./App.scss";
import NavBar from "./Componants/NavBar/NavBar.jsx";
import Hero from "./Componants/Hero/Hero.jsx";
import Parallax from "./Componants/Parallax/Parallax.jsx";
import Skills from "./Componants/Skills/Skills.jsx";
import Projects from "./Componants/Projects/Projects.jsx";

function App() {
  return (
    <div>
      <section id="Homepage">
        <NavBar />
        <Hero />
      </section>
      <section id="Skills">
        <Parallax type="skills" />
      </section>
      <section>
        <Skills />
      </section>
      <section id="Projects">
        <Parallax type="projects" />
      </section>
      <Projects />
      <section id="Contact">Contact</section>
    </div>
  );
}

export default App;
