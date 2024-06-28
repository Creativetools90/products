import React, { useState, useContext } from 'react';
import Editor from "@monaco-editor/react";
import { ThemeContext } from '../../context/myContext';
import "./Editor.css";
import EditPad from './EditPad';
import Output from './output/Output';

const EditorNode = () => {
    const {input , setInput , innerHTML , setInputHtml} = useContext(ThemeContext)



    return (
        <div className="EditorNode leftView">
            <div className="editPad left_editor_pad">
               <EditPad val={setInput} htmlVal={setInputHtml} />
            </div>
            <div className="result left_result_pad">
               
              <Output langInput={input} />
            </div>
        </div>
    );
}

export default EditorNode;
