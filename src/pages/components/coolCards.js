// import React, {Component} from "react";
// import { Link } from "react-router-dom";
// import "./coaches.css";
// import brtext from'../images/brtext.jpg';
// import rhino from'../images/babyrino.jpg';
// import { Container, Row, Col, Button } from 'reactstrap';
// import Card from "react-bootstrap/Card";
// import Footer  from '../components/footer';
// import Navbar  from '../components/navbar'




// // import API from "../../utils/API.js";

// class Coaches extends Component {

// //     state = {
// //         developers : {}
// //     }

// //     componentDidMount() {
// //         API.getDeveloperMe()
// //           .then(res => {
// //               console.log("FINDME");
// //               console.log(res.data)
// //               this.setState({ developers: res.data } )
// //         })
// //           .catch(err => console.log(err));
// //       }

    

//     render() {
//     return (
//     <div>
//         <Navbar/>
//             <Container id='coachesContainer'>        
//                      <Row>
//                         <Col>
//                         <div className="card">
//                             <div className="card__side card__side--front">
//                                     <div className="card__picture card__picture--1">
//                                         &nbsp;
//                                     </div>
//                                     <h4 className="card__heading">
//                                         <span className="card__heading-span card__heading-span--1">Bronz Package</span>
//                                     </h4>
//                                     <div className="card__details">
//                                         <ul>
//                                             <li>24/7 Access</li>
//                                             <li>Nutrition Coaching</li>
//                                             <li>Enjoy up to 4 Group Classes per week</li>
//                                         </ul>
//                                     </div>
//                             </div>
//                             <div className="card__side card__side--back card__side--back-1">
//                                     <div className="card__cta">
//                                         <div className="card__price-box">
//                                             <p className="card__price-only">Only</p>
//                                             <p className="card__price-value">$67</p>
//                                             <p className="card__price-only">Per Month</p>

//                                         </div>
//                                         <a href="#popup" className="btn btn--white">Join now!</a>
//                                     </div>
//                                 </div>
//                         </div>
//                         </Col>


//                         <Col>
//                             <div className="card">
//                                 <div className="card__side card__side--front">
//                                     <div className="card__picture card__picture--2">
//                                         &nbsp;
//                                     </div>
//                                     <h4 className="card__heading">
//                                         <span className="card__heading-span card__heading-span--2">Silver Package</span>
//                                     </h4>
//                                     <div className="card__details">
//                                         <ul>
//                                             <li>24/7 Access</li>
//                                             <li>Unlimited Classes</li>
//                                             <li>Nutrition Coaching</li>
//                                             <li>2 hours of One-on-One coaching per month</li>
//                                         </ul>
//                                     </div>

//                                 </div>
//                                 <div className="card__side card__side--back card__side--back-2">
//                                     <div className="card__cta">
//                                         <div className="card__price-box">
//                                             <p className="card__price-only">Only</p>
//                                             <p className="card__price-value">$107</p>
//                                             <p className="card__price-only">Per Month</p>

//                                         </div>
//                                         <a href="#popup" className="btn cardBtn btn--white">Join now!</a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </Col>


//                         <Col>
//                             <div className="card">
//                                 <div className="card__side card__side--front">
//                                     <div className="card__picture card__picture--3">
//                                         &nbsp;
//                                     </div>
//                                     <h4 className="card__heading">
//                                         <span className="card__heading-span card__heading-span--3">Gold Package</span>
//                                     </h4>
//                                     <div className="card__details">
//                                         <ul>
//                                             <li>24/7 Access</li>
//                                             <li>Unlimited Classes</li>
//                                             <li>Nutrition Coaching</li>
//                                             <li>4 hours of One-on-One coaching per month</li>
//                                         </ul>
//                                     </div>

//                                 </div>
//                                 <div className="card__side card__side--back card__side--back-3">
//                                     <div className="card__cta">
//                                         <div className="card__price-box">
//                                             <p className="card__price-only">Only</p>
//                                             <p className="card__price-value">$137</p>
//                                             <p className="card__price-only">Per Month</p>

//                                         </div>
//                                         <a href="#popup" className="btn btn--white">Join now!</a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </Col>
//                     </Row>                
//             </Container>
//         <Footer/>
//     </div>
//     );
//     }
// }


// // https://codepen.io/paulkim/pen/oZLavq shopping cart and modal example
// export default Coaches;




// csss



// #coachesContainer {
//     width: 100%;
//     margin: 0 auto;
//     margin-bottom: 2%;
//     margin-top: 2%;
//     height: 100%;
// }

// .card {
//     perspective: 150rem;
//     -moz-perspective: 150rem;
//     position: relative;
//     height: 32rem;
// }

// .card__side {
//     height: 32rem;
//     transition: all .8s ease;
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     backface-visibility: hidden;
//     border-radius: 3px;
//     overflow: hidden;
//     box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
// }

// .card__side--front {
//     background-color: #F4F4EF;
// }

// .card__side--back {
//     transform: rotateY(180deg);
// }

// .card__side--back-1 {
//     background-image: linear-gradient(to right bottom, #cd8c32, #cd7232);
// }

// .card__side--back-2 {
//     background-image: linear-gradient(to right bottom, #c0c0c0, #a7a7a7);
// }

// .card__side--back-3 {
//     background-image: linear-gradient(to right bottom, #ffd700, #ffad00);
// }

// .card:hover .card__side--front {
//     transform: rotateY(-180deg);
// }

// .card:hover .card__side--back {
//     transform: rotateY(0);
// }

// .card__picture {
//     background-size: cover;
//     height: 13rem;
//     background-blend-mode: soft-light;
//     clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
//     border-top-left-radius: 3px;
//     border-top-right-radius: 3px;
// }

// .card__picture--1 {
//     background-image: linear-gradient(to right bottom, #cd8c32, #cd7232), url(../images/brtext.jpg);
// }

// .card__picture--2 {
//     background-image: linear-gradient(to right bottom, #bdbdbd, #a7a7a7), url(../images/brtext.jpg);
// }

// .card__picture--3 {
//     background-image: linear-gradient(to right bottom, #ffd700, #ffc200), url(../images/brtext.jpg);
// }

// .card__heading {
//     font-size: 2.8rem;
//     font-weight: 300;
//     text-transform: uppercase;
//     text-align: right;
//     color: #F4F4EF;
//     position: absolute;
//     top: 12rem;
//     right: 2rem;
//     width: 75%;
// }

// .card__heading-span {
//     padding: 1rem 1.5rem;
//     -webkit-box-decoration-break: clone;
//     box-decoration-break: clone;
// }

// .card__heading-span--1 {
//     background-image: linear-gradient(to right bottom, rgba(205, 140, 50, 0.85), rgba(205, 114, 50, 0.85));
// }

// .card__heading-span--2 {
//     background-image: linear-gradient(to right bottom, rgba(192, 192, 192, 0.85), rgba(167, 167, 167, 0.85));
// }

// .card__heading-span--3 {
//     background-image: linear-gradient(to right bottom, rgba(255, 215, 0, 0.85), rgba(255, 173, 0, 0.85));
// }

// .card__details {
//     margin-top: 9%;
//     padding: 5rem;
// }

// .card__details ul {
//     list-style: none;
//     width: 80%;
//     margin: 0 auto;
// }

// .card__details ul li {
//     text-align: center;
//     font-size: 1.2rem;
//     padding: 1rem;
// }

// .card__details ul li:not(:last-child) {
//     border-bottom: 1px solid #ACBEBE;
// }

// .card__cta {
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     width: 90%;
//     text-align: center;
// }

// .card__price-box {
//     text-align: center;
//     color: #F4F4EF;
//     margin-bottom: 8rem;
// }

// .card__price-only {
//     font-size: 1.4rem;
//     text-transform: uppercase;
// }

// .card__price-value {
//     font-size: 6rem;
//     font-weight: 100;
// }

// @media (max-width: 70em) {
//     .card {
//         height: 63rem;
//         margin-top: 5%;
//         margin-bottom: 20%;
//         border-radius: 3px;
//         background-color: #fff;
//         box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
//     }
    
//     .cardBtn{
//         margin-top: -10%;
//     }
//     .card__details {
//         margin-top: 9%;
//         padding: 3rem;
//     }
//     .card__side {
//         height: auto;
//         position: relative;
//         box-shadow: none;
//         margin-bottom: -10rem;
//         clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
//     }

//     .card__side--back {
//         transform: rotateY(0);
//         clip-path: polygon(0 15%, 100% 0, 100% 100%, 0 100%);
//     }

//     .card__side--back-1 {
//         background-image: linear-gradient(to top, #cd8c32, #cd7232);
//     }

//     .card__side--back-2 {
//         background-image: linear-gradient(to top, #bdbdbd, #a7a7a7);
//     }

//     .card__side--back-3 {
//         background-image: linear-gradient(to top, #ffc200, #ffad00);
//     }

//     .card:hover .card__side--front {
//         transform: rotateY(0);
//     }

//     .card__details {
//         padding-bottom: 8rem;
//     }

//     .card__cta {
//         position: relative;
//         top: 0;
//         left: 0;
//         transform: translate(0);
//         width: 100%;
//         padding: 7rem 4rem 4rem 4rem;
//     }

//     .card__price-box {
//         margin-bottom: 2rem;
//     }

//     .card__price-only {
//         font-size: 1.4rem;
//         text-transform: uppercase;
//     }

//     .card__price-value {
//         font-size: 6rem;
//     }
// }