import "./App.css";
import {Routes, Route} from 'react-router-dom';
import Home from './containers/home'
import About from './containers/about'
import Contact from './containers/contact'
import Skills from './containers/skills'
import Portfolio from './containers/portfolio'
import Resume from './containers/resume'
import Navbar from "./components/navBar"

function App() {
  return <div className="App">
    {/* particles js*/}
    {/* navbar component */}
    <Navbar />
    {/* main page content */}
    <Routes>
      {/* create all routes*/}
      <Route path="/" index element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/skills" element={<Skills/>}/>
      <Route path="/resume" element={<Resume/>}/>
      <Route path="/portfolio" element={<Portfolio/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
  </div>;
}

export default App;
