import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router, Route} from "react-router-dom"

import {Home} from "./home"
import {Work} from "./work"
import {Projects} from "./projects"
import {Leadership} from "./leadership"
import {Press} from "./press"

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route path={"/"} component={Home} />
          <Route path={"work"} component={Work} />
          <Route path={"projects"} component={Projects} />
          <Route path={"leadership"} component={Leadership} />
          <Route path={"press"} component={Press} />
        </div>
      </Router>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<App/>, app);