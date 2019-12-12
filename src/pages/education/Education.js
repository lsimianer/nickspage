import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./education.css";
import Footer  from '../components/footer';
import Navbar  from '../components/navbar'

class Education extends Component {

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

        <section id="scheduleContainer">
        <div class="containerEducation">
            <h1 id="header"> Baby Rhino Physiques</h1>
            <h2 id="subhead">Where dreams are realized</h2>
            <br/>
            <p id="mainBody">Exclusive members only training content coming soon, join the mailing list to be updated!</p>
        </div>

        
    </section>

        <Footer/>
        </div>
    );
    }
}

export default Education;