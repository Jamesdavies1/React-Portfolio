import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/home';
import Contact from '/pages/contact';
import Projects from '/pages/Projects';
import Navbar from "./components/navigation/navigation";
import Footer from "./components/footer/footer";


function App() {
  return (
    <Router>
      <div className = "App">
        <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Projects" component={Projects} />
          <Footer />
      </div>
    </Router>
  );
}

export default App;
