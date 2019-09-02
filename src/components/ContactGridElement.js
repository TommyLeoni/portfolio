import React from "react";

export default class ContactGridElement extends React.Component {
  render() {
    return (
      <>
        <div className="col-1">
          <img
            src={this.props.icon}
            alt="An email icon"
            className="img-fluid icon"
          ></img>
        </div>
        <div
          className={`my-auto text-left col-${
            this.props.contentSize ? this.props.contentSize : "3"
          }`}
        >
          <p className="my-auto">
            {this.props.url ? (
              <a
                href={this.props.url}
                className="text-body"
                target="_blank"
                rel="noopener noreferrer"
              >
                <u>{this.props.content}</u>
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
