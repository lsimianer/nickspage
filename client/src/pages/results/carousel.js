import React, {Component} from 'react';
import "./results.css";
import Coverflow from 'react-coverflow';
import p1 from '../images/p1.jpeg';
import p2 from '../images/p2.jpeg';
import p4 from '../images/p4.jpeg';
import p5 from '../images/p5.jpeg';
import p6 from '../images/p6.jpeg';

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
            <img id="carouselPic" src={p6} alt='pic one'/>

          </div>
          <img id="carouselPic" src={p1} alt='pic two'/>
          <img id="carouselPic" src={p2} alt='pic three'/>
          <img id="carouselPic" src={p4} alt='pic three'/>
          <img id="carouselPic" src={p5} alt='pic two'/>
          <img id="carouselPic" src={p6} alt='pic three'/>
         
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