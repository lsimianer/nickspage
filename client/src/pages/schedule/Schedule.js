import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./schedule.css";
import brtext from'../images/brtext.jpg';
import Calendar from 'react-calendar'
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
            <nav className="navbar navbar-expand-lg navbar-custom">
                <Link to={"/"} id="navImg" className="navbar-left">
            <img id="navImg" src={brtext} alt="product"/></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link className="nav-link" to={"/Home"}>Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/Schedule"}>Book Training</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/Store"}>Buy Swag</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/results"}>Client Success</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"Education"}>Education</Link>
                </li>
            </ul>
        </div>
        </nav>
        
        <div id="section1">
        <div className="container col-sm-4 col-md-7 col-lg-4 mt-5">
        <Calendar />
        </div>
        </div>
        </div>
        
    );
    }
}



export default Schedule;