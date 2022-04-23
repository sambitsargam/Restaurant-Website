import './contact.css'

const Contact = () => {
    return(
        <div>
            <h1>Contact Us</h1>

    <section className="contactform">
    <form>
    
    <div className='inputname'>
        <input type="text" name="firstname" placeholder="First name" />

        <input type="text" name="lastname" placeholder="Last name" className='lname'/>
    </div>
    
 <div>
        <input type="email" name="email" placeholder="Email address" className="input-email" />
   </div>
        
    
    <br />
    
    <textarea>Comment:</textarea>
    <br />

    <input type="submit" value="Submit" className='submit'/>
    </form>

</section>
    </div>
    )
}
export default Contact