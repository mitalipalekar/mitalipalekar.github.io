import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from './Main.js';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}