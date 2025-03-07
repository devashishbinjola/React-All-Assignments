import React from "react";
import useMyHook from "../useMyHook";

const A = () => {
  const { value, updateValue } = useMyHook("inputData", "");

  return (
    <div>
      <h2>Component A</h2>
      <input
        type="text"
        value={value}
        onChange={(e) => updateValue(e.target.value)}
      />
    </div>
  );
};

export default A;
