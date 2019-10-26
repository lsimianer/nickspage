import React, { useState } from 'react';
import brtext from'../images/brtext.jpg';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import "./nav.css";
import { Link } from "react-router-dom";
import shoppingCart from "../images/cart1.jpg";

const Example = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" id="navImg" className="mr-auto"><img id="navImg" src={brtext} alt="product"/></NavbarBrand>
            <div id="linkies">
              <NavLink id='noCol' href="/Home">Home</NavLink>
              <NavLink id='noCol' href="/Schedule">Book Training</NavLink>
              <NavLink id='noCol' href="/Store ">Buy Swag</NavLink>
              <NavLink id='noCol' href="/Results ">Client Success</NavLink>
              <NavLink id='noCol' href="/Education ">Education</NavLink>
              <NavLink id='noCol' href="/Checkout">Checkout</NavLink>
            </div>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/Home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Schedule">Book Training</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Store ">Buy Swag</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Results ">Client Success</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Education ">Education</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Checkout">Checkout</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        {/* <div id="cartDiv">
        <Link to="/pay"><img id='cartLogo' src={shoppingCart}/><h3 id='cartCount'>0</h3></Link>
        </div> */}
        
      </Navbar>
    </div>
  );
}

export default Example;