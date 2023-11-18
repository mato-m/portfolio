import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Expertise from "./components/expertise/Expertise";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Projects from "./components/projects/Projects";
function App() {
  return (
    <div className="mainDiv">
      <BrowserRouter>
        <Sidebar />
        <div className="mainPage">
          <Routes>
            <Route exact path="/" element={<About />} />
            <Route exact path="/expertise" element={<Expertise />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
