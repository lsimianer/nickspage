import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./schedule.css";
import Footer  from '../components/footer';
import Iframe from 'react-iframe'
import { Jumbotron, Button, Form, FormGroup, Label, Input, Row, Col, Container } from 'reactstrap';
import Navbar  from '../components/navbar'


// import Calendar from 'react-calendar'
// import API from "../../utils/API.js";

class Schedule extends Component {

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

    //calendar logic

    render() {
    return (
        <div>
           <Navbar/>
        
        <Container id="scheduleContainer">
          <Row>
              <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Container id="calendarContainer">  
             {/*when replacing iframe with nicks ensure width is 100%  */}
                <Iframe url="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FChicago&amp;src=bHNpbWlhbmVyQGdtYWlsLmNvbQ&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%237986CB&amp;color=%2333B679&amp;color=%230B8043&amp;mode=MONTH&amp;showTitle=1&amp;showNav=1" style="border-width:0"  frameborder="0" scrolling="no"
                width="100%"
                height="450px"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"/>
             </Container>
             </Col>
             </Row>
        {/* begin form */}
        <h3 className='calendarText'>See above calendar for available dates</h3>
        <Container id='coachesContainer'>        
                     <Row className="row-grid">
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


          </Container>           
        <Footer/>
        </div>
        
    );
    }
}



export default Schedule;