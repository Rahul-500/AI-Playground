import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import "./NavBar.css"

function NavBar() {
  return (
    <div className="mainn-navv">
    <Navbar expand="lg" className="navvv">
      <Container>
        <Navbar.Brand ><Link to="/" style={{textDecoration: "none"}} className="title talaga">AI Playground</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="Links pravya"><Link to = "/about" style={{textDecoration: "none"}} className="linksss">About</Link></Nav.Link>
            <Nav.Link className="pravya"><Link to = "/contact" style={{textDecoration: "none"}} className="about">Contact</Link></Nav.Link>
            <NavDropdown title="AI Option" className='dropdown droppppp talagaaa'>
            <div className="rahul">
               <NavDropdown.Item className="items">
                 <Link to="/askAnything" style={{textDecoration: "none", color: "black"}} className="items">ChatGPT</Link>
               </NavDropdown.Item>
               <NavDropdown.Item className="items">
               <Link to="/imageGenerator" style={{textDecoration: "none", color: "black"}} className="items">Image Generator</Link>
               </NavDropdown.Item>
               <NavDropdown.Item className="items">
               <Link to="/BlackToColor" style={{textDecoration: "none", color: "black"}} className="items">Image Colorization</Link>
               </NavDropdown.Item>
               <NavDropdown.Item className="items">
               <Link to="/memeGenerator" style={{textDecoration: "none", color: "black"}} className="items">Programming Memes</Link>
               </NavDropdown.Item>
              </div>
             </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavBar;
