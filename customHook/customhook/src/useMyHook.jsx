import { useState, useEffect } from "react";

function useMyHook(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue !== null ? JSON.parse(storedValue) : initialValue;
    } catch (error) {
      console.error("Error parsing localStorage data:", error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  }, [key, value]);

  const updateValue = (newValue) => {
    setValue(newValue);
  };

  const getValue = () => {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue !== null ? JSON.parse(storedValue) : value;
    } catch (error) {
      console.error("Error retrieving value from localStorage:", error);
      return value;
    }
  };

  return { value, updateValue, getValue };
}

export default useMyHook;
