import React from 'react'
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
	render() {
		return(
      <header>
        <div className='container-fluid'>
          <nav className='navbar-inverse navbar-default navbar-fixed-top' id='header-navbar'>
            <div className='container-fluid'>
              <div className='navbar-header'>
                <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1' aria-expanded='false'>
                  <span className='sr-only'>Toggle navigation</span>
                  <span className='icon-bar' />
                  <span className='icon-bar' />
                  <span className='icon-bar' />
                </button>
                <a className='navbar-brand' href='/'>MITALI PALEKAR</a>
              </div>
              <div className='collapse navbar-collapse navbar-inverse' id='bs-example-navbar-collapse-1'>
                <ul className='nav navbar-nav navbar-right'>
                  <li><Link to='/'>HOME</Link></li>
                  <li><Link to='/work'>WORK</Link></li>
                  <li><Link to='/projects'>PROJECTS</Link></li>
                  <li><Link to='/leadership'>LEADERSHIP</Link></li>
                  <li><Link to='/press'>PRESS</Link></li>
                  <li><a href='http://mitalipalekar.weebly.com' target='_blank' rel='noopener noreferrer'>HONORS</a></li>
                  <li><a href={require("../resume.pdf")} target='_blank' rel='noopener noreferrer'>RESUME</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
	}
}