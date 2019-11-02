import React, {Component} from 'react';
import "./results.css";
import Coverflow from 'react-coverflow';
import p0 from '../images/p2.jpeg';

import p1 from '../images/transformation1.jpg';
import p2 from '../images/transformation2.jpg';
import p3 from '../images/transformation3.jpg';
import p4 from '../images/transformation4.jpg';
import p5 from '../images/transformation5.jpg';
import p6 from '../images/transformation6.jpg';
import p7 from '../images/transformation7.jpg';
import p8 from '../images/transformation8.jpg';
import p9 from '../images/transformation9.jpg';
import p10 from '../images/transformation10.jpg';
import p11 from '../images/transformation11.JPG';


const fn = function () {
    console.log("something clicked")
};

class HomeCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 0
    };
  }
  

  render() {
    return (
      <div>
        {/* <button onClick={this._handleClick.bind(this)}>Random</button> */}
        <Coverflow
          width={900}
          height={980}
          displayQuantityOfSide={2}
          navigation={true}
          enableHeading={true}          
          clickable={true}
          enableScroll={true}
          active={this.state.active}
          media={{
            '@media (max-width: 900px)': {
              width: '100vw',
              height: '780px'
            },
            '@media (min-width: 900px)': {
              width: '960px',
              height: '600px'
            }
          }}
        >
          <div
            onClick={() => fn()}
            onKeyDown={() => fn()}
            role="menuitem"
            tabIndex="0"
          >
            <img id="carouselPic" src={p0} alt='transformation pic'/>

          </div>
          <img id="carouselPic" src={p1} alt='transformation pic'/>
          <img id="carouselPic" src={p2} alt='transformation pic'/>
          <img id="carouselPic" src={p3} alt='transformation pic'/>
          <img id="carouselPic" src={p4} alt='transformation pic'/>
          <img id="carouselPic" src={p5} alt='transformation pic'/>
          <img id="carouselPic" src={p6} alt='transformation pic'/>
          <img id="carouselPic" src={p7} alt='transformation pic'/>
          <img id="carouselPic" src={p8} alt='transformation pic'/>
          <img id="carouselPic" src={p9} alt='transformation pic'/>
          <img id="carouselPic" src={p10} alt='transformation pic'/>
          <img id="carouselPic" src={p11} alt='transformation pic'/>
         
        </Coverflow>

      </div>
    );
  }

  _handleClick() {
    var num = Math.floor((Math.random() * 10) + 1);
    this.setState({
      active: num
    });
  }
};



export default HomeCarousel;