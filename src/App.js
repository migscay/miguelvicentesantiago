import "bootstrap/dist/css/bootstrap.min.css";
import './App.scss';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
// import { Particles } from "react-particles-js";
import { BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <>
    {/* <Router> */}
      {/* <Particles 
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900  
              }
            },
            shape: {
              type: "star",
              stroke: {    
                width: 6,
                color: "#f9ab00"
              }
            }
          }  
        }}    
      /> */}

    <Router>    
        <Navbar />
        <Route path="/" exact component={Header} />
        <Route path="/About" exact component={About} />
        <Route path="/Projects" exact component={Projects} />
        <Route path="/Contact" exact component={Contact} />
        <Footer />
    </Router>    
    </>
  ) 
  
}

export default App;
