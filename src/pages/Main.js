import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home'
import Work from './Work'
import Leadership from './Leadership'
import Blog from './Blog'
import Press from './Press'
import reflections_on_2018_looking_ahead from './blog/reflections_on_2018_looking_ahead'

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <Switch>
  	      <Route exact path='/' component={Home}/>
  	      <Route path='/work' component={Work}/>
  	      <Route path='/leadership' component={Leadership}/>
          <Route path='/blog' component={Blog}/>
  	      <Route path='/press' component={Press}/>
          <Route path='/reflections_on_2018_looking_ahead' component={reflections_on_2018_looking_ahead}/>
  	    </Switch>
      </div>
    );
  }
}