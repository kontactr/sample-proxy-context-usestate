import React, { useState } from "react";
import ReactDOM from "react-dom";
import p from "./Context/User";

import "./styles.css";
import { User } from "./Components/User";

function App() {
  let onProxy = useState(0);

  const tempProxy = new Proxy(onProxy, {
    get(obj, prop) {
      if (typeof obj[prop] === typeof (() => {})) {
        return async newVal => {
          //const t = obj[0] + 1;
          await obj[1](newVal);

          setNested(newVal);
        };
      } else {
        return obj[prop];
      }
    }
  });

  let [nested, setNested] = useState(tempProxy[0]);

  return (
    <div className="App">
      <div>Hello</div>
      <p.UserProvider
        value={{
          a: tempProxy[0],
          setA: tempProxy[1],
          nested,
          setNested
        }}
      >
        <User />
      </p.UserProvider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
