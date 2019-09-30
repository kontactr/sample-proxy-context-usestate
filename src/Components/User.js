import React from "react";
import p from "../Context/User";
import SelfNesting from "./SelfNesting";

export class User extends React.Component {
  render() {
    return (
      <p.UserConsumer>
        {val => {
          return [
            <div>{val.a}</div>,
            <br />,
            <div>
              <button
                onClick={() => {
                  val.setA(++val.a);
                }}
              >
                INC1
              </button>
            </div>,
            <br />,
            <SelfNesting />
          ];
        }}
      </p.UserConsumer>
    );
  }
}
