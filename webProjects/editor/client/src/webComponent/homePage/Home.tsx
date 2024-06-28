import React from 'react'
import { Link } from 'react-router-dom'
import Editor from "@monaco-editor/react";
import "./Home.css"
const Home = () => {
    return (
        <div className='homePageContainer p-2 m-auto my-4 ' >
            <div className="BannerHeroContainer  ">
                <div className="bannerHeading text-center ">
                    <h2>Try & Practice your code in webEditor</h2>
                </div>
                <div className="tryNow flex items-center gap-6 flex-row justify-center ">

                    <Link to="/demoCode" className='demoBtnLink' >try demo code</Link>
                    <div className="g_l_b_btn">
                        <div className="btncover">
                            <Link to="/demoCode" className='m_pro_link' >Make Project</Link>
                        </div>
                    </div>
                </div>
            </div>
            <section className="codeBaseContainer">
                <h3 className='c_heading' >Languages CodeBase</h3>
                <div className="code_snippet">
                    <div className="s_01_">
                        <div className="codeVisibleLayer">
                            <p>click for preview</p>
                        </div>
                        <Editor
                            height="calc(100vh - 50px)"
                            width="100%"
                            theme={"vs-dark"} // Change this to 'vs', 'vs-dark', or 'hc-black'
                            defaultLanguage="html"
                            defaultValue={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Creativetools WebCode_editor</h1>
    <!-- Prss Enter -->
</body>
</html>
                    `}
                            options={{
                                fontSize: 11,
                                minimap: { enabled: false },
                                lineNumbers: "on",
                                automaticLayout: true,
                                padding: {
                                    top: 10,
                                    bottom: 10
                                },

                                wordWrap: "on", // Enable word wrap
                                formatOnType: true, // Disable format on type
                                formatOnPaste: true, // Disable format on paste
                            }}
                        />
                    </div>
                    <div className="s_01_">
                    <div className="codeVisibleLayer">
                            <p>click for preview</p>
                        </div>
                        <Editor
                            height="calc(100vh - 50px)"
                            width="100%"
                            theme={"vs-dark"} // Change this to 'vs', 'vs-dark', or 'hc-black'
                            defaultLanguage="javascript"
                            defaultValue={`let count = 0;
const counter=()=>{
count++;
}

counter();
counter();
counter();
                                `}
                            options={{
                                fontSize: 11,
                                minimap: { enabled: false },
                                lineNumbers: "on",
                                automaticLayout: true,
                                padding: {
                                    top: 10,
                                    bottom: 10
                                },

                                wordWrap: "on", // Enable word wrap
                                formatOnType: true, // Disable format on type
                                formatOnPaste: true, // Disable format on paste
                            }}
                        />
                    </div>
                    <div className="s_01_">
                    <div className="codeVisibleLayer">
                            <p>click for preview</p>
                        </div>
                        <Editor
                            height="calc(100vh - 50px)"
                            width="100%"
                            theme={"vs-dark"} // Change this to 'vs', 'vs-dark', or 'hc-black'
                            defaultLanguage="python"
                            defaultValue={`count = 0
def counter():
    count+=1

counter()
counter()
counter()
                    `}
                            options={{
                                fontSize: 11,
                                minimap: { enabled: false },
                                lineNumbers: "on",
                                automaticLayout: true,
                                padding: {
                                    top: 10,
                                    bottom: 10
                                },

                                wordWrap: "on", // Enable word wrap
                                formatOnType: true, // Disable format on type
                                formatOnPaste: true, // Disable format on paste
                            }}
                        />
                    </div>
                   
                </div>
            </section>
        </div>
    )
}

export default Home