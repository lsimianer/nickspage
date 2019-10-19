import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./landing.css";
import rhino from '../images/babyrino.jpg';
import brtext from'../images/brtext.jpg';
// import API from "../../utils/API.js";

class Landing extends Component {

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
            <div id="card-holder"> 
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src={brtext} alt="logo"/>
                    </div>
                    <div className="flip-card-back">
                        <img src={rhino} alt="logo"/>
                    </div>
                </div>
            </div>
            <div className="button-container">
                <button id="enter"><Link id="enter" to={"/Home"}>Where dreams are realized</Link></button>
            </div>
            </div>
       
            
            

        </div>
    );
}}

export default Landing;