import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./schedule.css";
import brtext from'../images/brtext.jpg';
import Iframe from 'react-iframe'
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';
import Navbar  from '../components/navbar'


// import Calendar from 'react-calendar'
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
           <Navbar/>
        
        <div id="section1">
        <Container id="scheduleContainer">   
            <Container id="calendarContainer">   
                <Iframe url="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FChicago&amp;src=bHNpbWlhbmVyQGdtYWlsLmNvbQ&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%237986CB&amp;color=%2333B679&amp;color=%230B8043&amp;mode=MONTH&amp;showTitle=1&amp;showNav=1" style="border-width:0" width="800" height="600" frameborder="0" scrolling="no"
                width="500px"
                height="450px"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"/>
             </Container>
        {/* begin form */}
        <Form id="form">
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="email" placeholder="email" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Phone Number</Label>
        <Input type="phone" name="phone" id="phone" placeholder="1-800-GAINZ" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Number of sessions you're requesting</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
      <FormGroup>
      <Label for="exampleText">If this is your first time training with me please briefly describe your goals</Label>
        <Input type="textarea" name="goals" id="goals" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">list the dates you're requesting in a hh/dd/mm/yyyy format</Label>
        <Input type="textarea" name="text" id="exampleText" placeholder="4PM/12/12/2019" />
      </FormGroup>
      {/* <FormGroup>
        <Label for="exampleFile">File</Label>
        <Input type="file" name="file" id="exampleFile" />
        <FormText color="muted">
          This is some placeholder block-level help text for the above input.
          It's a bit lighter and easily wraps to a new line.
        </FormText>
      </FormGroup> */}
      <FormGroup tag="fieldset">
        <legend>Radio Buttons</legend>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            Option one is this and that—be sure to include why it's great
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            Option two can be something else and selecting it will deselect option one
          </Label>
        </FormGroup>
        <FormGroup check disabled>
          <Label check>
            <Input type="radio" name="radio1" disabled />{' '}
            Option three is disabled
          </Label>
        </FormGroup>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" />{' '}
          Check me out
        </Label>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  


       {/* end form */}
        </Container>       
        </div>
        </div>
        
    );
    }
}



export default Schedule;