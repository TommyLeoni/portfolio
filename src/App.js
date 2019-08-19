import React from "react";
import portrait from "./images/myself2.jpg";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: ["Hi there! My name's Tomaso.", "Or Tommy, as most would call me.", "I'm a 16 year old Application Developer from Switzerland!"]};
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
    }, 500)
  }

  render() {
    return (
      <div className="App">
        <div className="row h-100 justify-content-center text-center">
          <div className="col-xl-5 col-md-12 my-auto">
            <div className="col-xl-6 mx-auto">
              <img
                alt="Myself"
                src={portrait}
                onClick={this.toggleText}
                className="rounded-circle img-fluid shadow"
              />
            </div>
          </div>
          <div className="col-xl-7 col-md-12 my-auto text-left">
            <ReactCSSTransitionGroup
              transitionName="example"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300}
            >
              <div className="col-xl-10 mx-auto">
                <h1>{this.state.items[0]}</h1>
              </div>
            </ReactCSSTransitionGroup>
          </div>
        </div>
      </div>
    );
  }
}
