import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const ToggleButton = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);
  return (
    <button
      className="px-4 py-2 mt-4 bg-blue-500 text-white rounded hover:bg-blue-700"
      onClick={toggleTheme}
    >
     {theme === 'light' ? 'switch to dark mode':'switch to light mode'}
    </button>
  );
};
export default ToggleButton
