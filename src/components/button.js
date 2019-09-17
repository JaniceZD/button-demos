import React from "react";
import "./button.css";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      deltaX: 0,
      deltaY: 0
    };
    this.myRef = React.createRef();
    console.log("1");
  }
  btn(event) {
    let { x, y } = this.myRef.current.getBoundingClientRect();
    let { clientX, clientY } = event;
    let deltaX = clientX - x - 5;
    let deltaY = clientY - y - 5;
    this.setState({
      active: true,
      deltaX: deltaX,
      deltaY: deltaY
    });
    console.log("里面的函数");
  }
  animateEnd() {
    this.setState({
      active: false
    });
  }
  render() {
    return (
      <div className="wrapper-center">
        <div className="wrapper">
          <button
            ref={this.myRef}
            className="btn"
            onClick={this.btn.bind(this)}
          >
            <span className="value">{this.props.value}</span>
            {this.state.active === true ? (
              <span
                className="circle"
                onAnimationEnd={() => this.animateEnd()}
                style={{ left: this.state.deltaX, top: this.state.deltaY }}
              />
            ) : (
              ""
            )}
          </button>
        </div>
      </div>
    );
  }
}

export default Button;
