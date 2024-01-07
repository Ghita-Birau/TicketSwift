import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item && typeof item === "string" ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading from localStorage: ${error.message}`);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`Error writing to localStorage: ${error.message}`);
    }
  };

  const removeValue = () => {
    try {
      setStoredValue(undefined);
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing from localStorage: ${error.message}`);
    }
  };

  return { storedValue, setValue, removeValue };
};
