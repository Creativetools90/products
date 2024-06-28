import React, { useState, useContext, useRef, useEffect } from 'react';
import { ThemeContext } from '../../context/myContext';
import FullOutput from '../EditorNode/fullOutput/FullOutput';
import "./COdeLayout.css";

const CodeLayout = ({ onThemeChange }) => {
    const themeOptions = [
        { value: 'vs-dark', label: 'Dark' },
        { value: 'vs', label: 'Light' },
        { value: 'hc-black', label: 'High Contrast' },
    ];

    const [l_open, setL_open] = useState(false);
    const { setTheme, input, themeMode, toggleTheme, titleEdit, setTitleEdit } = useContext(ThemeContext); // Accessing setTheme function from context

    const handleThemeChange = (e) => {
        const selectedTheme = e.target.value;
        setTheme(selectedTheme); // Update theme using setTheme function from context
    };

    const openResultInNewTab = () => {
        const newTab = window.open();
        newTab.document.body.innerHTML = `
        <div style="width: 100%; height: 100%;">
            <iframe title="Output" style="width: 100%; height: 100%; border: none;" srcDoc='${input}'></iframe>
        </div>
        `;
    };

    const [titleShow, setTitleShow] = useState(false);
    const [showMenubar, setShowMenubar] = useState(false);
    const [openSetting , setOpenSetting] = useState();




    return (
        <div className="codeLayoutStripe">
            <div className="productName">
                <div className="projectTitle">
                    <img width="35" height="35" src="https://img.icons8.com/nolan/64/project.png" alt="project" />
                    <div className="title">
                        <p className="Pt" onClick={() => setTitleShow(!titleShow)}>{titleEdit}</p>
                        <span className="fileName">/index.html</span>
                        <span className="titleLable">Edit</span>
                    </div>
                    <div className="editProjectName" style={titleShow ? { display: "flex" } : { display: "none" }}>
                        <input type="text" className='e_pro_ttil' onChange={(e) => { setTitleEdit(e.target.value) }} />
                        <button className='p_t_save p-1 hover:text-blue-300' onClick={() => setTitleShow(!titleShow)}>Save</button>
                    </div>
                </div>
            </div>
            <div className="showmenu" onClick={() => setShowMenubar(!showMenubar)}>
                <img width="35" height="35" src="https://img.icons8.com/ios-filled/50/FFFFFF/menu--v1.png" alt="menu--v1" />
            </div>
            <div className={showMenubar ? "openMenubar" : "otherLayout"} >
                    <p className='cencal'  onClick={() => setShowMenubar(!showMenubar)} >
                            go back
                    </p>
                <div className="layoutEditor">
                    <div className="l_bar l_icon" onClick={() => setL_open(!l_open)}>
                        <img width="30" className='iconColor' height="30" src="https://img.icons8.com/ios/50/000000/channel-mosaic.png" alt="channel-mosaic" />
                    </div>
                    <div className="lay_bar_option" style={l_open ? { display: "block" } : { display: "none" }}>
                        <div className="_heaidng">
                            <code>change layout</code>
                        </div>
                        <div className="l_grid">
                            <svg viewBox="0 0 20 20" className="EditorHeaderViewSwitcher_iconPen-jP26l"><path className='lIcon' d="M0 9.002C0 8.45.455 8 .992 8h18.016c.548 0 .992.456.992 1.002v9.996c0 .553-.455 1.002-.992 1.002H.992C.444 20 0 19.544 0 18.998V9.002Zm0-8C0 .45.451 0 .99 0h4.02A.99.99 0 0 1 6 1.003v4.994C6 6.551 5.549 7 5.01 7H.99A.99.99 0 0 1 0 5.997V1.003Zm7 0C7 .45 7.451 0 7.99 0h4.02A.99.99 0 0 1 13 1.003v4.994C13 6.551 12.549 7 12.01 7H7.99A.99.99 0 0 1 7 5.997V1.003Zm7 0C14 .45 14.451 0 14.99 0h4.02A.99.99 0 0 1 20 1.003v4.994C20 6.551 19.549 7 19.01 7h-4.02A.99.99 0 0 1 14 5.997V1.003Z"></path></svg>
                            <svg viewBox="0 0 20 20" className="EditorHeaderViewSwitcher_iconPen-jP26l"><path className='lIcon' d="M0 9.002C0 8.45.455 8 .992 8h18.016c.548 0 .992.456.992 1.002v9.996c0 .553-.455 1.002-.992 1.002H.992C.444 20 0 19.544 0 18.998V9.002Zm0-8C0 .45.451 0 .99 0h4.02A.99.99 0 0 1 6 1.003v4.994C6 6.551 5.549 7 5.01 7H.99A.99.99 0 0 1 0 5.997V1.003Zm7 0C7 .45 7.451 0 7.99 0h4.02A.99.99 0 0 1 13 1.003v4.994C13 6.551 12.549 7 12.01 7H7.99A.99.99 0 0 1 7 5.997V1.003Zm7 0C14 .45 14.451 0 14.99 0h4.02A.99.99 0 0 1 20 1.003v4.994C20 6.551 19.549 7 19.01 7h-4.02A.99.99 0 0 1 14 5.997V1.003Z"></path></svg>
                            <svg viewBox="0 0 20 20" className="EditorHeaderViewSwitcher_iconPen-jP26l"><path className='lIcon' d="M0 9.002C0 8.45.455 8 .992 8h18.016c.548 0 .992.456.992 1.002v9.996c0 .553-.455 1.002-.992 1.002H.992C.444 20 0 19.544 0 18.998V9.002Zm0-8C0 .45.451 0 .99 0h4.02A.99.99 0 0 1 6 1.003v4.994C6 6.551 5.549 7 5.01 7H.99A.99.99 0 0 1 0 5.997V1.003Zm7 0C7 .45 7.451 0 7.99 0h4.02A.99.99 0 0 1 13 1.003v4.994C13 6.551 12.549 7 12.01 7H7.99A.99.99 0 0 1 7 5.997V1.003Zm7 0C14 .45 14.451 0 14.99 0h4.02A.99.99 0 0 1 20 1.003v4.994C20 6.551 19.549 7 19.01 7h-4.02A.99.99 0 0 1 14 5.997V1.003Z"></path></svg>
                        </div>
                        <div className="view">
                            <code className="editorview">editor-view</code>
                            <code className="fullrview">full-screen-view</code>
                        </div>
                    </div>
                </div>
                <div className="theme l_bar">
                    <select name="theme" id="theme" onChange={handleThemeChange}>
                        {themeOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="save l_bar">
                    <button onClick={openResultInNewTab}>Open new tab</button>
                </div>
                <div className="save l_bar">
                    <img width="30" className='iconColor' height="30" src="https://img.icons8.com/ios/50/000000/save--v1.png" alt="save--v1" />
                </div>

                <div className="save l_bar">
                    <button onClick={toggleTheme} className={`${themeMode === "dark" ? "bg-black text-white" : "bg-white text-black"} `}>
                        {themeMode === 'dark' ? <>
                            <img width="24" height="24" src="https://img.icons8.com/ios-filled/50/FFFFFF/do-not-disturb-2.png" alt="do-not-disturb-2" />
                        </> : <>
                            <img width="24" height="24" src="https://img.icons8.com/external-gradak-royyan-wijaya/24/external-dark-gradak-weather-solidarity-gradak-royyan-wijaya.png" alt="dark mode" />
                        </>}
                    </button>
                </div>
                <div className="save l_bar">
                    <button onClick={()=>setOpenSetting(!openSetting)} >Setting</button>
                    <div className="settingBar" style={openSetting?{display:"block"}:{display:"none"}} >
                        <h4 className="s_heading">
                            user setting info
                            <p className="cencal"  onClick={()=>setOpenSetting(!openSetting)}  >cencal</p>
                        </h4>
                        <div className="settingoption">
                            <ul className='s_title' >
                                <li className="s_t01">
                                    Editor setting
                                    <ul className="smenu">

                                        <li>word-wrap
                                            <select name="wordwrap" className='userselecting' id="theme ">
                                                <option value="on">on</option>
                                                <option value="off">off</option>
                                                <option value="wordWrapColumn">wordWrapColumn</option>
                                                <option value="bounded">bounded</option>
                                            </select>
                                        </li>

                                        <li>read-only
                                            <button>on</button>
                                        </li>
                                        <li>lineNumbers
                                            <select name="wordwrap" className='userselecting' id="theme ">
                                                <option value="on">on</option>
                                                <option value="off">off</option>
                                                <option value="relative">relative</option>
                                                <option value="interval">interval</option>
                                            </select>
                                        </li>
                                        <li>minimap
                                            <select name="wordwrap" className='userselecting' id="theme ">
                                                <option value="on">enable</option>
                                                <option value="on">left side</option>
                                                <option value="on">right side</option>

                                            </select>
                                        </li>
                                        <li>autoIndent
                                            <select name="wordwrap" className='userselecting' id="theme ">
                                                <option value="on">none</option>
                                                <option value="on">keep</option>
                                                <option value="on">brackets</option>
                                                <option value="on">advanced</option>
                                                <option value="on">full</option>

                                            </select>
                                        </li>
                                        <li>tabSize
                                            <input type="text" className="users_input" />
                                        </li>
                                    </ul>
                                </li>

                            </ul>
                            <ul className='s_title' >
                                <li className='s_t01' >
                                    View Configuration Options
                                    <ul className='smenu' >
                                        <li>renderWhitespace
                                            <select name="wordwrap" className='userselecting' id="theme ">
                                                <option value="on">none</option>
                                                <option value="off">boundary</option>
                                                <option value="relative">all</option>
                                            </select>
                                        </li>

                                        <li>
                                            highlight-Active-Indent-Guide
                                            <button>true</button>
                                        </li>
                                        <li>renderLineHighlight
                                            <select name="wordwrap" className='userselecting' id="theme ">
                                                <option value="on">none</option>
                                                <option value="off">gutter</option>
                                                <option value="relative">line</option>
                                                <option value="relative">all</option>
                                            </select>
                                        </li>

                                    </ul>
                                </li>
                            </ul>
                            <ul className='s_title' >
                                <li className='s_t01' >
                                Accessibility Configuration
                                    <ul className='smenu' >
                                        <li>accessibility Support
                                            <select name="wordwrap" className='userselecting' id="theme ">
                                                <option value="on">auto</option>
                                                <option value="off">on</option>
                                                <option value="relative">off</option>
                                            </select>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CodeLayout;
