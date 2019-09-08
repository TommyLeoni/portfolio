import React from "react";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="App overflow-hidden">
        <div className="row justify-content-center text-center h-100">
          <div className="col-sm-4 col-12 pr-0 img-left-col-container">
            <div className="img-left-col"></div>
          </div>
          <div className="col-sm-8 col-11 pl-0 my-sm-auto landing">
            <div className="d-inline-block">
              <h1 className="greeting">Hi! My name's Tomaso</h1>
            </div>
            <div className="leading-text">
              <div className="row justify-content-center text-center landing">
                <div className="col-lg-8 col-11">
                  <p className="mt-3 landing-text">
                    I am an Application developer from Switzerland, with a
                    current major interest in technologies of the future such as
                    artificial intelligence, machine learning, medical
                    informatics and biomechanical engineering
                  </p>
                </div>
                <div className="col-lg-9 col-12">
                  <div id="accordion">
                    <About />
                    <Skills />
                    <Projects />
                    <Contact />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
