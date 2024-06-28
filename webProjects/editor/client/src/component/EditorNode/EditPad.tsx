import React from 'react'
import Editor from "@monaco-editor/react";
import { ThemeContext } from '../../context/myContext';
const EditPad = (props) => {
    const handleInputChange = (value) => {
        props.val(value);
        props.htmlVal(value); // For simplicity, assuming input is HTML-safe
    };
    const { theme } = React.useContext(ThemeContext);
    return (
        <>
            <Editor
                height="calc(100vh - 50px)"
                width="100%"
                theme={theme} // Change this to 'vs', 'vs-dark', or 'hc-black'

                defaultLanguage="html"

                defaultValue={`<!-- Enter your HTML code here -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Creativetools WebCode_editor</h1>
    <!-- Prss Enter -->
</body>
</html>
                    `}
                onChange={(value) => handleInputChange(value)}
                options={{
                    fontSize: 20,
                    minimap: { enabled: false },
                    lineNumbers: "on",
                    automaticLayout: true,
                    padding: {
                        top: 10,
                        bottom: 10
                    },

                    wordWrap: "on", // Enable word wrap
                    formatOnType: true, // Disable format on type
                    formatOnPaste: true, // Disable format on paste
                }}
            />
        </>
    )
}

export default EditPad