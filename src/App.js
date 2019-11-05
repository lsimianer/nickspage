import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from "./pages/landing/Landing";
import Home from "./pages/home/Home";
import Store from "./pages/store/Store";
import Schedule from "./pages/schedule/Schedule";
import Education from "./pages/education/Education";
import Results from "./pages/results/Results";
import Coaches from './pages/coaches/Coaches'
import NoMatch from "./pages/NoMatch";
// import Pay from "./pages/pay/Pay";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Education" component={Education} />
          <Route exact path="/Store" component={Store} /> 
          <Route exact path="/Schedule" component={Schedule} />
          <Route exact path="/Coaches" component={Coaches} />
          <Route exact path="/Results" component={Results} />
          <Route path='/gram' component={() => window.location = 'https://www.instagram.com/br_physiques/'}/>
          <Route path='/CodeHounds' component={() => window.location = 'https://codehounds.io'}/>

          {/* <Route exact path="/Checkout" component={Pay} /> */}
          {/* 404 page */}
          <Route path='*' component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
