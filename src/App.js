import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import "./App.css";

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
        <div className="row justify-content-center text-center landing">
          <div className="col-4 img-left-col"></div>
          <div className="col-8 my-auto">
            <div className="greeting d-inline-block">
              <h1>Hi! My name's Tomaso</h1>
            </div>
            <div className="leading-text">
              <div className="row justify-content-center text-center landing">
                <div className="col-8">
                  <p className="mt-3">
                    I am an Application developer from Switzerland, with a
                    current major interest in technologies of the future such as
                    artificial intelligence, machine learning and biomechanical
                    engineering
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
