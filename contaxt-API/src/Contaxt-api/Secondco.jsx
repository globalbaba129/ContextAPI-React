import MyContext from "./context";
import React, { useContext } from "react";

const SecondComponent = () => {
    const { a } = useContext(MyContext);

    return (

        <>
        <h2>SecondCOMPONENT</h2>
        <div>{a}</div>
        
        </>
    );
};

export default SecondComponent;
