import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./schedule.css";
import Footer  from '../components/footer';
import Iframe from 'react-iframe'
import { ListGroupItem, ListGroup, Card, Row, Col, Container } from 'reactstrap';
import Navbar  from '../components/navbar'

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
             <Iframe url="https://calendar.google.com/calendar/embed?src=coachrhino.com_ghjg3i6a813gavdelikpme369k%40group.calendar.google.com&ctz=America%2FChicago" 
                style="border: 0" 
                width="800"
                height="600" 
                frameborder="0"
                scrolling="no"
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
                        <Col>
                            <Container id='salesContainer'>
                                <h3 className='salesHeader'>
                                    Basic Training Package
                                </h3>
                                <div className='salesBody'>
                                    <ul>
                                        <li> weekly check-ins/alterations</li>
                                        <li>customized nutrition guidelines</li>
                                        <li>cardio plan</li>
                                        <li>supplement guidelines</li>
                                    </ul>
                                    <h3 className='salesPriceTag'> Only $200 per month</h3>
                                </div>
                                <div className='salesLinks'>
                                    <Link to='#'><h4 className='salesLinkText'> Buy Now</h4> </Link>
                                    <Link to='/Coaches'><h4 className='salesLinkText'> View Trainers</h4> </Link>
                                </div>
                            </Container>             
                        </Col>
                        <Col>
                        <Container id='salesContainer'>
                                <h3 className='salesHeader'>
                                    Elite Training Package
                                </h3>
                                <div className='salesBody'>
                                    <ul>
                                        <li>Custom workout planning</li>
                                        <li>Weekly adjustments</li>
                                        <li>CustomNutrition Coaching</li>
                                        <li>Cardio and supplement planning</li>
                                    </ul>
                                    <h3 className='salesPriceTag'> Only $250 per month</h3>
                                </div>
                                <div className='salesLinks'>
                                    <Link to='#'><h4 className='salesLinkText'> Buy Now</h4> </Link>
                                    <Link to='/Coaches'><h4 className='salesLinkText'> View Trainers</h4> </Link>
                                </div>
                            </Container>       
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