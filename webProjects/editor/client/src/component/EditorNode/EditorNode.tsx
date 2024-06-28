import React, { useState, useContext } from 'react';
import Editor from "@monaco-editor/react";
import { ThemeContext } from '../../context/myContext';
import "./Editor.css";
import EditPad from './EditPad';
import Output from './output/Output';

const EditorNode = () => {
    const { input, setInput, innerHTML, setInputHtml } = useContext(ThemeContext);

    const [quitwindow, setQuitWindow] = useState(false);
    const [fullwindow, setFullWindow] = useState(false);

    return (
        <div className="EditorNode leftView">
            <div className="editPad left_editor_pad">
                <EditPad val={setInput} htmlVal={setInputHtml} />
            </div>
            <div 
                className={`result left_result_pad`} 
                style={{ 
                    flex: quitwindow ? 0.1 : 2, 
                }
                
            }
            >
                <div className="tabO">
                    <div className="outputTab">
                        {/* <img 
                            onClick={() => setFullWindow(!fullwindow)} 
                            width="20" 
                            height="20" 
                            src="https://img.icons8.com/ios/50/000000/full-screen--v1.png" 
                            alt="full-screen--v1" 
                        /> */}
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
