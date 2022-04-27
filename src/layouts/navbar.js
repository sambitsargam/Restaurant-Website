import { Navbar, Nav, Container } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"
import Chef from '../images/chef.png';
import './navbar.css'

const NavBarExample = () => {
    return(
       <>    
       <Navbar className="navBg" variant="dark" expand="lg">
        <Container>

            <Navbar.Brand as={Link} to="/"  >
            <img src={Chef} alt="chef-logo" className='navlogo'/>
                ROOTS
                </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/" className="link">Home</Nav.Link>
                <Nav.Link as={Link} to="/product" className="link">Products</Nav.Link>
                <Nav.Link as={Link} to="/about" className="link">About</Nav.Link>
                <Nav.Link as={Link} to="/contact" className="link">Contact</Nav.Link>               
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>  

        <section>
            <Outlet></Outlet>
        </section> 
       </> 
    )
}
export default NavBarExample