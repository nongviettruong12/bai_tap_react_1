import React, { useState, useContext, createContext, useEffect } from "react";

const ThemeContext = createContext('');

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
const Header = () => {
  const { theme } = useContext(ThemeContext);
  return <h1 className="text-2xl"> Current theme: {theme}</h1>;
};
const ToggleButton = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);
  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 mt-4 bg-blue-500 text-white rounded hover:bg-blue-700"
    >
      {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
    </button>
  );
};
const ContextExample = () => {
  return (
    <ThemeProvider>
      <div className="p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 min-h-screen">
        <Header />
        <ToggleButton />
      </div>
    </ThemeProvider>
  );
};
export default ContextExample;
