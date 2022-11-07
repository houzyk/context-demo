import { useContext } from "react";
import { MyContext } from "./App";

const Component1 = () => {
  return <Component2/>;
}

const Component2 = () => {
  return <Component3/>;
}

const Component3 = () => {
  const myContextInAChild = useContext(MyContext);
  return <p>hello {myContextInAChild}</p>
}

export default Component1;