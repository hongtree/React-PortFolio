import React, { Component } from "react";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import Skills from "./component/Skills/Skills";
import Project from "./component/Project/Project";
import Contact from "./component/Contact/Contact";

class App extends Component {
  render() {
    return (
      <div className="HomepageLayout">
        <Header />
        <Home />
        <About />
        <Skills />
        <Project />
        <Contact />
        {/* 
       <Project/>
       <Contact/> */}
      </div>
    );
  }
}
export default App;
