import React from 'react'
import "./ProjecForm.css";
const ProjectForm = (props) => {
    return (
        <div className={props.toggle?"projectFormContainer":"closeHide"}>
            <div className="createProjectContainer">
                <div className="c_heading_p001">
                    <h3>create project</h3>
                    <button  className='close' onClick={()=>props.setToggle(!props.toggle)} >close</button>
                </div>
                <div className="formProject">
                    <form >
                        <div className="f_p_grup">
                            <label htmlFor="">project-Name</label>
                            <input type="text" placeholder='Enter ...' />
                        </div>
                        <div className="f_p_grup">
                            <label htmlFor="">project-Name</label>
                            <div className="chooseLang">
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
                        <div className="sub">
                            <button className='s_create' >create</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProjectForm