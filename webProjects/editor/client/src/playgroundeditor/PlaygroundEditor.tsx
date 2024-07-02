import React from 'react'
import "./Playground.css"
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
              <h2>editing bar </h2>
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