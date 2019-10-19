import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/landing/Landing";
// import Home from "./pages/home/Home";
// import Store from "./pages/store/store";
// import Calendar from "./pages/calendar/Calendar";
// import Education from "./pages/education/Education";
// import Pay from "./pages/pay/Pay";
// import Results from "./pages/results/Results";
// import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";



function App() {
  return (
    <Router>
      <div>
        {/* <Nav /> */}
        <Switch>
          <Route exact path="/" component={Landing} />
          {/* <Route exact path="/Home" component={Home} />
          <Route exact path="/Education" component={Education} />
          <Route exact path="/Store" component={Store} /> 
          <Route exact path="/Calendar" component={Calendar} />
          <Route exact path="/Pay" component={Pay} />
          <Route exact path="/Results" component={Results} /> */}
         
          {/* 404 page */}
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
