import MyContext from "./context";
import React, { useContext } from "react";

const First_co = () => {
    const { a } = useContext(MyContext);
  return (
    <>
    <h2>First_co</h2>
    <div>{a}</div>
    </>
  )
}

export default First_co