import React from "react";

export default class Skills extends React.Component {
  render() {
    return (
      <div className="card m-3">
        <div className="card-header text-container" id="headingTwo">
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
                  <a className="text-body" href="CV_TomasoLeoni.pdf" download>
                    <u>CV</u>
                  </a>{" "}
                  or catch a glimpse of my skills below:
                </p>
              </div>
              <div className="col-6">
                <dl className="text-left">
                  <dt>Programming skills:</dt>
                  <dd>
                    • Deep knowledge of Java, C#, Dart, Python, JavaScript,
                    Ruby, HTML & CSS
                  </dd>
                  <dd>
                    • Broad experience in mobile and web development using
                    Flutter, Android Studio, Ruby on Rails, ReactJS & NodeJS
                  </dd>
                  <dd>
                    • Great knowledge of databases: SQLite, MySQL,
                    Dokumentbasierte Datenbanken (MongoDB & Firebase)
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
                      - Native language, I grew up in Germany, but I have no
                      issues whatsoever understanding the Swiss German language
                    </span>
                  </dd>
                  <dd>
                    <span>• Italian</span>
                    <span className="font-italic"> - 2nd Native language</span>
                  </dd>
                  <dd>
                    <span>• English</span>
                    <span className="font-italic">
                      {" "}
                      - Certificate of Proficiency in English (Level C2,
                      achieved in April of 2019)
                    </span>
                  </dd>
                  <dd>
                    <span>• French</span>
                    <span className="font-italic">
                      {" "}
                      - (Upcoming) Diplôme avancé de la langue francaise (Level
                      C1)
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
    );
  }
}
