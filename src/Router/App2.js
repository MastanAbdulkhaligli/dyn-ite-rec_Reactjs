import "../App.css";
import "./Navbar";
import Navbar from "./Navbar";
import Fibonacci from "./Fibonacci";
import Dec2Binary from "./Dec2Binary";
import Foobar from "./Foobar";
import First from "./Home";

// download
// npm install react-router-dom@5.2.0
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Dec2Binary";
const App2 = () => {
  return (
    <div>
      <Router>
        <Navbar />
        {/* <First /> */}
        <Switch>
          <Route path="/" exact component={First} />
          <Route path="/dec2binary" component={Dec2Binary} />
          <Route path="/fibonacci" component={Fibonacci} />
          <Route path="/foobar" component={Foobar} />
        </Switch>
      </Router>
    </div>
  );
};

export default App2;
