import React from "react";
import portraitMain from "./images/myself3.jpg";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { Spring } from "react-spring/renderprops";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Card } from "./components/Card";
import PopCard from "./components/PopCard";
import { white, black } from "ansi-colors";

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
      ]
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
        <PopCard />
      </div>
    );
  }
}
