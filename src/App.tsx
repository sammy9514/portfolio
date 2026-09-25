import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NoteBookLayout from "./NoteBookLayout";

const App = () => (
  <NoteBookLayout>
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded focus:bg-ballpoint focus:px-4 focus:py-2 focus:text-white"
    >
      Skip to content
    </a>
    <Navbar />
    <main id="main">
      <Hero />
      <About />
      <Skill />
      <Project />
      <Contact />
    </main>
    <Footer />
  </NoteBookLayout>
);

export default App;
