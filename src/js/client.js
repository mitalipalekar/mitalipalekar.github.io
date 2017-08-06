import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from "./pages/Home"
import Work from "./pages/Work"
import Projects from "./pages/Projects"
import Leadership from "./pages/Leadership"
import Press from "./pages/Press"

const app = document.getElementById('app');

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Home}/>
      <Route path='/work' component={Work}/>
      <Route path='/projects' component={Projects}/>
      <Route path='/leadership' component={Leadership}/>
      <Route path='/press' component={Press}/>
    </Switch>
  </BrowserRouter>, app);