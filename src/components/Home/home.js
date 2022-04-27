
import hero from '../../images/restaurant2.jpg';
import Cuisine from '../../images/rest.jpg';
import Chicken from '../../images/chickenchips.jpg';
import spaghetti from '../../images/spaghetti.jpg';
import { Link } from "react-router-dom"
import {FaFacebookF, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import './home.css'
const Home = () => {
    return(
        <div>
            <header className='header-img'>
                <img src={hero} alt="chef logo" className='hero-img' />
                <h2 className='name'>Roots restaurant and cafe</h2>
            </header>

            <section className='about'>
                <div className='made'>
                <h1>Made with love, Simple delicious!</h1>
                <p>We always put our customers first, because we believe that eating a healthy balanced diet is an important part of maintaining good health.</p>
                <Link to='/product'><button className='about-btn'>View Menu</button></Link>
                </div>
                <div>
                    <img src={Cuisine} alt='' />

                </div>
            </section>

            <section className='time'>
            <img src={Chicken} alt =''/>
            <img src={spaghetti} alt =''/>
            <div className='hours'>
                <h2>Opening Hours</h2>
                <p>Mon - Fri: 11am - 10pm</p>
                <p>​​Sat - Sun: 11am - 12am</p>
            </div>
            </section>


<footer className='footer'>
        <p> <span>&#169;</span> Copyright 2022 @Roots restaurant and Cafe | All Rights Reserved | Privacy Policy | Powered by SideHustle Capstone Group 42 </p>
        <FaFacebookF /> <FaInstagramSquare className='fa'/> <FaTwitter className='fa'/>
    </footer>
        </div>
    )
}
export default Home