import React, { Component } from "react";

const HOC = (ORComponent, path) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
      };
    }

    componentDidMount() {
      const fetchData = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/${path}`);
        const json = await res.json();
        this.setState({data: json});
      };
      fetchData();
    }

    render() {
      return (
        <div>
          <ORComponent data={this.state.data}></ORComponent>;
        </div>
      )
    }
  };
};

export default HOC;
