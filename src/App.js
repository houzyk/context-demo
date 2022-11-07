import React, { useState } from "react";
import Component1 from "./example";

export const MyContext = React.createContext("");

const Parent = () => {

  const [myState, setMyState] = useState("shivani");

  return (
    <>
      <MyContext.Provider value={myState}>
        <Component1/>
        <Component1/>
      </MyContext.Provider>
      <button onClick={() => setMyState(myState === "shivani" ? "nikhilesh" : "shivani")}>Change Name</button>
    </>
  );
}

export default Parent;
