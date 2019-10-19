import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./store.css";
import brtext from'../images/brtext.jpg';
// import API from "../../utils/API.js";

class Store extends Component {

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
            <img id="navImg" src={brtext}/></Link>
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
                    <Link class="nav-link" to={"Education"}>Education</Link>
                </li>
            </ul>
        </div>
        </nav>
        </div>
        // <div className="container">
        // <Card style={{ width: '18rem' }}>
        //     <Card.Img variant="top" src="holder.js/100px180" />
        //         <Card.Body>
        //             <Card.Title>Card Title</Card.Title>
        //             <Card.Text>
        //             Some quick example text to build on the card title and make up the bulk of
        //             the card's content.
        //             </Card.Text>
        //         <Button variant="primary">Go somewhere</Button>
        //     </Card.Body>
        // </Card>
        // </div>
    );
    }
}

export default Store;