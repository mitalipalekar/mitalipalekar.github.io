import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home'
import Blog from './Blog'
import News from './News'
import reflections_on_2018_looking_ahead from './blog/reflections_on_2018_looking_ahead'

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <Switch>
  	      <Route exact path='/' component={Home}/>
          <Route path='/blog' component={Blog}/>
  	      <Route path='/news' component={News}/>
          <Route path='/reflections_on_2018_looking_ahead' component={reflections_on_2018_looking_ahead}/>
  	    </Switch>
      </div>
    );
  }
}