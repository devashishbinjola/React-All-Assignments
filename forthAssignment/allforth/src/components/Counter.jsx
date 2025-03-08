import React, { useState, useCallback } from "react";
import ChildComponent from "./ChildComponent";

const Counter = () => {
    const [count, setCount] = useState(0);

    const logCount = useCallback(() => {
        console.log(`Current Count: ${count}`);
    }, [count]);

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2>useCallback</h2>
            <h3>Counter: {count}</h3>
            <button 
                onClick={() => setCount(count + 1)}
                style={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    marginRight: "10px",
                    cursor: "pointer",
                    borderRadius: "5px"
                }}>
                Increase Count
            </button>
            <ChildComponent logCount={logCount} />
        </div>
    );
};

export default Counter;
