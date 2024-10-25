import React, { useState, useContext, createContext, useEffect } from "react";

const ThemeContext = createContext();// khoi tao 1 context voi gia tri mac dinh la null

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
  // khoi tao components la themeprovider 
  // su dung usestate de luu gia tri mac dinh la light 
  // ham togglethême duoc su dung de thay doi gia tri mac dinh la light sang dark va nguoc lai
  // ham useEffect duoc su dung de thay doi classlist cua document root theo gia tri theme

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
  //themeprovider cung cap cac gia tri la theme va toggleThme cho cac component con qua themecontext.provider va components con o day duoc noi den la children 
};
const Header = () => {
  const { theme } = useContext(ThemeContext);
  return <h1 className="text-2xl"> Current theme: {theme}</h1>;
};
// components header o day su dung useContext de lay gia tri theme tu themeContext 
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
// components toggleButton o day su dung useContext de lay gia tri theme neu la light thi se hien thi title o button la switch to dark mode va nguoc lai 
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
// components contextExample su dung themeprovider de boc lai cac components con 
export default ContextExample;
