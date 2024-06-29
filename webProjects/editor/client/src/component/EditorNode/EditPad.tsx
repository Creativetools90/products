import React, { useContext } from 'react';
import Editor from "@monaco-editor/react";
import { ThemeContext } from '../../context/myContext';

interface EditPadProps {
    val: (value: string | undefined) => void;
    htmlVal: (value: string | undefined) => void;
}

const EditPad: React.FC<EditPadProps> = (props) => {
    const handleInputChange = (value: string | undefined) => {
        props.val(value);
        props.htmlVal(value); // For simplicity, assuming input is HTML-safe
    };

    const { theme } = useContext(ThemeContext);

    return (
        <>
            <Editor
                height="calc(100vh - 50px)"
                width="100%"
                theme={theme} // Change this to 'vs', 'vs-dark', or 'hc-black'
                defaultLanguage="html"
                defaultValue={`<!DOCTYPE html>
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
</html>`}
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
                    formatOnType: true, // Enable format on type
                    formatOnPaste: true, // Enable format on paste
                }}
            />
        </>
    );
}

export default EditPad;
