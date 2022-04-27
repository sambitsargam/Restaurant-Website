import './contact.css'
import {FaFacebookF, FaInstagramSquare, FaTwitter } from "react-icons/fa";

const Contact = () => {
    return(
        <div>
            
            <h1 className='header-text'>Contact Us</h1>
            

    <section className="contactform">
    <form>
    
    <div className='inputname'>
        <input type="text" name="firstname" placeholder="First name" className='fname'/>

        <input type="text" name="lastname" placeholder="Last name" className='lname'/>
    </div>
    
 <div>
        <input type="email" name="email" placeholder="Email address" className="input-email" />
   </div>
        
    
    <br />
    
    <textarea placeholder='Message'></textarea>
    <br />

    <input type="submit" value="Send" className='submit'/>
    </form>

</section>
<footer className='footer'>
        <p> <span>&#169;</span> Copyright 2022 @Roots restaurant and Cafe | All Rights Reserved | Privacy Policy | Powered by SideHustle Capstone Group 42 </p>
        <FaFacebookF /> <FaInstagramSquare className='fa'/> <FaTwitter className='fa'/>
    </footer>
    </div>
    )
}
export default Contact