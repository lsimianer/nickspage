import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./results.css";
import Footer  from '../components/footer';
import Navbar  from '../components/navbar'
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
           <Navbar/>
        <Container id="sectionResults">
            <HomeCarousel></HomeCarousel>
        </Container>
            <Footer/>
        </div>
    );
    }
}

export default Results;