import React from "react";

export default class About extends React.Component {
  render() {
    return (
      <div className="card m-3">
        <div className="card-header text-container" id="headingOne">
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
            My name is Tomaso Aurelio Domenico Leoni and I am a 16 year old
            application developer from Switzerland, I however grew up in
            Germany, where I spent the first 11 years of my life. I have always
            been very invested in all sorts of technologies, so I always knew I
            was predestined to be working in this market branch one day. During
            my free time, I love working on my own personal projects or help
            others out with their projects. Apart from technology and software
            development though, I am also a great fan of learning languages,
            motor sports, fashion, music and aesthetics.
          </div>
        </div>
      </div>
    );
  }
}
