import React from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

export default class Header extends React.Component {
	render() {
		return(
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/"><img src={require('./../pages/photos/favicon.png')} alt="dummy" id="logo"/></a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="/news">
              <span className="navItem">NEWS</span>
            </NavItem>
            <NavItem eventKey={2} href="/blog">
              <span className="navItem">BLOG</span>
            </NavItem>

            <NavDropdown eventKey={3} title="UW PORTFOLIOS" id="navItem">
              <MenuItem eventKey={3.1} href="http://mitalipalekar.weebly.com" target="_blank" rel="noopener noreferrer">
                <span className="navItem">HONORS</span>
              </MenuItem>
              <MenuItem eventKey={3.2} href="https://hlcmitalipalekar.weebly.com/" target="_blank" rel="noopener noreferrer">
                <span className="navItem">HUSKY LEADERSHIP CERTIFICATE</span>
              </MenuItem>
            </NavDropdown>

            <NavItem eventKey={4} href={require("../resume.pdf")} target="_blank" rel="noopener noreferrer">
              <span className="navItem">RESUME</span>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
	}
}

/*
<header>
        <div className='container-fluid'>
          <nav className='navbar navbar-default navbar-fixed-top' id='header'>
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
              <div className='collapse navbar-collapse'>
                <ul className='nav navbar-nav navbar-right'>
                  <li><Link to='/'>HOME</Link></li>
                  <li><Link to='/work'>WORK</Link></li>
                  <li><Link to='/projects'>PROJECTS</Link></li>
                  <li><Link to='/leadership'>LEADERSHIP</Link></li>
                  <li><Link to='/press'>PRESS</Link></li>
                  <li><a href='http://mitalipalekar.weebly.com' target='_blank' rel='noopener noreferrer'>HONORS</a></li>
                  <li><a href='https://hlcmitalipalekar.weebly.com/' target='_blank' rel='noopener noreferrer'>HLC</a></li>
                  <li><a href={require("../resume.pdf")} target='_blank' rel='noopener noreferrer'>RESUME</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
*/