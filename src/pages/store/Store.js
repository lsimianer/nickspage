import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./store.css";
import brtext from'../images/brtext.jpg';
import rhino from'../images/babyrino.jpg';
import { Container, Row, Col, Button } from 'reactstrap';
import Card from "react-bootstrap/Card";
import shoppingCart from "../images/cart1.jpg";
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
        <Container id="sectionStore">
       <Row>
        <Col >
            <Card id="storeCard"style={{ width: '18rem' }}>
                <Card.Img id="storeImg" variant="top" src={brtext} alt="product" />
                <Card.Body className="storeCB">
                 <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                <Button className="storeBtn" variant="primary">ADD TO CART</Button>
                </Card.Body>
            </Card> 
            </Col>
            <Col xs="6"> 
            {/* <br/>
            <br/>  */}
            <Card id="storeCard"style={{ width: '18rem' }}>
                <Card.Img id="storeImg" variant="top" src={rhino} alt="product" />
                <Card.Body className="storeCB">
                 <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                <Button className="storeBtn" variant="primary">ADD TO CART</Button>
                </Card.Body>
            </Card>                  
        </Col>
    </Row>
    {/* seperation of columns */}
    <Row>
        <Col>
            <Card id="storeCard"style={{ width: '18rem' }}>
                <Card.Img id="storeImg" variant="top" src={rhino} alt="product" />
                <Card.Body className="storeCB">
                 <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                <Button className="storeBtn" variant="primary">
                <form id="ppform" target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
                <input type="hidden" name="cmd" value="_s-xclick"/>
                <input type="hidden" name="hosted_button_id" value="LG5JU6GFP4CYY"/>
                <table id="ppTable">
                <tr><td><input type="hidden" name="on0" value="Quantity"/>Quantity</td></tr><tr><td><select name="os0">
                    <option value="1 session">1 session $45.00 USD</option>
                    <option value="2 sessions">2 sessions $80.00 USD</option>
                    <option value="5 sessions">5 sessions $185.00 USD</option>
                </select> </td></tr>
                </table>
                <input type="hidden" name="currency_code" value="USD"/>
                <input id="pp1" type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
                <img id="ppImg" alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
                </form>  
                
                </Button>
                </Card.Body>
            </Card>
            </Col> 
            <Col >
            {/* <br/>
            <br/>   */}
            <Card id="storeCard" style={{ width: '18rem' }}>
                <Card.Img id="storeImg" variant="top" src={brtext} alt="product" />
                <Card.Body className="storeCB">
                 <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                <Button className="storeBtn" variant="primary">ADD TO CART</Button>
                </Card.Body>
            </Card>                  
        </Col>
      </Row>
      </Container>
      </div>
        </div>
    );
    }
}


// https://codepen.io/paulkim/pen/oZLavq shopping cart and modal example
export default Store;