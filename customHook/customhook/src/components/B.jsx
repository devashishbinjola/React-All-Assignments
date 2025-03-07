import React from "react";
import useMyHook from "../useMyHook";
const B = () => {
  const { value, getValue } = useMyHook("inputData", "");
  return (
    <div>
      <h2>Component B</h2>
      <p>Stored Value: {getValue()}</p>
    </div>
  );
};

export default B;
