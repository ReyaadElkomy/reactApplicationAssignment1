import React, { Component } from "react";
import "./styles.css";

class Footer extends Component {
  constructor() {
    super();

    this.state = {
      notificationMessage: "click the subscribe button to get any new"
    };

    this.subscribeFireMessage = this.subscribeFireMessage.bind(this);
  }

  subscribeFireMessage() {
    this.setState({
      notificationMessage: "Thank you for subscribe"
    });
  }
  render() {
    return (
      <div className="footerStyle">
        <p> {this.state.notificationMessage} </p>
        <button className="btnStyle" onClick={this.subscribeFireMessage}>
          {" "}
          Subscribe{" "}
        </button>
      </div>
    );
  }
}

export default Footer;
