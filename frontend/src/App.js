import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import AOS from "./scripts";
import "./components/home-banner/home-banner.styles.scss";
import "./components/button/button.styles.scss";
import "./components/directory/directory.styles.scss";
import About from "./components/about/about.component";
import Projects from "./components/projects/projects.component";
import Resume from "./components/resume/resume.component";
import Navigation from "./routes/navigation/navigation.component";

const App = () => {
  AOS();

  return (
    <>
      <Navigation />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="resume" element={<Resume />} />
      </Routes>
    </>
  );
};

export default App;
