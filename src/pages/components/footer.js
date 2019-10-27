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
        Nick@coachrhino.com
        <br/>
        &copy; brphysiques

        </Container>
    </div>
    );
  }
}
export default Footer;

