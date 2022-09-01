import React, { PureComponent } from "react";

export default class PureComp extends PureComponent {
  constructor() {
    super();
    this.incr = this.incr.bind(this);
    this.state = {
      count: 1,
    };
  }

  incr() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    console.log("rerender");
    return (
      <div>
        <button onClick={this.incr}>Click {this.state.count}</button>
      </div>
    );
  }
}

// import React from "react";

// const PureComp = (props) => {
//   return <div>
//              <h1>Hello</h1>
//              {props.children}
//          </div>;
// };

// export default PureComp;
