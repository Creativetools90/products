import React, { useState } from 'react';
import "./Project.css";
import CardModeProject from './cardMode/CardModeProject';
import ListModeProject from './listMode/ListModeProject';
import { Link } from 'react-router-dom';
import ProjectForm from './ProjectForm';

const ProjectMakeer: React.FC = () => {
    const [gridMode, setGridMode] = useState<'card' | 'list'>('card');
    const [projectFormShow , setProjectFormShow] = useState<boolean>();
    return (
        <>
        <div className="projectMContainer">
            <div className="proHeader">
                <div className="left_p_m">
                    <p>project</p>
                    <input type="text" className='s_project_list' placeholder='Search...' />
                </div>
                <div className="right_p_m">
                        <button onClick={()=>setProjectFormShow(!projectFormShow)} >new project</button>
                   
                </div>
            </div>
            <div className="proListing">
                <div className="pro_gridBar">
                    <div className="p_l_bar">
                        grid
                        <div className="g_icon">
                            <img 
                                width="25" 
                                onClick={() => setGridMode("card")} 
                                style={{ background: "white" }} 
                                height="25" 
                                src="https://img.icons8.com/ios-filled/50/000000/grid.png" 
                                alt="grid" 
                            />
                            <img 
                                width="25" 
                                onClick={() => setGridMode("list")} 
                                style={{ background: "white" }} 
                                height="25" 
                                src="https://img.icons8.com/ios-filled/50/000000/menu--v1.png" 
                                alt="menu--v1" 
                            />
                        </div>
                    </div>
                </div>
                <div className="projectList">
                    {gridMode === "card" ? <CardModeProject /> : <ListModeProject />}
                </div>
            </div>
        </div>
        <ProjectForm toggle={projectFormShow} setToggle={setProjectFormShow} />
        </>
    );
}

export default ProjectMakeer;
