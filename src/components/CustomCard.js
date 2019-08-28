import React, { useState, useRef } from "react";
import { useTransition, useSpring, useChain, config } from "react-spring";
import "./styling/CustomCard.css";

export default function CustomCard() {
  const [open, set] = useState(false);

  const springRef = useRef();
  const { size, opacity, ...rest } = useSpring({
    ref: springRef,
    config: config.stiff,
    from: { size: "33.333333%", background: "hotpink" },
    to: {
      size: open ? "100%" : "33.333333%",
      background: open ? "white" : "hotpink"
    }
  });

  const transRef = useRef();
  const transitions = useTransition(open ? 0 : [], item => item.name, {
    ref: transRef,
    unique: true,
    trail: 200,
    from: { opacity: 0, transform: "scale(0)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0)" }
  });

  useChain(open ? [springRef, transRef] : [transRef, springRef], [
    0,
    open ? 0.1 : 0.6
  ]);

  return (
    <div
      className="card-container mx-auto m-5 text-center"
      onClick={() => set(open => !open)}
    >
      <div className="my-auto p-5">servus</div>
    </div>
  );
}
