import React, { useState, useRef } from "react";
import { render } from "react-dom";
import { useTransition, useSpring, useChain, config } from "react-spring";
import { Container, Item } from "./styles";
import data from "./data";

export default function PopCard() {
  const [open, set] = useState(false);

  const springRef = useRef();
  const { size, opacity, ...rest } = useSpring({
    ref: springRef,
    config: config.stiff,
    from: { size: "33.333333%", background: "hotpink" },
    to: { size: open ? "100%" : "33.333333%", background: open ? "white" : "hotpink" }
  });

  const transRef = useRef();
  const transitions = useTransition(open ? data : [], item => item.name, {
    ref: transRef,
    unique: true,
    trail: 400 / data.length,
    from: { opacity: 0, transform: "scale(0)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0)" }
  });

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springRef, transRef] : [transRef, springRef], [
    0,
    open ? 0.1 : 0.6
  ]);

  return (
    <>
      <div className="col-4"
        onClick={() => set(open => !open)}
      >
        {transitions.map(({ item, key, props }) => (
          <Item key={key} style={{ ...props, background: item.css }}>
          </Item>
        ))}
      </div>
    </>
  );
}

render(<PopCard />, document.getElementById("root"));
