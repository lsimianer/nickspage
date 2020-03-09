import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./store.css";
import blackHoody from'../images/swag_blackhoody.jpeg';
import ballShirt from'../images/swag_ballshirt.jpeg';
import athleticHoody from'../images/swag_athhoody.jpeg';
import funick from'../images/swag_funick.jpeg';
import { Container, Row, Col, Button } from 'reactstrap';
import Card from "react-bootstrap/Card";
import Footer  from '../components/footer';
import Navbar  from '../components/navbar'




// import API from "../../utils/API.js";

class Store extends Component {

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
        
        <div id="section3">
        <Container id="scheduleContainer">
            <div class="containerEducation">
                <h1 id="header"> BR Physiques Swag Store</h1>
                {/* <h2 id="subhead">What good is hiring the best trainer if everyone else doesn't know</h2> */}
                <br/>
                {/* <p id="mainBody">Exclusive members only training content coming soon, join the mailing list to be updated!</p> */}
            </div>

            <Row>
                <Col >
                    <Card id="storeCard"style={{ width: '18rem' }}>
                        <Card.Img id="storeImg" variant="top" src={blackHoody} alt="product" />
                        <Card.Body className="storeCB">
                            <Card.Title>Unisex Hoody $45.00</Card.Title>
                                <Card.Text>
                                You came, you saw, and now you're sore. This hoody will help others understand why. 
                            </Card.Text>
                            <Button className="storeBtn" variant="primary">
                                <form id='ppform' target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
                                    <input type="hidden" name="cmd" value="_s-xclick"/>
                                    <input type="hidden" name="hosted_button_id" value="N5NBQN9LDPS6Y"/>
                                    <table id="ppTable">
                                    <tr><td><input type="hidden" name="on0" value="Sizes"/>Sizes</td></tr><tr><td><select name="os0">
                                        <option value="Small">Small </option>
                                        <option value="Large">Large </option>
                                        <option value="2XL">2XL </option>
                                        <option value="3XL">3XL </option>
                                    </select> </td></tr>
                                    </table>
                                    <input id="pp1" type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
                                    <img id="ppImg" alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
                            </form>
                            </Button>
                        </Card.Body>
                    </Card> 
                </Col>
                <Col xs="6">  
                
                <Card id="storeCard"style={{ width: '18rem' }}>
                    <Card.Img id="storeImg" variant="top" src={funick} alt="product" />
                    <Card.Body className="storeCB">
                        <Card.Title>Client Comments Shirt $20.00</Card.Title>
                        <Card.Text>
                            Capture the feeling of a good training session with Nick.
                        </Card.Text>
                        <Button className="storeBtn" variant="primary">
                            <form id='ppform' target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
                                <input type="hidden" name="cmd" value="_s-xclick"/>
                                <input type="hidden" name="hosted_button_id" value="G2USFD3CS829E"/>
                                <table id="ppTable">
                                <tr><td><input type="hidden" name="on0" value="Sizes"/>Sizes</td></tr><tr><td><select name="os0">
                                    <option value="Small">Small </option>
                                    <option value="Large">Large </option>
                                    <option value="XL">XL </option>
                                    <option value="3XL">3XL </option>
                                </select> </td></tr>
                                </table>
                                <input id="pp1" type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
                                <img id="ppImg" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
                            </form>
                        </Button>
                    </Card.Body>
                </Card>                  
            </Col>
        </Row> 
    {/* seperation of columns  */}
     <Row>
        <Col>
            <Card id="storeCard"style={{ width: '18rem' }}>
                <Card.Img id="storeImg" variant="top" src={ballShirt} alt="product" />
                <Card.Body className="storeCB">
                 <Card.Title>Baseball tee $25.00</Card.Title>
                    <Card.Text>
                    Who deosnt like the 90's, or gainz? you need this. 
                    </Card.Text>
                <Button className="storeBtn" variant="primary">
                    <form id='ppform' target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
                        <input type="hidden" name="cmd" value="_s-xclick"/>
                        <input type="hidden" name="hosted_button_id" value="FRSED2XHR9N4Y"/>
                        <table id="ppTable">
                        <tr><td><input type="hidden" name="on0" value="Sizes"/>Sizes</td></tr><tr><td><select name="os0">
                            <option value="Small">Small </option>
                            <option value="Large">Large </option>
                            <option value="XL">XL </option>
                            <option value="3XL">3XL </option>
                        </select> </td></tr>
                        </table>
                        <input id="pp1" type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
                        <img id="ppImg" alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
                    </form>
                </Button>
                </Card.Body>
            </Card>
            </Col> 
            <Col > 
               
            <Card id="storeCard" style={{ width: '18rem' }}>
                <Card.Img id="storeImg" variant="top" src={athleticHoody} alt="product" />
                <Card.Body className="storeCB">
                 <Card.Title>Womens Hoody $45.00</Card.Title>
                <Card.Text>
                 You came, you saw, you're a woman, and now you're sore. This hoody will help others understand why. 
                </Card.Text>
                    <Button className="storeBtn" variant="primary">
                        <form id='ppform' target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
                            <input type="hidden" name="cmd" value="_s-xclick"/>
                            <input type="hidden" name="hosted_button_id" value="N5NBQN9LDPS6Y"/>
                            <table id="ppTable">
                            <tr><td><input type="hidden" name="on0" value="Sizes"/>Sizes</td></tr><tr><td><select name="os0">
                                <option value="Small">Small </option>
                                <option value="Large">Large </option>
                                <option value="2XL">2XL </option>
                                <option value="3XL">3XL </option>
                            </select> </td></tr>
                            </table>
                            <input id="pp1" type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
                            <img id="ppImg" alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
                        </form>
                    </Button>
                </Card.Body>
            </Card>                  
        </Col>
      </Row> 
      </Container>
      </div>
      <Footer/>
        </div>
    );
    }
}


export default Store;