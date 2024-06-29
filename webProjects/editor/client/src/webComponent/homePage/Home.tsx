import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Editor from "@monaco-editor/react";
import "./Home.css";

const Home: React.FC = () => {
    const [demoInput, setDemoInput] = useState<string>(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
<style>
    button{
        background : #4158D0;
        color:white;
        padding:10px;
        }
</style>
</head>
<body>
<h1>Creativetools WebCode_editor</h1>
<p>this si demo code contaienr </p>
<button>do coding </button>
<!-- Prss Enter -->
</body>
</html>
`);

    return (
        <div className='homePageContainer p-2 m-auto my-4'>
            <div className="BannerHeroContainer">
                <div className="bannerHeading text-center">
                    <h2>Try & Practice your code in webEditor</h2>
                    <p className='text-lg subpixel-antialiased capitalize font-medium text-sky-400/100'>for html, css, js, typescript, python</p>
                    <p className='text-lg text-sky-400/75 subpixel-antialiased capitalize font-medium'>free and useful editor</p>
                </div>
                <div className="tryNow flex items-center gap-6 flex-row justify-center">
                    <Link to="/demoCode" className='demoBtnLink'>try demo code</Link>
                    <div className="g_l_b_btn">
                        <div className="btncover">
                            <Link to="/projectDashbord" className='m_pro_link'>Make Project</Link>
                        </div>
                    </div>
                </div>
            </div>
            <section className="codeBaseContainer">
                <h3 className='c_heading'>Languages CodeBase</h3>
                <div className="code_snippet">
                    <div className="s_01_">
                        <Editor
                            height="calc(100vh - 50px)"
                            width="100%"
                            theme={"vs-dark"}
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
</html>`}
                            options={{
                                fontSize: 11,
                                minimap: { enabled: false },
                                lineNumbers: "on",
                                automaticLayout: true,
                                padding: {
                                    top: 10,
                                    bottom: 10
                                },
                                wordWrap: "on",
                                formatOnType: true,
                                formatOnPaste: true,
                            }}
                        />
                    </div>
                    <div className="s_01_">
                        <Editor
                            height="calc(100vh - 50px)"
                            width="100%"
                            theme={"vs-dark"}
                            defaultLanguage="javascript"
                            defaultValue={`let count = 0;
const counter = () => {
    count++;
}

counter();
counter();
counter();`}
                            options={{
                                fontSize: 11,
                                minimap: { enabled: false },
                                lineNumbers: "on",
                                automaticLayout: true,
                                padding: {
                                    top: 10,
                                    bottom: 10
                                },
                                wordWrap: "on",
                                formatOnType: true,
                                formatOnPaste: true,
                            }}
                        />
                    </div>
                    <div className="s_01_">
                        <Editor
                            height="calc(100vh - 50px)"
                            width="100%"
                            theme={"vs-dark"}
                            defaultLanguage="python"
                            defaultValue={`count = 0
def counter():
    count += 1

counter()
counter()
counter()`}
                            options={{
                                fontSize: 11,
                                minimap: { enabled: false },
                                lineNumbers: "on",
                                automaticLayout: true,
                                padding: {
                                    top: 10,
                                    bottom: 10
                                },
                                wordWrap: "on",
                                formatOnType: true,
                                formatOnPaste: true,
                            }}
                        />
                    </div>
                </div>
            </section>
            <section className="Movingcontainer">
                <div className="wrap">
                    <div className="scroller">
                        <p className="item">html</p>
                        <p className="item">css</p>
                        <p className="item">javaScript</p>
                        <p className="item">typescript</p>
                        <p className="item">c++</p>
                        <p className="item">c</p>
                        <p className="item">java</p>
                    </div>
                </div>
            </section>
            <section className='demoHomeCode'>
                <div className="cvw-01-heaing">
                    <p>How doing some demo editing!</p>
                </div>
                <div className="democodeBaseLayout">
                    <div className="s_01_01">
                        <Editor
                            height="calc(100vh - 50px)"
                            width="100%"
                            theme={"vs-dark"}
                            onChange={(value) => setDemoInput(value || '')}
                            defaultLanguage="html"
                            defaultValue={`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
<style>
    button{
        background : #4158D0;
        color:white;
        padding:10px;
        }
</style>
</head>
<body>
<h1>Creativetools WebCode_editor</h1>
<p>this si demo code contaienr </p>
<button>do coding </button>
<!-- Prss Enter -->
</body>
</html>`}
                            options={{
                                fontSize: 15,
                                minimap: { enabled: false },
                                lineNumbers: "on",
                                automaticLayout: true,
                                padding: {
                                    top: 10,
                                    bottom: 10
                                },
                                wordWrap: "on",
                                formatOnType: true,
                                formatOnPaste: true,
                            }}
                        />
                    </div>
                    <div className="demores">
                        <iframe
                            title="Output"
                            style={{ width: '100%', height: '100%', border: 'none' }}
                            srcDoc={demoInput}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
