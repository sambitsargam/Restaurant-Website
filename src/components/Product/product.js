
import Friedrice from '../../images/friedrice.jpg';
import burger from '../../images/burger.jpg';
import spaghetti from '../../images/spaghetti.jpg';
import Chicken from '../../images/chickenchips.jpg';
import {FaFacebookF, FaInstagramSquare, FaTwitter } from "react-icons/fa";

import './product.css';

const Product = () => {

    return(
        <div>
            <h1 className='header-text'>Products</h1>

            <p className='menu'>Menu for the day</p>

            <section className='badges'>

            <div className='card'>
                <div className='cardbox'>
                    <img src={Friedrice} alt =''/>
                </div>
                <div className='price'>
                <p>Fried rice and chicken</p>
                <p>$15</p>
                </div>
                <button className='buy'>Order Now</button>
            </div>

            <div className='card'>
                <div className='cardbox'>
                    <img src={burger} alt =''/>
                </div>
                <div className='price'>
                <p>Burger</p>
                <p>$5</p>
                </div>
                <button className='buy'>Order Now</button>
            </div>

            <div className='card'>
                <div className='cardbox'>
                    <img src={spaghetti} alt =''/>
                </div>
                <div className='price'>
                <p>Spaghetti Bolognese</p>
                <p>$15</p>
                </div>
                <button className='buy'>Order Now</button>
            </div>

            <div className='card'>
                <div className='cardbox'>
                    <img src={Chicken} alt =''/>
                </div>
                <div className='price'>
                <p>Chicken and chips</p>
                <p>$15</p>
                </div>
                <button className='buy'>Order Now</button>
            </div>

            </section>

            <h2 className='service-title'>We Offer ...</h2>


            <section className='service'>
                <div className='services-text'>
                <h3>Home Delivery</h3>
                <p>
For the convenience of our ever busy customers, we offer an Office/Home delivery service with a quick response time; we do not keep our customers waiting for long. We encourage our customers to call our home delivery direct lines in the ``contact us`` area of our web site to have their delicious meals and cakes delivered at their door steps in no time. Customers can also use this service to surprise their loved ones on occasions of birthdays, valentines, anniversaries etc. All you need to do is just call, order and give us the address and we will surprise your recipient to your delight.</p>
            </div>

            <div className='services-text'>
                <h3>Outdoor Services</h3>
                <p>
                We offer outdoor catering services to the delight of our Clients and we brighten up their occasion with our unique event management services. With our seasoned, skilled and well cultured event planning and management team, we cater for: Your Anniversaries , Group Breakfast, Christmas Menu, Recognition parties, Tea Reception, Packet Meals, Buffet, Dinners, Luncheons, Brunch, Birthdays. Weddings, Holiday Parties, Bereavements, Anniversaries, Fundraisers, Seminars, Dedications, etcetera. Our outdoor service products are not limited to our in-house (Counter) products.</p>
            </div>

            <div className='services-text'>
                <h3>Home Delivery</h3>
                <p>
                We have imbibed a service culture that offers every customer the chance to conveniently site and order their meals from fresh and hygienically displayed array of products. These products are served either as ``Take aways`` or as ``Eat Ins`` in a serene, clean and fantastically ambient Environment by well-trained friendly and courteous service personnel. A visit to any of our eateries, the conveniences, a taste of our products and a touch of our friendly service will give you a feel of international standard. For our ever busy customers, we offer an Office/Home delivery service with a quick response time.</p>
            </div>
            </section>
           
        <footer className='footer'>
        <p> <span>&#169;</span> Copyright 2022 @Roots restaurant and Cafe | All Rights Reserved | Privacy Policy | Powered by SideHustle Capstone Group 42 </p>
        <FaFacebookF /> <FaInstagramSquare className='fa'/> <FaTwitter className='fa'/>
    </footer>
        </div>
    )
}
export default Product