import React from 'react'
import { MyContext } from './context/myContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from './webComponent/layout/Layout';
import Home from './webComponent/homePage/Home';
import DemoCodeMerge from './webComponent/demoCode/DemoCodeMerge';
const App = () => {
  return (
    <>
      <MyContext>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>} >
          <Route index element={<Home/>} />
          </Route>
          <Route path='/demoCode' element={<DemoCodeMerge/>} />
        </Routes>
        </BrowserRouter>
      </MyContext>
    </>
  )
}

export default App