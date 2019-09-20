import React from "react";
import { withNamespaces } from "react-i18next";

function Skills({ t }) {
  const skillsInfoText = t("skillsInfoText");

  const rawCodingSkills = t("codingSkills");
  const codingSkills = rawCodingSkills.map((skill, key) => (
    <dd key={key}>• {skill}</dd>
  ));

  const rawLanguageSkills = t("languageSkills");
  const languageSkills = rawLanguageSkills.map((skill, key) => (
    <dd key={key}>
      <span>• {skill["language"]}</span>
      <span className="font-italic"> - {skill["details"]}</span>
    </dd>
  ));

  return (
    <div className="card m-3">
      <div
        className="card-header text-container pointer"
        id="headingTwo"
        data-toggle="collapse"
        data-target="#collapseTwo"
        aria-expanded="false"
        aria-controls="collapseTwo"
      >
        <h5 className="mb-0">
          <button className="btn collapsed">{t("skillsTitle")}</button>
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
                {skillsInfoText[0]}
                <a className="text-body" href="CV_TomasoLeoni.pdf" download>
                  <u>{skillsInfoText[1]}</u>
                </a>
                {skillsInfoText[2]}
              </p>
            </div>
            <div className="col-12 col-md-6">
              <dl className="text-left">
                <strong>{t("skillsLeftTitle")}</strong>
                {codingSkills}
              </dl>
            </div>
            <div className="col-12 col-md-6">
              <dl className="text-left">
                <strong>{t("skillsRightTitle")}</strong>
                {languageSkills}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withNamespaces()(Skills);
