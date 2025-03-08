import React from "react";
import useLocalStorage from "../useLocalStorage";

const ThemeSwitcher = () => {
    const [theme, setTheme] = useLocalStorage("theme", "light");
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <div
            style={{
                backgroundColor: theme === "light" ? "#fff" : "#333",
                color: theme === "light" ? "#000" : "#fff",
                height: "200px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
            }}
        >
            <button
                onClick={toggleTheme}
                style={{
                    padding: "10px 20px",
                    fontSize: "18px",
                    cursor: "pointer",
                    borderRadius: "5px",
                    marginTop: "10px",
                }}
            >
                change Theme
            </button>
        </div>
    );
};

export default ThemeSwitcher;
