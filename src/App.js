import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import React, { memo, useState } from "react";
import { Trans, withNamespaces } from "react-i18next";
import { useSpring, a } from "react-spring";
import { useMeasure, usePrevious } from "./helpers";
import { Global, Frame, Title, Content, toggle } from "./styles";
import * as Icons from "./icons";
import "react-tiny-fab/dist/styles.css";
import "./App.scss";
/*import About from "./components/About";
import Contact from "./components/Contact";
import LanguageSwitcher from "./components/LanguageSwitcher";
import Projects from "./components/Projects";
import Skills from "./components/Skills"; */

const Tree = memo(({ children, name, style, defaultOpen = false }) => {
  const [isOpen, setOpen] = useState(defaultOpen);
  const previous = usePrevious(isOpen);
  const [bind, { height: viewHeight }] = useMeasure();
  const { height, opacity, transform } = useSpring({
    from: { height: 0, opacity: 0, transform: "translate3d(20px,0,0)" },
    to: {
      height: isOpen ? viewHeight : 0,
      opacity: isOpen ? 1 : 0,
      transform: `translate3d(${isOpen ? 0 : 20}px,0,0)`
    }
  });
  const Icon =
    Icons[`${children ? (isOpen ? "Minus" : "Plus") : "Close"}SquareO`];
  return (
    <Frame>
      <Icon
        style={{ ...toggle, opacity: children ? 1 : 0.3 }}
        onClick={() => setOpen(!isOpen)}
      />
      <Title style={style}>{name}</Title>
      <Content
        style={{
          opacity,
          height: isOpen && previous === isOpen ? "auto" : height
        }}
      >
        <a.div style={{ transform }} {...bind} children={children} />
      </Content>
    </Frame>
  );
});

function App({ t }) {
  return (
    <div className="App container">
      <div className="row justify-content-center h-100 p-0 m-0">
        <div className="col-4 my-auto">
          <h6 className="font-weight-light">Hi, my name is</h6>
          <h2 className="font-weight-bold">Tomaso Leoni</h2>
          <h6 className="font-weight-light">
            and I am a seventeen-year-old application developer from Switzerland
            <span role="img" aria-label="Swiss flag">
              🇨🇭
            </span>
          </h6>
          <Tree name={<span>Navigation <span role="img" aria-label="Compass emoji">🧭</span></span>} defaultOpen>
            <Tree name="About me" />
            <Tree name="My projects" />
            <Tree name="Education & Skils" />
            <Tree name="Contact me" />
          </Tree>
        </div>
        <div className="col-8 my-auto"></div>
      </div>
      {/*
      <div className="row justify-content-center text-center h-100 p-0 m-0">
        <div className="col-sm-4 col-12 p-0 float-left d-none d-md-block">
          <div className="img-left-col sticky-top"></div>
        </div>
        <div className="col-sm-4 col-12 pr-0 img-left-col-container d-sm-none">
          <div className="img-left-col"></div>
        </div>
        <div className="col-sm-8 col-11  px-0 my-sm-auto mt-3 landing">
          <div className="d-inline-block">
            <h1 className="greeting">
              <Trans>{t("title")}</Trans>
            </h1>
          </div>
          <div className="leading-text">
            <div className="row justify-content-center text-center landing">
              <div className="col-lg-9 col-sm-12 col-11">
                <p className="mt-3 landing-text">
                  <Trans>{t("leadingText")}</Trans>
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
          <LanguageSwitcher />
        </div>
    </div> */}
    </div>
  );
}

export default withNamespaces()(App);
