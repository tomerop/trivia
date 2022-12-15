import React, { Component } from "react";
class Header extends Component {
  state = {
    arr: ["hey"],
    style: {
      color: "green",
      fontSize: 10,
    },
  };
  handleYaouza = (some) => {
    this.state.arr.push(some);
    this.setState({ arr: this.state.arr });
  };
  handleSizeColor = () => {
    this.state.style.fontSize = "large";
    if (this.state.style.color == "green") {
      this.state.style.color = "blue";
      this.setState({ style: this.state.style });
    } else this.state.style.color = "green";
    this.setState({ style: this.state.style });
  };

  render() {
    return (
      <React.Fragment>
        <nav className="navbar bg-light">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">Trivia Quiz</span>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Header;
