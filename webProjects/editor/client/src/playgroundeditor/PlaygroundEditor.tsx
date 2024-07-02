import React from 'react'
import "./Playground.css"
import Editor from "@monaco-editor/react";
const PlaygroundEditor = () => {
  return (
    <div className="playgroundContainer">
      <div className="tabContainer">
        <h2>tab bar</h2>
      </div>
      <div className="ediorbar">
        <div className="exploere">
          <h2>explorere</h2>
        </div>
        <div className="editingContainer">
          <div className="top">
            <div className="codeWriter">
             <div className="eidtCode">
             <Editor
                height="100%"
                theme={'vs-dark'} // Change this to 'vs', 'vs-dark', or 'hc-black'
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
             </div>
            </div>
            <div className="previewRender">
              <h2>preview</h2>
            </div>
          </div>
          <div className="bottom">
            <div className="terminal">
              <h2>terminal</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/*
Playground stru 

tab basr 
explorer bar 
editor bar 
preview bar 
*/

export default PlaygroundEditor