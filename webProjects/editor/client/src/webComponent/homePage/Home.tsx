import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"
const Home = () => {
    return (
        <div className='homePageContainer p-2 m-auto my-4 ' >
            <div className="BannerHeroContainer gap-2  flex flex-col  justify-center ">
                <div className="bannerHeading  p-2 text-center ">
                    <h2>Try & Practice your code in webEditor</h2>
                </div>
                <div className="tryNow flex p-2 items-center gap-6 flex-row justify-center ">

                    <Link to="/demoCode" >try demo code</Link>
                    <Link to="/demoCode" >Make Project</Link>
                </div>
            </div>
            <div className="other"></div>
        </div>
    )
}

export default Home