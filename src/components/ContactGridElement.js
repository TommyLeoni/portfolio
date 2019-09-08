import React from "react";

export default class ContactGridElement extends React.Component {
  render() {
    let iconStyle = {
      cursor: "pointer"
    };
    return (
      <>
        <div className={`col-lg-1 col-3 my-auto`}>
          <img
            src={this.props.icon}
            alt="An email icon"
            className="img-fluid icon my-auto"
            style={iconStyle}
            onClick={this.redirectToUrl}
          ></img>
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
                <a href={"mailto:" + this.props.mail}>{this.props.mail}</a>
              ) : (
                this.props.content
              )}
            </p>
          </div>
        </div>
      </>
    );
  }
}
