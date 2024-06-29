import React from 'react';
import { MyContext } from './context/myContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from './webComponent/layout/Layout';
import Home from './webComponent/homePage/Home';
import DemoCodeMerge from './webComponent/demoCode/DemoCodeMerge';
import ProjectMakeer from './webComponent/ProjectMake/ProjectMakeer';
import ProjectCodeEditor from './webComponent/projectCode/ProjectCode';

const App: React.FC = () => {
  return (
    <>
      <MyContext>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='/projectDashbord' element={<ProjectMakeer />} />
            </Route>
            <Route path='/demoCode' element={<DemoCodeMerge />} />
            <Route path='/PublishCode' element={<ProjectCodeEditor />} />
          </Routes>
        </BrowserRouter>
      </MyContext>
    </>
  );
}

export default App;
