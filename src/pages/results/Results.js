import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./results.css";
import brtext from'../images/brtext.jpg';
// import rhino from '../images/babyrino.jpg';
import { Container } from 'reactstrap';
import  HomeCarousel  from './carousel'

// import API from "../../utils/API.js";




class Results extends Component {

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
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
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
        </nav>
        <Container id="sectionResults">
        <HomeCarousel></HomeCarousel>
        </Container>




        </div>
    );
    }
}

export default Results;