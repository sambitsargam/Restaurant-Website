
import './about.css'
import {FaFacebookF, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import Chicken from '../../images/chickenchips.jpg';
import spaghetti from '../../images/spaghetti.jpg';

const About = () => {
    return(
        <div>
            <header className="header">
               <h1 className='header-text'>About Us</h1>
            </header>

        <div className="section1">
                <p>Situated in San Francisco's historic Jackson Square, Lindsay and Chef Michael Tusk's celebrated Quince features Californian contemporary cuisine with Italian influences. Quince serves nightly-changing tasting menus highlighting the restaurant's unique partnership with Fresh Run Farm where Michael and third-generation owner Peter Martinelli plan the plantings in the singular microclimate of Bolinas each season.</p>   
        </div>

        <section className='times'>
            <img src={Chicken} alt =''/>
            <img src={spaghetti} alt =''/>
            <div className='hours'>
                <h2>Opening Hours</h2>
                <p>Mon - Fri: 11am - 10pm</p>
                <p>​​Sat - Sun: 11am - 12am</p>
            </div>
            </section>

        <footer className='footer'>
        <p> <span>&#169;</span> Copyright 2022 @xxxxx | All Rights Reserved - Please do not use 9jafoodie content or images without prior explicit permission | Privacy Policy</p>
        <FaFacebookF /> <FaInstagramSquare className='fa'/> <FaTwitter className='fa'/>
    </footer>
     
        </div>
    )
}
export default About