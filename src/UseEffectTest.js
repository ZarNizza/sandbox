import React from "react";
import { useState, useEffect } from "react";

export function FunctionUseState() {
    const [c, sC] = useState(0);
    useEffect(() => {
      setTimeout(() => console.log("Func: count = ", c), 3000);
      document.title = "C = " + c;
    });
    return (
      <>
        <p>Function Count = {c}</p>
        <button onClick={() => sC(c + 1)}>Inc (+)</button>
        <p>useState in Function updates with local environment Value, actual (fixed) at moment of function Call</p>
        <p>- - - - - - - - - - -</p>
      </>
    );

}

export class ClassThisState extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.myRef = React.createRef();
    this.clickHandler = this.clickHandler.bind(this);
  }
  componentDidMount() {
    console.log("Class CompDidMount: myRef = ", this.myRef.current); //
    this.myRef.current.textContent = "Inc(+): " + this.state.count;
  }
  componentDidUpdate() {
    setTimeout(() => {
      console.log(
        `Class ComponentDidUpdate: you clicked ${this.state.count} times`
      );
    }, 3000);
  }
  clickHandler = () => {this.setState((prevState, prevProps) => {return {count: ++prevState.count}})};
  render() {
    return (
      <>
      <p>this.state in Class update at the end of render cycle with last Value</p>
        <p>Class Count = {this.state.count}</p>
        <button ref={this.myRef} onClick={this.clickHandler}>
          abc
        </button>
      </>
    );
  }
}
