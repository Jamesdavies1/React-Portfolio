import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import './App.css';
import Home from './pages/home';
import Contact from './pages/contact';
import Projects from './pages/projects';
import Blog from './pages/blog';
import Navigation from "./components/navigation/navigation";
import Footer from "./components/footer/footer";


function App() {
  return (
    <Router>
      <div className = "App">
        <Navigation />
          <Route exact path="/" component={Home} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Projects" component={Projects} />
          <Route path="/Blog" component={Blog} />
          <Footer />
      </div>
    </Router>
  );
}

export default App;