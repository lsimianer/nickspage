import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./coaches.css";
import blake from'../images/blake.jpg';
import nick from'../images/unnamed-10.jpg';
import { Container, Row, Col, Button } from 'reactstrap';
import Card from "react-bootstrap/Card";
import Footer  from '../components/footer';
import Navbar  from '../components/navbar'




// import API from "../../utils/API.js";

class Coaches extends Component {   

    render() {
    return (
    <div>
        <Navbar/>
        <Container id='coachPageContainer'>
            <Container id='coachCon'>
                                
                        <Card id="coachCard">
                            <Card.Img className='coachCardPic' variant="top" src={nick} />
                            <Card.Body>
                                <Card.Title>Nick Langer</Card.Title>
                                <Card.Text>                                    
                                    <ul id='trainerCredentils'>
                                    <li>BS in Biology/Pre-med</li>
                                    <li>PN1 certified</li>
                                    <li>10+ Years Coaching</li>
                                    </ul>
                                    <p className='coachBioText'>
                                    "Never quit, unless you are forced to quit"<br/>

                                        This was a mantra of mine growing up. Something that I engrained in my own head out of sheer stubbornness. Specifically, this was true when it came to competitive sports. 
                                        <br/>
                                        <br/>
                                        When I was a junior in college my dreams of playing football at a high level came to an abrupt end when I had my second brain bleed. The mantra I had lived by my whole life, especially when it came to the sport I had loved, finally caught up to me. 
                                        <br/>
                                        <br/>
                                        At this time I was lost as to what I wanted to do with my future. I sat back and realized there was always one constant in my life, health and fitness. I made it my mission that day to begin learning everything I could about the human body and nutrition. 
                                        <br/>
                                        <br/>
                                        I knew that this abrupt ending was the beginning of something great for me. That is when I began truly pursuing my passion of helping others achieve their health and fitness goals.
                                        <br/>
                                        <br/>
                                        Specifically, with my general health clients, I focus on education. I want you to learn how to manage your health, create healthy eating habits and sustain these habits without me so that one day I am no longer useful to you!
                                        <br/>
                                        <br/>
                                        When it comes to competitors my first priority is presenting your best physique without compromising health. Using customized nutrition, training and stress management techniques I will help you create a physique worthy of 1st place!
                                    </p>
                                    </Card.Text>
                            </Card.Body>
                        </Card>  
                    
                        <Card id="coachCard">
                            <Card.Img className='coachCardPic' variant="top" src={blake} />
                            <Card.Body>
                                <Card.Title>Blake Grove</Card.Title>
                                    <Card.Text>                                    
                                    <p className='coachBioText'>
                                        From birth I was an overweight child, this continued through grade school as I can remember
                                        wrestling in 7 th grade at 197lbs. My annual doctor appointments always ended with tears as the
                                        physician told my parents if I didn’t get on a diet, I would end up obese later in life. My parents
                                        were middle class citizens with no more than a high school degree, low-income jobs, and little
                                        knowledge about health in general. They disregarded what the doctors had to say and told me
                                        everything would be “okay” as they pushed more food onto my plate, I guess this was where
                                        my whole health journey began.
                                        <br/>
                                        <br/>
                                        I realized from a young age I was not happy with myself mentally or physically. My freshman
                                        year I began playing sports (football, wrestling, and track) and fell in love with the weight room.
                                        From there I began working in supplements stores and reading about nutrition, spurring me to
                                        switch my degree from business to dietetics. Starting out in the dietetics program I really
                                        wanted to specialize in pediatric dietetics as I know first-hand how hard it is growing up
                                        unhappy with your body. After interning at the Mankato Clinic under a distinguished Registered
                                        Dietitian (RD) were I was involved in several pediatric feeding clinics I decided that it wasn’t my
                                        true passion and that sports nutrition and bodybuilding were what I truly loved to do.
                                        <br/>
                                        <br/>
                                        During all of this I was hiring mentors and coaches out of my own pocket to learn more about
                                        exercise, nutrition, and health in general. During my junior year of college, I ran into some
                                        unexpected health issues (SIBO, IBS, Candida, Insulin Sensitivity, ADHD, Depression, Anxiety,
                                        Hormonal dysregulation, metabolic damage) stemming from high stress and basically
                                        overworking my body. This is when I journeyed down the path of health optimization and
                                        learning all I could about disease states, stress responses, recovery, etc.
                                        <br/>
                                        <br/>
                                        I am currently attending the University of Mississippi (Ole Miss) for my Masters in Sports
                                        Nutrition and my supervised practice clinical rotations in order to sit for my RD exam at the end
                                        of next year. I am beyond grateful that god has allowed me to do what I love and help others
                                        improve themselves both mentally and physically.
                                    </p>
                                    </Card.Text>
                            </Card.Body>
                        </Card>   
            </Container>       
                        <Row>
                            <Col md={12}>
                                <div className='bookNowDiv'>
                                    <Button id="bookNowBtn" variant="primary">Book Now</Button>
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