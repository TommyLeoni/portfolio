import "bootstrap/dist/css/bootstrap.css";
import { default as React, default as React } from "react";
import "./App.css";
import { Card } from "./components/PopupCard";
import portraitMain from "./images/myself3.jpg";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        "Hi there! My name's Tomaso.",
        "Or Tommy, as most would call me.",
        "I'm a 16 year old Application Developer from Switzerland!"
      ],
      keywords: [
        "Application developer",
        "Technology fanatic",
        "Language admirer",
        "Fashion enthusiast"
      ],
      open: false
    };
  }

  toggleText = () => {
    const newItems = this.state.items;
    newItems[0] = "";
    newItems[1] = "";
    newItems[2] = "";
    newItems[3] = "";
    this.setState({
      items: newItems
    });
    setTimeout(_ => {
      newItems[0] = "aaa";
      newItems[1] = "aaaa";
      newItems[2] = "aaaaa";
      newItems[3] = "aaaaaa";
      this.setState({
        items: newItems
      });
    }, 500);
  };

  render() {
    return (
      <div className="App">
        <div className="row h-100 justify-content-center text-center">
          <div className="col-xl-12 col-md-12 my-auto d-inline-block">
            <div className="col-xl-12 mx-auto">
              <img
                alt="Myself"
                id="portrait"
                src={portraitMain}
                onClick={this.toggleText}
                className="rounded-circle img-fluid shadow img-container"
              />
            </div>
          </div>
          <div className="col-xl-10 col-md-12 text-center d-inline-block row">
            <div className="row justify-content-center">
              <div className="col-xl-3 mr-3 rounded shadow">
                <h1 className="p-4">About me</h1>
              </div>

              <div className="col-xl-3 mx-3 rounded shadow">
                <h1 className="p-4">CV</h1>
              </div>

              <div className="col-xl-3 ml-3 rounded shadow">
                <h1 className="p-4">Contact</h1>
              </div>
            </div>
            {/* <ReactCSSTransitionGroup
              transitionName="example"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300}
            >
            </ReactCSSTransitionGroup> */}
          </div>
          <div id="root">
            <Card />
          </div>
          <div className="row w-100 h-100"></div>
        </div>
      </div>
    );
  }
}
