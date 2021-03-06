import React from "react";
import { useWindowSize } from "@reach/window-size";

let name = "useWindowSize";

function Example() {
  const sizes = useWindowSize();
  return (
    <pre>Window size (but with a hook): {JSON.stringify(sizes, null, 2)}</pre>
  );
}

Example.story = { name };
export const Comp = Example;
export default { title: "Window Size" };
