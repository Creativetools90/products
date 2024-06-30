import React, { useContext, createContext, useState, ReactNode } from "react";

// Step 1: Create Context
export const ThemeContext = createContext({} as any);

// Step 2: Create a Provider component
interface MyContextProps {
    children: ReactNode;
}

export const MyContext: React.FC<MyContextProps> = (props) => {
    const [theme, setTheme] = useState('vs-dark');
    const [input, setInput] = useState(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
<style>
    button{
        background : #4158D0;
        color:white;
        padding:10px;
        }
</style>
</head>
<body>
<h1>Creativetools WebCode_editor</h1>
<p>this si demo code contaienr </p>
<button>do coding </button>
<!-- Prss Enter -->
</body>
</html>
`);
    const [inputHtml, setInputHtml] = useState('');
    const [themeMode, setThemeMode] = useState('dark');
    const [titleEdit, setTitleEdit] = useState("demo-project");

    const toggleTheme = () => {
        setThemeMode((prevTheme) => (prevTheme === 'dark' ? 'white' : 'dark'));
    };

    const contextValue = {
        theme,
        setTheme,
        input,
        setInput,
        inputHtml,
        setInputHtml,
        themeMode,
        toggleTheme,
        titleEdit,
        setTitleEdit
    };

    return (
        <ThemeContext.Provider value={contextValue}>
            <div className={themeMode === 'dark' ? 'dark' : 'white'}>
                {props.children}
            </div>
        </ThemeContext.Provider>
    );
};
