import React from "react";
import p from "../Context/User";
import Nested from "./Nested";

export default class SelfNesting extends React.Component {
  render() {
    return (
      <p.UserConsumer>
        {val => {
          return (
            <Nested nc={val.nested} ncf={val.setNested} mainVal={val.nested} />
          );
        }}
      </p.UserConsumer>
    );
  }
}
