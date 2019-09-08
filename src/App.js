import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import React from "react";
import "./App.css";
import ContactGridElement from "./components/ContactGridElement";
import emailIcon from "./icons/email.svg";
import githubIcon from "./icons/github.svg";
import noteableIcon from "./icons/noteable_icon.png";
import moneylogIcon from "./icons/moneylog_icon.ico";
import matchedIcon from "./icons/matched_icon.png";
import splashxIcon from "./icons/splashx_icon.svg";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="row justify-content-center text-center w-100 h-100">
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
                <div className="col-9">
                  <div id="accordion">
                    <div className="card m-3">
                      <div
                        className="card-header text-container"
                        id="headingOne"
                      >
                        <h5 className="mb-0">
                          <button
                            className="btn collapsed"
                            data-toggle="collapse"
                            data-target="#collapseOne"
                            aria-expanded="false"
                            aria-controls="collapseOne"
                          >
                            More about me
                          </button>
                        </h5>
                      </div>

                      <div
                        id="collapseOne"
                        className="collapse"
                        aria-labelledby="headingOne"
                        data-parent="#accordion"
                      >
                        {/* After I have finished my school for
                          information technology in Berne, I would like to
                          venture towards more sophisticated topics, such as
                          artificial intelligence, medical information
                          technologies or other areas I already mentioned above.
                          Studying in one of these fields is also a plan of
                          mine, although I am currently still undecided as to
                          what program I will end up taking up: Medical
                          Information Technology, Bioinformatics and Biomedical
                        Engineering or just plain old Computer Science? --> */}
                        <div className="card-body text-justify text-container">
                          My name is Tomaso Aurelio Domenico Leoni and I am a 16
                          year old application developer from Switzerland, I
                          however grew up in Germany, where I spent the first 11
                          years of my life. I have always been very invested in
                          all sorts of technologies, so I always knew I was
                          predestined to be working in this market branch one
                          day. During my free time, I love working on my own
                          personal projects or help others out with their
                          projects. Apart from technology and software
                          development though, I am also a great fan of learning
                          languages, motor sports, fashion, music and
                          aesthetics.
                        </div>
                      </div>
                    </div>
                    <div className="card m-3">
                      <div
                        className="card-header text-container"
                        id="headingTwo"
                      >
                        <h5 className="mb-0">
                          <button
                            className="btn collapsed"
                            data-toggle="collapse"
                            data-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            Skills / CV
                          </button>
                        </h5>
                      </div>
                      <div
                        id="collapseTwo"
                        className="collapse"
                        aria-labelledby="headingTwo"
                        data-parent="#accordion"
                      >
                        <div className="card-body text-justify text-container">
                          <div className="row text-center">
                            <div className="col-12 mb-2">
                              <p>
                                Take a look at my complete{" "}
                                <a
                                  className="text-body"
                                  href="CV_TomasoLeoni.pdf"
                                  download
                                >
                                  <u>CV</u>
                                </a>{" "}
                                or catch a glimpse of my skills below:
                              </p>
                            </div>
                            <div className="col-6">
                              <dl className="text-left">
                                <dt>Programming skills:</dt>
                                <dd>
                                  • Deep knowledge of Java, C#, Dart, Python,
                                  JavaScript, Ruby, HTML & CSS
                                </dd>
                                <dd>
                                  • Broad experience in mobile and web
                                  development using Flutter, Android Studio,
                                  Ruby on Rails, ReactJS & NodeJS
                                </dd>
                                <dd>
                                  • Great knowledge of databases: SQLite, MySQL,
                                  Dokumentbasierte Datenbanken (MongoDB &
                                  Firebase)
                                </dd>
                              </dl>
                            </div>
                            <div className="col-6">
                              <dl className="text-left">
                                <strong>Language skills:</strong>
                                <dd>
                                  <span>• German</span>
                                  <span className="font-italic">
                                    {" "}
                                    - Native language, I grew up in Germany, but
                                    I have no issues whatsoever understanding
                                    the Swiss German language
                                  </span>
                                </dd>
                                <dd>
                                  <span>• Italian</span>
                                  <span className="font-italic">
                                    {" "}
                                    - 2nd Native language
                                  </span>
                                </dd>
                                <dd>
                                  <span>• English</span>
                                  <span className="font-italic">
                                    {" "}
                                    - Certificate of Proficiency in English
                                    (Level C2, achieved in April of 2019)
                                  </span>
                                </dd>
                                <dd>
                                  <span>• French</span>
                                  <span className="font-italic">
                                    {" "}
                                    - (Upcoming) Diplôme avancé de la langue
                                    francaise (Level C1)
                                  </span>
                                </dd>
                                <dd>
                                  <span>• Swedish</span>
                                  <span className="font-italic">
                                    {" "}
                                    - Level B1/B2, self-taught
                                  </span>
                                </dd>
                              </dl>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card m-3">
                      <div
                        className="card-header text-container"
                        id="headingThree"
                      >
                        <h5 className="mb-0">
                          <button
                            className="btn collapsed"
                            data-toggle="collapse"
                            data-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            Projects
                          </button>
                        </h5>
                      </div>
                      <div
                        id="collapseThree"
                        className="collapse text-container"
                        aria-labelledby="headingThree"
                        data-parent="#accordion"
                      >
                        <div className="card-body text-justify text-container">
                          <div className="row text-center justify-content-center">
                            <ContactGridElement
                              icon={noteableIcon}
                              content="noteable - A note taking app for iOS and Android"
                              contentSize="5"
                              url="https://github.com/TommyLeoni/noteable_public"
                            ></ContactGridElement>
                            <ContactGridElement
                              icon={moneylogIcon}
                              content="moneylog - A WPF based personal finance management tool"
                              contentSize="5"
                              url="https://github.com/TommyLeoni/moneylog"
                            ></ContactGridElement>
                          </div>
                          <div className="row justify-content-center text-left">
                            <ContactGridElement
                              icon={matchedIcon}
                              content="MatchEd - A platform designed for academics: Share your interests and find people to collaborate with"
                              contentSize="5"
                              url="https://github.com/TommyLeoni/MatchEd-Frontend"
                            ></ContactGridElement>
                            <ContactGridElement
                              icon={splashxIcon}
                              content="SplashX - The app that gives you all necessary information about the swimming pools in your area"
                              contentSize="5"
                              url="https://github.com/TommyLeoni/splashx"
                            ></ContactGridElement>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card m-3">
                      <div
                        className="card-header text-container"
                        id="headingFour"
                      >
                        <h5 className="mb-0">
                          <button
                            className="btn collapsed"
                            data-toggle="collapse"
                            data-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFuor"
                          >
                            Contact
                          </button>
                        </h5>
                      </div>
                      <div
                        id="collapseFour"
                        className="collapse text-container"
                        aria-labelledby="headingFour"
                        data-parent="#accordion"
                      >
                        <div className="card-body text-justify text-container">
                          <div className="row text-center justify-content-center">
                            <ContactGridElement
                              icon={emailIcon}
                              content="tomasoleoni@gmail.com"
                            ></ContactGridElement>
                            <ContactGridElement
                              icon={githubIcon}
                              content="TommyLeoni"
                              contentSize="md"
                              url="https://github.com/TommyLeoni"
                            ></ContactGridElement>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
