import './landing.css'
import { Link } from 'react-router-dom'
const LandingPage=()=>{

    return(
        <>
             <div className="LandingContainer">
                <h2>Landing Page</h2>
                <div className="landing-content">
                <div className="landing-img">
                    <img src="/imgs/insta.jpg" alt="Landing " />
                </div>
                <Link to="/post"><button>Enter</button></Link>
            </div>
            </div>
        </>
    )
}
export default LandingPage;