import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./results.css";
import Footer  from '../components/footer';
import Navbar  from '../components/navbar'
import { Container } from 'reactstrap';
// import  HomeCarousel  from './carousel';
import StrapCarousel from './car2';

// import API from "../../utils/API.js";




class Results extends Component {
   

    render() {
    return (
        <div>
           <Navbar/>
        <Container id="scheduleContainer">
            <div id='pointyTextHolder'>
                <h1 id='header' className='underConstruction'> Client Success</h1>
            </div>
            <Container id='sectionResults'>
                <StrapCarousel></StrapCarousel>
            </Container>
        </Container>
            <Footer/>
        </div>
    );
    }
}

export default Results;