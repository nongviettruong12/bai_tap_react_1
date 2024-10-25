import React from "react";
import ThemeProvider from "../context/ThemeProvider";
import Header from "../components/Header";
import ToggleButton from "../components/ToggleButton";

const ContextExam = () =>{
    return (
        <ThemeProvider>
            <div className="p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 min-h-screen">
            <Header />
            <ToggleButton />
            </div>
        </ThemeProvider>
    )
}
export default ContextExam