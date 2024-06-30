import React from 'react'
import "./ProjecForm.css";
import Lang from './lang/Lang';

const ProjectForm = (props) => {

    return (
        <div className={props.toggle ? "projectFormContainer" : "closeHide"}>
            <div className="createProjectContainer">
                <div className="c_heading_p001">
                    <h3>create project</h3>
                    <button className='close' onClick={() => props.setToggle(!props.toggle)} >close</button>
                </div>
                <div className="formProject">
                    <form >
                        <div className="f_p_grup">
                            <label htmlFor="">project-Name</label>
                            <input type="text" placeholder='Enter ...' />
                        </div>
                        <div className="f_p_grup">
                            <label htmlFor="">project-Name</label>
                                <input type="text" placeholder='Enter ...' />
                            <div className="chooseLang" style={{
                                marginTop:"10px"
                            }} >
                               <Lang/>
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