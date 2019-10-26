import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./education.css";
import brtext from'../images/brtext.jpg';
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

        <section id="sectionEdu">
        <div class="container1">
            <h1 id="header"> Baby Rhino Physiques</h1>
            <h2 id="subhead">Where dreams are realized</h2>
            <br/>
            <p id="mainBody">Exclusive members only training content coming soon, join the mailing list to be updated!</p>
        </div>

        
    </section>


        </div>
    );
    }
}

export default Education;