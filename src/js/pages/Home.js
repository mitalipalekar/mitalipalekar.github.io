import React from "react"
import ReactDOM from "react-dom"
import Router from "react-router-dom"

// import Header from "../components/Header"

export default class Home extends React.Component {
  render() {
    return (
      <div>
        
        <div id="profile-photo">
          <img src="./photos/profile-photo.jpg" alt="Mitali's Photo" className="img-circle"/>
        </div>
        <div id="name">
          <span>MITALI PALEKAR</span>
        </div>
        <div id="about">
          I am a rising junior at pursuing Computer Science with Interdiscplinary Honors 
          the University of Washington, Seattle.  This past summer, I interned at <a href="">Uber</a> as a site reliability engineer, on the Platform Infrasctructure
          Team.  I am also an undergraduate research assistant in the <a href="">UW CSE Security 
          & Privacy Lab</a> and the President of the <a href="">UW Society of Women Engineers</a>.  
          In the past, I have interned at <a href="">NASA</a> as a full-stack software engineer.
          I am interested in the fields of machine learning, natural language processing and
          computer security.  In my free time, I love dancing, travelling, and eating guacamole.
        </div>
        <div id="footer">
          <div>
            <a href="mailto:mitali97@cs.washington.edu">
              <i className="fa fa-envelope fa-3x footer-icons" aria-hidden="true" />
            </a>
            <a href="https://www.linkedin.com/in/mitalipalekar" target="_blank">
              <i className="fa fa-linkedin fa-3x footer-icons" aria-hidden="true" />
            </a>
            <a href="https://github.com/mitalipalekar" target="_blank">
              <i className="fa fa-github fa-3x footer-icons" aria-hidden="true" />
            </a>
            <a href="https://www.twitter.com/mitzzP" target="_blank">
              <i className="fa fa-twitter fa-3x footer-icons" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<Home/>, app);