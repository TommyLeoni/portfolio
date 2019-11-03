import React from "react";
import { useSpring, animated } from "react-spring";

export default function Skills() {
    const props = useSpring({
      opacity: 1,
      from: { opacity: 0 },
    })
    return <animated.h1 style={props}>Skills</animated.h1>
  }