import React, {Component} from "react";
// import { Link } from "react-router-dom";
import "./home.css";
// import brtext from'../images/brtext.jpg';
import Navbar  from '../components/navbar'
// import API from "../../utils/API.js";

class Home extends Component {

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
        <div id="bodyWrapper1">
        <section id="section1">
        <div class="container1">
            <h1 id="header"> Baby Rhino Physiques</h1>
            <h2 id="subhead">Where dreams are realized</h2>
            <br/>
            <p id="mainBody"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi mollitia at ea! Error nemo
                ducimus quia iste tenetur quae reprehende ligendi. Tenetur eveniet fuga dolore similique. Sint cum
                dolorum
                fuga? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nemo quia doloremque suscipit,
                aliquid
                harum odit tempore, pariatur incidunt rem optio ea ipsum voluptatem illum minus aliquam, vitae in
                nostrum?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nulla ratione sunt atque odit modi
                porro
                maiores dolor animi! Minus explicabo quibusdam culpa, molestiae et ab doloribus non neque nisi?</p>
        </div>
    </section>
        </div>
        </div>
    );
    }
}

export default Home;