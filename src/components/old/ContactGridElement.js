import React from "react";

export default class ContactGridElement extends React.Component {
  openInNewTab = () => {
    var win = window.open(this.props.url, "_blank");
    win.focus();
  };

  mailTo = () => {
    window.location.href = "mailto:" + this.props.content;
  };

  render() {
    let iconStyle = {
      cursor: "pointer"
    };
    return (
      <>
        <div className={`col-lg-2 col-3 my-auto justify-content-center text-center`}>
          <a href={"mailto:" + this.props.mail}>
            <img
              src={this.props.icon}
              alt="An email icon"
              className="img-fluid icon my-auto"
              style={iconStyle}
              onClick={this.props.mail ? this.mailTo : this.openInNewTab}
            ></img>
          </a>
        </div>
        <div
          className={`text-left my-auto col-lg-${
            this.props.contentSize ? this.props.contentSize : "3"
          } col-${
            this.props.contentSize ? parseInt(this.props.contentSize) + 4 : "7"
          }`}
        >
          <div className="mt-3">
            <p className={this.props.center ? "my-auto" : ""}>
              {this.props.url ? (
                <a
                  href={this.props.url}
                  className="text-body"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {this.props.content}
                </a>
              ) : this.props.mail ? (
                <a href={"mailto:" + this.props.content} className="text-body">
                  {this.props.content}
                </a>
              ) : (
                "- " + this.props.content
              )}
            </p>
          </div>
        </div>
      </>
    );
  }
}
