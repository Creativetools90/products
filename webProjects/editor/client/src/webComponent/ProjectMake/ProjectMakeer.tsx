import React from 'react'
import "./Project.css";
const ProjectMakeer = () => {
    return (
        <div className="projectMContainer">
            <div className="proHeader">
                <div className="left_p_m">
                    <p>project</p>
                    <input type="text" className='s_project_list' placeholder='Search...' />
                </div>
                <div className="right_p_m">
                    <button>new project</button>
                </div>
            </div>
            <div className="proListing">
                <div className="pro_gridBar">
                    <div className="p_l_bar">
                        grid
                        <div className="g_icon">
                        <img width="25" style={{background:"white"}}  height="25" src="https://img.icons8.com/ios-filled/50/000000/grid.png" alt="grid"/>
                        <img width="25" style={{background:"white"}} height="25" src="https://img.icons8.com/ios-filled/50/000000/menu--v1.png" alt="menu--v1"/>
                        </div>
                    </div>
                </div>
                <div className="projectList">
                    <div className="listMode">
                        <div className="projectCart">
                            <div className="pro_img"></div>
                            <div className="p_nfo">
                                <div className="ingo01">
                                <p className="pro_name">demo project</p>
                                <button>more</button>
                                </div>
                            </div>
                        </div>
                        <div className="projectCart">
                            <div className="pro_img"></div>
                            <div className="p_nfo">
                                <div className="ingo01">
                                <p className="pro_name">demo project</p>
                                <button>more</button>
                                </div>
                            </div>
                        </div>
                        <div className="projectCart">
                            <div className="pro_img"></div>
                            <div className="p_nfo">
                                <div className="ingo01">
                                <p className="pro_name">demo project</p>
                                <button>more</button>
                                </div>
                            </div>
                        </div>
                        <div className="projectCart">
                            <div className="pro_img"></div>
                            <div className="p_nfo">
                                <div className="ingo01">
                                <p className="pro_name">demo project</p>
                                <button>more</button>
                                </div>
                            </div>
                        </div>
                        <div className="projectCart">
                            <div className="pro_img"></div>
                            <div className="p_nfo">
                                <div className="ingo01">
                                <p className="pro_name">demo project</p>
                                <button>more</button>
                                </div>
                            </div>
                        </div>
                        <div className="projectCart">
                            <div className="pro_img"></div>
                            <div className="p_nfo">
                                <div className="ingo01">
                                <p className="pro_name">demo project</p>
                                <button>more</button>
                                </div>
                            </div>
                        </div>
                        <div className="projectCart">
                            <div className="pro_img"></div>
                            <div className="p_nfo">
                                <div className="ingo01">
                                <p className="pro_name">demo project</p>
                                <button>more</button>
                                </div>
                            </div>
                        </div>
                        <div className="projectCart">
                            <div className="pro_img"></div>
                            <div className="p_nfo">
                                <div className="ingo01">
                                <p className="pro_name">demo project</p>
                                <button>more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tableMode"></div>
                </div>
            </div>
        </div>
    )
}

export default ProjectMakeer