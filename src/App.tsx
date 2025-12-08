import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skill from "./components/Skill";
import App2 from "./App2";
import NoteBookLayout from "./NoteBookLayout";

const App = () => {
  const rand = Math.floor(Math.random() * 2) + 1;

  return (
    <div>
      {rand === 1 ? (
        <NoteBookLayout>
          <Navbar />
          <Hero />
          <About />
          <Skill />
          <Project />
          <Contact />
          <Footer />
        </NoteBookLayout>
      ) : (
        <App2 />
      )}
    </div>
  );
};

export default App;
