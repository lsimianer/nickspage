import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./coaches.css";
import brtext from'../images/brtext.jpg';
import rhino from'../images/babyrino.jpg';
import { Container, Row, Col, Button } from 'reactstrap';
import Card from "react-bootstrap/Card";
import Footer  from '../components/footer';
import Navbar  from '../components/navbar'




// import API from "../../utils/API.js";

class Coaches extends Component {

//     state = {
//         developers : {}
//     }

//     componentDidMount() {
//         API.getDeveloperMe()
//           .then(res => {
//               console.log("FINDME");
//               console.log(res.data)
//               this.setState({ developers: res.data } )
//         })
//           .catch(err => console.log(err));
//       }

    

    render() {
    return (
    <div>
        <Navbar/>
            <Container id='coachesContainer'>        
                     <Row>
                        <Col>
                        <div className="card">
                            <div className="card__side card__side--front">
                                    <div className="card__picture card__picture--1">
                                        &nbsp;
                                    </div>
                                    <h4 className="card__heading">
                                        <span className="card__heading-span card__heading-span--1">Bronz Package</span>
                                    </h4>
                                    <div className="card__details">
                                        <ul>
                                            <li>24/7 Access</li>
                                            <li>Nutrition Coaching</li>
                                            <li>Enjoy up to 4 Group Classes per week</li>
                                        </ul>
                                    </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-1">
                                    <div className="card__cta">
                                        <div className="card__price-box">
                                            <p className="card__price-only">Only</p>
                                            <p className="card__price-value">$67</p>
                                            <p className="card__price-only">Per Month</p>

                                        </div>
                                        <a href="#popup" className="btn btn--white">Join now!</a>
                                    </div>
                                </div>
                        </div>
                        </Col>


                        <Col>
                            <div className="card">
                                <div className="card__side card__side--front">
                                    <div className="card__picture card__picture--2">
                                        &nbsp;
                                    </div>
                                    <h4 className="card__heading">
                                        <span className="card__heading-span card__heading-span--2">Silver Package</span>
                                    </h4>
                                    <div className="card__details">
                                        <ul>
                                            <li>24/7 Access</li>
                                            <li>Unlimited Classes</li>
                                            <li>Nutrition Coaching</li>
                                            <li>2 hours of One-on-One coaching per month</li>
                                        </ul>
                                    </div>

                                </div>
                                <div className="card__side card__side--back card__side--back-2">
                                    <div className="card__cta">
                                        <div className="card__price-box">
                                            <p className="card__price-only">Only</p>
                                            <p className="card__price-value">$107</p>
                                            <p className="card__price-only">Per Month</p>

                                        </div>
                                        <a href="#popup" className="btn cardBtn btn--white">Join now!</a>
                                    </div>
                                </div>
                            </div>
                        </Col>


                        <Col>
                            <div className="card">
                                <div className="card__side card__side--front">
                                    <div className="card__picture card__picture--3">
                                        &nbsp;
                                    </div>
                                    <h4 className="card__heading">
                                        <span className="card__heading-span card__heading-span--3">Gold Package</span>
                                    </h4>
                                    <div className="card__details">
                                        <ul>
                                            <li>24/7 Access</li>
                                            <li>Unlimited Classes</li>
                                            <li>Nutrition Coaching</li>
                                            <li>4 hours of One-on-One coaching per month</li>
                                        </ul>
                                    </div>

                                </div>
                                <div className="card__side card__side--back card__side--back-3">
                                    <div className="card__cta">
                                        <div className="card__price-box">
                                            <p className="card__price-only">Only</p>
                                            <p className="card__price-value">$137</p>
                                            <p className="card__price-only">Per Month</p>

                                        </div>
                                        <a href="#popup" className="btn btn--white">Join now!</a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>                
            </Container>
        <Footer/>
    </div>
    );
    }
}


// https://codepen.io/paulkim/pen/oZLavq shopping cart and modal example
export default Coaches;