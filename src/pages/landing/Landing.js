import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./landing.css";
import rhino from '../images/babyrhino2.png';
import brtext from'../images/text2.png';
import { Container, Row, Col } from 'reactstrap';
// import Footer  from '../components/footer';


//     background-image: linear-gradient(#20202052, #34abcf65)

class Landing extends Component {

    render() {
    return (
        <div>
            {/* <Container id='landingBody' > */}
                           
        <Container  id="card-holder">
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img className="landingImg" src={brtext} alt="logo"/>
                            </div>
                            <div className="flip-card-back">
                                <img className="landingImg" src={rhino} alt="logo"/>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
            
        <Container id='btnCon'>
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <div className="button-container">
                       <button id="enter"><Link id="enter" to={"/Home"}>Where dreams are realized</Link></button>
                    </div>
                </Col>
            </Row>
            </Container>
            {/* </Container> */}

        </div>
    );
}}

export default Landing;