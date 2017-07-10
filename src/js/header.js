import React from "react"

export default class Header extends React.Component {
	render() {
		return(
      <header>
        <div className="container-fluid">
          <nav className="navbar-inverse navbar-default navbar-fixed-top" id="header-navbar">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
                <a className="navbar-brand" href="/">MITALI PALEKAR</a>
              </div>
              <div className="collapse navbar-collapse navbar-inverse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                  <li><a href="/">HOME</a></li>
                  <li><a href="/work">WORK</a></li>
                  <li><a href="/projects">PROJECTS</a></li>
                  <li><a href="/leadership">LEADERSHIP</a></li>
                  <li><a href="http://mitalipalekar.weebly.com" target="_blank">HONORS</a></li>
                  <li><a href="/press">PRESS</a></li>
                  <li><a href="pages/resume.pdf" target="_blank">RESUME</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
	}
}