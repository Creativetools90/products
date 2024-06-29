import React, { useState, useContext } from 'react';
import Editor from "@monaco-editor/react";
import { ThemeContext } from '../../context/myContext';
import "./Editor.css";
import EditPad from './EditPad';
import Output from './output/Output';

const EditorNode: React.FC = () => {
    const { input, setInput, innerHTML, setInputHtml } = useContext(ThemeContext);
    const [quitwindow, setQuitWindow] = useState<boolean>(false);
    const [fullwindow, setFullWindow] = useState<boolean>(false);
    const [outputWindow, setOutputWindow] = useState<Window | null>(null);

    const executeCode = (code: string) => {
        const newWindow = window.open('', '', 'width=600,height=400');
        if (!newWindow) {
            alert('Please allow popups for this website');
            return;
        }
        setOutputWindow(newWindow);
        newWindow.document.write(`
            <html>
            <head>
                <title>Console Output</title>
            </head>
            <body>
                <pre id="output"></pre>
                <script>
                    (function() {
                        const originalConsoleLog = console.log;
                        console.log = function(...args) {
                            originalConsoleLog.apply(console, args);
                            const outputDiv = document.getElementById('output');
                            outputDiv.textContent += args.join(' ') + '\\n';
                        };
                        try {
                            ${code}
                        } catch (error) {
                            console.log('Error:', error);
                        }
                    })();
                </script>
            </body>
            </html>
        `);
        newWindow.document.close();
    };

    return (
        <div className="EditorNode leftView">
            <div className="editPad left_editor_pad">
                <EditPad val={setInput} htmlVal={setInputHtml} />
            </div>
            <div 
                className={`result left_result_pad`} 
                style={{ 
                    flex: quitwindow ? 0.1 : 2, 
                }}
            >
                <div className="tabO">
                    <div className="outputTab">
                        <button className='text-black' onClick={() => executeCode(input)}>Run Code</button>
                        <img 
                            onClick={() => setQuitWindow(!quitwindow)} 
                            width="20" 
                            height="20" 
                            src="https://img.icons8.com/ios/50/export.png" 
                            alt="export" 
                        />
                    </div>
                </div>
                <Output langInput={input} />
            </div>
        </div>
    );
}

export default EditorNode;
