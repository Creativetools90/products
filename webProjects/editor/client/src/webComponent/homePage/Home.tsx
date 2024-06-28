import React from 'react'
import { Link } from 'react-router-dom'
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
            
        </div>
    )
}

export default Home