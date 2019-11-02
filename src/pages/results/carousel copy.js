import React, {Component} from 'react';
import "./results.css";
import Coverflow from 'react-coverflow';
import p1 from '../images/transformation1';
import p2 from '../images/transformation2';
import p3 from '../images/transformation3';
import p4 from '../images/transformation4';
import p5 from '../images/transformation5';
import p6 from '../images/transformation6';
import p7 from '../images/transformation7';
import p8 from '../images/transformation8';
import p9 from '../images/transformation9';
import p10 from '../images/transformation10';
import p11 from '../images/transformation11';


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
        {/* <button onClick={this._handleClick.bind(this)}>Radom</button> */}
        <Coverflow
          width={960}
          height={780}
          displayQuantityOfSide={2}
          navigation={true}
          enableHeading={true}
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
            <img id="carouselPic" src={p6} alt='transformation pic'/>

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