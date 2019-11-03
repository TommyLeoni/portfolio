import React from "react";
import { useSpring, animated } from "react-spring";

export default function Contact() {
    const props = useSpring({
      opacity: 1,
      from: { opacity: 0 },
    })
    return <animated.h1 style={props}>contact</animated.h1>
  }