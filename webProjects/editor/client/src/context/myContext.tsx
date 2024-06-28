import React, { useContext, createContext, useState } from "react";

// Step 1: Create Context
export const ThemeContext = createContext();

// Step 2: Create a Provider component
export const MyContext = (porps) => {
    const [theme, setTheme] = useState('vs-dark');
    const [input, setInput] = useState('');
    const [inputHtml, setInputHtml] = useState('');
    const [themeMode, setThemeMode] = useState('dark');
    const [titleEdit ,setTitleEdit] = useState("demo-project")

    const toggleTheme = () => {
        setThemeMode((prevTheme) => (prevTheme === 'dark' ? 'white' : 'dark'));
    };


    return (
        <ThemeContext.Provider value={{ theme, setTheme, input, setInput, inputHtml, setInputHtml, themeMode , toggleTheme , titleEdit , setTitleEdit }}>

            <div className={themeMode === 'dark' ? 'dark' : 'white'}>
                {porps.children}
            </div>
        </ThemeContext.Provider>
    );
};



