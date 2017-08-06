import React from 'react';

import Header from '../components/Header';
import Main from './Main.js'

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}