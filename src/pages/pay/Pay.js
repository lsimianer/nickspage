import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./pay.css";
import brtext from'../images/brtext.jpg';
import { Container, Row, Col, Button } from 'reactstrap';

// import API from "../../utils/API.js";

class Pay extends Component {

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
        <Container id="cartContainer">
            <Container id="items">
            <div id="firstItem">one</div>         
            <div id="secondItem">two</div>         
            <div id="ThirdItem">three</div>         
            <div id="FourthItem">four</div>    
            </Container>
            <Container id="paypalApi">
                paypal api here
                <form id="ppform" target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
                <input type="hidden" name="cmd" value="_s-xclick"/>
                <input type="hidden" name="hosted_button_id" value="LG5JU6GFP4CYY"/>
                <table id="ppTable">
                <tr><td><input type="hidden" name="on0" value="Quantity"/>Quantity</td></tr><tr><td><select name="os0">
                    <option value="1 session">1 session $45.00 USD</option>
                    <option value="2 sessions">2 sessions $80.00 USD</option>
                    <option value="5 sessions">5 sessions $185.00 USD</option>
                </select> </td></tr>
                </table>
                <input type="hidden" name="currency_code" value="USD"/>
                <input id="pp1" type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
                <img id="ppImg" alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
                </form>
<h1> swiggity swotty wheres the booty</h1>

<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post" >
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----"/>
<input type="image" src="https://images.vexels.com/media/users/3/141186/isolated/preview/431ad815c9a8402ebdf354c82923c2a5-shopping-cart-6-by-vexels.png" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>



            </Container>
        </Container>
        </div>
    );
    }
}
// https://www.robinwieruch.de/react-paypal-payment paypal walkthrough

// paypal developer button walkthrough pdf
export default Pay;