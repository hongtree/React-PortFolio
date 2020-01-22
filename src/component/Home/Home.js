import React, { Component } from "react";
import "./Home.css";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  componentDidMount() {
    let i = 0;
    const typing = setInterval(() => {
      const typed = this.state.text;
      const finalText = "Front-end Developer ";

      if (i < finalText.length) {
        this.setState({
          text: typed + finalText[i]
        });
        i++;
      } else {
        clearInterval(typing);
      }
    }, 178);
  }
  render() {
    const SubText = "이환승의 포트폴리오입니다.";

    return (
      <>
        <div className="typer" id="h">
          <h1 className="typer-text">{this.state.text}</h1>
          <h2 className="sub-text">{SubText}</h2>
        </div>
      </>
    );
  }
}

export default Home;
