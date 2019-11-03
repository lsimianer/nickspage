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
        
        <div id="sectionSchedule">
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
              <Jumbotron id='trainPkg'>
              <h1 className="display-3">Monthly Training Subscription</h1>
                <p className="lead">Subscribe to a monthly training package to save money </p>
                <hr className="my-2" />
                <p>$225 a month for 5 sessions etc, no backrubs tho</p>
                <p className="lead">
                  <Button color="primary">Subscribe Now</Button>
                </p>
            </Jumbotron>
            <Jumbotron id='trainPkg'>
                <h1 className="display-3">Single Training sessions</h1>
                <p className="lead">Purchase a single training session to address your goals </p>
                <hr className="my-2" />
                <p>$55 a session, still no backrubs tho</p>
                <p className="lead">
                  <Button color="primary">Purchase Now</Button>
                </p>
            </Jumbotron>   
          </Container>       
        
        </div>
        <Footer/>
        </div>
        
    );
    }
}



export default Schedule;