import React from "react";

export default class ContactGridElement extends React.Component {
  redirectToUrl = () => {
    window.open(this.props.url, "_blank");
    return null;
  };

  render() {
    let iconStyle = {
      cursor: 'pointer'
    };
    return (
      <>
        <div className="col-1">
          <img
            src={this.props.icon}
            alt="An email icon"
            className="img-fluid icon"
            style={iconStyle}
            onClick={this.redirectToUrl}
          ></img>
        </div>
        <div
          className={`text-left my-auto col-${
            this.props.contentSize ? this.props.contentSize : "3"
          }`}
        >
          <p className="">
            {this.props.url ? (
              <a
                href={this.props.url}
                className="text-body"
                target="_blank"
                rel="noopener noreferrer"
              >
                {this.props.content}
              </a>
            ) : (
              this.props.content
            )}
          </p>
        </div>
      </>
    );
  }
}
