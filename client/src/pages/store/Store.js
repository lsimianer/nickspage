import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./store.css";
import brtext from'../images/brtext.jpg';
import rhino from'../images/babyrino.jpg';
import { Container, Row, Col, Button } from 'reactstrap';
import Card from "react-bootstrap/Card";
import shoppingCart from "../images/cart1.jpg";



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
            <nav class="navbar navbar-expand-lg navbar-custom">
                <Link to={"/"} id="navImg" class="navbar-left">
            <img id="navImg" src={brtext} alt="product"/></Link>
            <button  class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <Link class="nav-link" to={"/Home"}>Home</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to={"/Schedule"}>Book Training</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to={"/Store"}>Buy Swag</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to={"/results"}>Client Success</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to={"/Education"}>Education</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to={"/Checkout"}>Checkout</Link>
                </li>
            </ul>
        </div>
        <div id="cartDiv">
        <Link to="/pay"><img id='cartLogo' src={shoppingCart}/><h3 id='cartCount'>0</h3></Link>
        </div>
        </nav>
        <div id="section3">
        <Container id="sectionStore">
       <Row>
        <Col xs="6">
            <Card className="storeCard"style={{ width: '18rem' }}>
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
            <br/>
            <br/> 
            <Card className="storeCard"style={{ width: '18rem' }}>
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
    {/* seperation of columns */}
        <Col xs="6">
            <Card className="storeCard"style={{ width: '18rem' }}>
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
            <br/>
            <br/>  
            <Card className="storeCard" style={{ width: '18rem' }}>
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