import React, { useState } from 'react'
import "./CardMode.css"
const CardModeProject = () => {
  const [open, setOpen] = useState<void>();
  return (

    <div className="listMode">
      <div className="projectCart">
        <div className="pro_img">
          <div className="codeIcon">
          <img width="64" height="64" src="https://img.icons8.com/nolan/64/code--v2.png" alt="code--v2"/>
          </div>
        </div>
        <div className="p_nfo">
          <div className="ingo01">
            <p className="pro_name">demo project</p>
            <button onClick={() => setOpen(!open)} >more</button>
          </div>
          <div className="project_useLag_tag">
            <ul className="t_0001">
              <li className="proj_l_tab react_tag">react</li>
              <li className="proj_l_tab html_tag">html</li>
              <li className="proj_l_tab css_tag">css</li>
              <li className="proj_l_tab js_tag">javascript</li>
              <li className="proj_l_tab ts_tag">typescript</li>
              <li className="proj_l_tab py_tag">python</li>
            </ul>
          </div>
        </div>
        <div className="morepsetting" style={open ? { display: "flex" } : { display: "none" }} >
          <div className="e_s">
            <img width="25" style={{ background: "white" }} height="25" src="https://img.icons8.com/ios-filled/50/000000/edit--v1.png" alt="edit--v1" />
            <button>edit</button>
          </div>
          <div className="e_s">
            <img width="25" style={{ background: "white" }} height="25" src="https://img.icons8.com/ios-filled/50/000000/edit--v1.png" alt="edit--v1" />
            <button>delete</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CardModeProject