import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, IndexRoute } from 'react-router-dom'

import Layout from "./pages/Layout"
import Home from "./pages/Home"
import Work from "./pages/Work"

const app = document.getElementById('app');

ReactDOM.render(
  <BrowserRouter>
    <Layout>
    	<Route path="/" component={Work} />
     	<Route path="work" component={Work} />
    </Layout>
  </BrowserRouter>, app);