import React from 'react'
import "./ProjecForm.css";
import Lang from './lang/Lang';
import {Link} from "react-router-dom";
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
                               <Lang class="clickable_tag_lang" />
                            </div>
                        </div>
                        <div className="sub">
                            <Link  to="/playground" >
                            <button className='s_create' >create</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProjectForm