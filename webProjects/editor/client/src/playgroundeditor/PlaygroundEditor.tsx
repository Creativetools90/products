import React from 'react'
import "./Playground.css"

import TabBoxContainer from './TabContainer/TabBoxContainer';
import EditorContainer from './editorContainer/EditorContainer';
import FileSystem from './exploser/FileSystem';
const PlaygroundEditor = () => {
  return (
    <div className="playgroundContainer">
      <TabBoxContainer/>
      <div className="ediorbar">

     <FileSystem/>
        <EditorContainer/>
       
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