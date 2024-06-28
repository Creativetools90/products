import React from 'react'
import Navbar from './component/header/Navbar'
import CodeLayout from './component/codeLayout/CodeLayout';
import EditorNode from './component/EditorNode/EditorNode';
import { MyContext } from './context/myContext';

import "./App.css";
const App = () => {
  return (
    <>
      <MyContext>
        <main className="mainContainer  " >
          {/* <Navbar /> */}
          <CodeLayout />
          <EditorNode />
        </main>
      </MyContext>
    </>
  )
}

export default App