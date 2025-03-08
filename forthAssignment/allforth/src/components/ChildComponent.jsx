import React from "react";

const ChildComponent = ({ logCount }) => {
    return (
        <button 
            onClick={logCount}
            style={{
                padding: "10px 20px",
                fontSize: "16px",
                cursor: "pointer",
                borderRadius: "5px",
                backgroundColor: "#007BFF",
                color: "white",
                border: "none",
                marginTop: "10px"
            }}>
            Log Counter Value
        </button>
    );
};

export default ChildComponent;
