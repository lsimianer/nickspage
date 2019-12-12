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
        <Container id="inPersonTrainingContainer">
        <h3 className="trainingText">IN PERSON TRAINING</h3>  
        <h4> All training packages include customized nutrition guidelines, workout plans for days you do not train with me, cardio guidelines,
             supplement guidelines and weekly check-ins/alterations as needed.</h4> 
        <Row>
        <Col>
            <div className='inPersonPurchase' id='inPersonCardBuy'>
                <form id="ppTrainingForm" target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
                    <input type="hidden" name="cmd" value="_s-xclick"/>
                    <input type="hidden" name="hosted_button_id" value="YTPTFXSMG8CR4"/>
                    <table>
                    <tr><td><input type="hidden" name="on0" value="Monthly Sessions"/>Monthly Sessions</td></tr><tr><td><select name="os0">
                        <option value="2x weekly per month">2x weekly per month $400.00 USD</option>
                        <option value="3x weekly per month">3x weekly per month $550.00 USD</option>
                        <option value="4x weekly per month">4x weekly per month $700.00 USD</option>
                        <option value="5x weekly per month">5x weekly per month $850.00 USD</option>
                        <option value="Single Session">Single Session $60.00 USD</option>
                    </select> </td></tr>
                    </table>
                    <input type="hidden" name="currency_code" value="USD"/>
                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
                    <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
                </form>                              
            </div> 
        </Col>
        <Col>
            <div className='inPersonPurchase' id='inPersonCardSubscribe'>
                <form id="ppTrainingForm" action="https://www.paypal.com/cgi-bin/webscr" method="post">
                    <input type="hidden" name="cmd" value="_s-xclick"/>
                    <input type="hidden" name="hosted_button_id" value="4CZD4LUFMH48C"/>
                    <table>
                    <tr><td><input type="hidden" name="on0" value="Monthly Training subscriptions"/>Monthly Training subscriptions</td></tr><tr><td><select name="os0">
                        <option value="2x weekly per month">2x weekly per month : $400.00 USD - monthly</option>
                        <option value="3x weekly per month">3x weekly per month : $550.00 USD - monthly</option>
                        <option value="4x weekly per month">4x weekly per month : $700.00 USD - monthly</option>
                        <option value="5x weekly per month">5x weekly per month : $850.00 USD - monthly</option>
                    </select> </td></tr>
                    </table>
                    <input type="hidden" name="currency_code" value="USD"/>
                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_subscribeCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
                    <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
                </form>
            </div>
        </Col>
        </Row>

        </Container>
        <Container id='onlineTrainingContainer'>
            <h3 className="trainingText">ONLINE TRAINING</h3>        
                     <Row className="row-grid">
                        {/* <Col>
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
                        </Col> */}


                        <Col>
                            <div className="card">
                                <div className="card__side card__side--front">
                                    <div className="card__picture card__picture--2">
                                        &nbsp;
                                    </div>
                                    <h4 className="card__heading">
                                        <span className="card__heading-span card__heading-span--2">Basic Package</span>
                                    </h4>
                                    <div className="card__details">
                                        <ul>
                                            <li> weekly check-ins/alterations</li>
                                            <li>customized nutrition guidelines</li>
                                            <li>cardio plan</li>
                                            <li>supplement guidelines</li>
                                        </ul>
                                    </div>

                                </div>
                                <div className="card__side card__side--back card__side--back-2">
                                    <div className="card__cta">
                                        <div className="card__price-box">
                                            <p className="card__price-only">Only</p>
                                            <p className="card__price-value">$200</p>
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
                                        <span className="card__heading-span card__heading-span--3">Elite Package</span>
                                    </h4>
                                    <div className="card__details">
                                        <ul>
                                            <li>Custom workout planning</li>
                                            <li>Weekly adjustments</li>
                                            <li>CustomNutrition Coaching</li>
                                            <li>Cardio and supplement planning</li>
                                        </ul>
                                    </div>

                                </div>
                                <div className="card__side card__side--back card__side--back-3">
                                    <div className="card__cta">
                                        <div className="card__price-box">
                                            <p className="card__price-only">Only</p>
                                            <p className="card__price-value">$250</p>
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