import First_co from "./First_co";
import React, { createContext, useState } from "react";
import SecondComponent from "./Secondco";

// Create Context
const MyContext = createContext();

// Context Provider Component

export const ContextProvider = () => {
    const [data, setData] = useState(1);

    return (
        <MyContext.Provider value={{ a: data }}>
           <>
           <h2>context component</h2>
           <button onClick={() => setData(data + 1)}>Add Value</button>
           <First_co/>
          <SecondComponent/>
           </>
        </MyContext.Provider>
    );
};

export default MyContext;
