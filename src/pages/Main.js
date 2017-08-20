import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home'
import Work from './Work'
import Projects from './Projects'
import Leadership from './Leadership'
import Press from './Press'

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <Switch>
	      <Route exact path='/' component={Home}/>
	      <Route path='/work' component={Work}/>
	      <Route path='/projects' component={Projects}/>
	      <Route path='/leadership' component={Leadership}/>
	      <Route path='/press' component={Press}/>
	    </Switch>
      </div>
    );
  }
}