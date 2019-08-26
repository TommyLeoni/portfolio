import React from "react";
import {useSpring, animated} from 'react-spring'
import { Card } from "./components/PopupCard";
import portraitMain from "./images/myself3.jpg";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import CustomCard from "./components/CustomCard";

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
        <div id="root">
          <Card />
        </div>
        <div className="row w-100 h-100"></div>
      </div>
    );
  }
}
