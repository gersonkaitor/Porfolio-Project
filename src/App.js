import "./App.scss";
import { Routes, Route} from "react-router-dom";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
import Home from "./containers/home";
import About from "./containers/about";
import Contact from "./containers/contact";
import Skills from "./containers/skills";
import Portfolio from "./containers/portfolio";
import Resume from "./containers/resume";
import Navbar from "./components/navBar";
import Theme from "./components/theme";
// import particlesConfig from "./helpers/particlesConfig";

function App() {
  // const particlesInit = async (main) => {
  //   await loadFull(main);
  // };

  // const location = useLocation();
  // const renderParticleJsHomePage = location.pathname === "/";

  return (
    <div className="App">
      {/* particles js*/}
      {/* {renderParticleJsHomePage && (
        <Particles
          id="particles"
          options={particlesConfig}
          init={particlesInit}
        />
      )} */}

      {/* navbar component */}
      <div className="App-navbar-wrapper">
        <Navbar />
      </div>

      {/* main page content */}
      <div className="App-main-content-wrapper">
      <Theme/>
        <Routes>
          {/* create all routes*/}
          <Route path="/" index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      
    </div>
  );
}

export default App;
