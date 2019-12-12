import React, {Component} from "react";
import "./home.css";
import Navbar  from '../components/navbar';
import Footer  from '../components/footer';
import { Link } from "react-router-dom"
class Home extends Component {



    render() {
    return (
        <div>
            <Navbar/>
                <div id="bodyWrapper1">
                    <section id="section1">
                        <div class="container1">
                            <br/>
                            <div id='homeTextController'>
                                <h1 id="header"> BRphyisques Ethos</h1>
                                    <p id="mainBody"> 
                                        BRphysiques was created to challenge the norms of the coaching industry. We believe in thinking differently.</p>
                                        <p id="mainBody"> 
                                        We challenge the coaching industry by working WITH the body via intelligent programming, customized nutrition and stress management.</p>
                                        <p id="mainBody"> 
                                        And we happen to create amazing results.                                
                                    </p>
                                <Link className='homepageLink' to='/Schedule'><h1 id="subHeader">Are you ready for change?</h1></Link>
                            </div>
                        </div>
                    </section>
                </div>
            <Footer/>
        </div>
    );
    }
}

export default Home;