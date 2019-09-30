import React from "react";

export default class Nested extends React.Component {
  render() {
    const { nc, ncf, mainVal } = this.props;

    if (nc) {
      return (
        <div>
          <Nested nc={nc - 1} ncf={ncf} mainVal={mainVal} />
        </div>
      );
    } else {
      return <div>{mainVal}</div>;
    }
  }
}
