import React, { useState } from "react";
import MyContext from "./myContext";

function MyState({ children }) {
  let state = { name: "Smad Ul Hassan", class: "10th" };
  const [mode, setMode] = useState("light");
  const togleMode = () => {
    console.log(mode, "mode");
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(17, 24, 39)";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  state = { ...state, mode: mode, togleMode: togleMode };
  return <MyContext.Provider value={state}>{children}</MyContext.Provider>;
}

export default MyState;
