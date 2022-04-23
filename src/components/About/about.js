
import './about.css'
// import Chef from './images/chef.png';

const About = () => {
    return(
        <div>
            <header className="header">
               <h1>About Us</h1>
            </header>

        <div className="section1">
                <p>Situated in San Francisco's historic Jackson Square, Lindsay and Chef Michael Tusk's celebrated Quince features Californian contemporary cuisine with Italian influences. Quince serves nightly-changing tasting menus highlighting the restaurant's unique partnership with Fresh Run Farm where Michael and third-generation owner Peter Martinelli plan the plantings in the singular microclimate of Bolinas each season.</p>
            <div>
            <p>Wednesdays - Saturdays</p>
                <p>5:00pm - 8:30pm</p>
            </div>  
        </div>

        <div className="section2">

            <div>
                {/* <img src={Chef} alt="chef logo" />; */}
                <p>
                Chef Michael Tusk was named “Best Chef: Pacific” by the James Beard Foundation in 2011. Quince was awarded its third Michelin star in 2017 and holds four stars from the San Francisco Chronicle. Quince is a proud member of Relais & Châteaux, an association of the world's most celebrated restaurants and luxury hotels. In 2020, Quince was one of the first recipients in the country to be awarded a Green Star from Michelin for its work towards sustainability and biodiversity.
                </p>
            </div> 
        </div>
        
     
        </div>
    )
}
export default About