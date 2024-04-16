import React, { useContext } from "react";
import MyContext from "../../context/myContext";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export const Layout = ({ children }) => {
  const context = useContext(MyContext);
  console.log(context, "context");
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
