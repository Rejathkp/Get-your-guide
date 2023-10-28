import React from "react";
import { Nav, NavDropdown, Navbar, Button, Container } from "react-bootstrap";
import {AiOutlineHeart,AiOutlineQuestionCircle} from 'react-icons/ai'
import {FiShoppingCart} from 'react-icons/fi'

function Nvbr() {
  return (
    <div>
      <Navbar>
      <div className="nvbr">
        
        <Navbar.Brand href="#">
          <Navbar.Brand href="#home">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/GetYourGuide_company_logo.png"
              width="80px"
              height="69px"
              alt="GetYourGuide"
            />
          </Navbar.Brand>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Nav className='fncts'>
          <NavDropdown title="English" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
          
          <NavDropdown title="INR" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#action1"><AiOutlineHeart/>Wishlist</Nav.Link>
          <Nav.Link href="#action2"><FiShoppingCart/>Cart</Nav.Link>
          <Nav.Link href="#action2"><AiOutlineQuestionCircle/>Help</Nav.Link>
          <NavDropdown title="Log in" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>

          <Button className="signup" variant="primary">Sign up</Button>
        </Nav>
        </div>
      </Navbar>
    </div>
  );
}

export default Nvbr;
