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
                           
        <Container  id="landingContainer">            
            <div id="rhinoHolder">
                <img className="landingRhino" src={rhino} alt="logo"/>                            
            </div>               
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

        <div id='openingScene'>
            <img id="landingImg" src={brtext} alt="logo"/>
            <div id='crazyText'>
                <Row>
                <Col><h2 className='strobe'>DEDICATION</h2></Col>
                <Col><h2 className='strobe'>GROWTH</h2></Col>
                <Col><h2 className='strobe'>DETERMINATION</h2></Col>
                <Col><h2 className='strobe'>FOCUS</h2></Col>
                <Col><h2 className='strobe'>PASSION</h2></Col>
                </Row>                         
            </div>
        </div>
            {/* </Container> */}

        </div>
    );
}}

export default Landing;