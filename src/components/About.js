import React from "react";
import { Trans, withNamespaces } from "react-i18next";

function About ({ t }) {
    return (
      <div className="card m-3">
        <div
          className="card-header text-container pointer"
          id="headingOne"
          data-toggle="collapse"
          data-target="#collapseOne"
          aria-expanded="false"
          aria-controls="collapseOne"
        >
          <h5 className="mb-0">
            <button
              className="btn collapsed"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              <Trans>
                {t("moreAboutMeTitle")}
              </Trans>
            </button>
          </h5>
        </div>

        <div
          id="collapseOne"
          className="collapse"
          aria-labelledby="headingOne"
          data-parent="#accordion"
        >
          <div className="card-body text-justify text-container">
            <Trans>
              {t("moreAboutMeText")}
            </Trans>
          </div>
        </div>
      </div>
    );
}

export default withNamespaces()(About);
