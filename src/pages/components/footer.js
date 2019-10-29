import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { Container, Col, Row } from 'reactstrap';
import { Component } from 'react';
import { Link } from "react-router-dom";
import "./footer.css";


class Footer extends Component{
render() {
return (
    <div>
        <Container id='footCon'>
        <Link to='/gram' target='_blank'><FaInstagram id="insta"/></Link>
         <br/>
         <br/>
        <h3 id='footText'> Nick@coachrhino.com</h3>
        <h3 id='footText'>&copy; 2019 brphysiques</h3>
          <Link to='/CodeHounds' target='_blank'><h3 id='footText'>A CodeHounds Website</h3></Link>


        </Container>
    </div>
    );
  }
}
export default Footer;

