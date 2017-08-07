import React from 'react'
import ReactDOM from 'react-dom'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div id='profile-photo'>
          <img src="./photos/profile-photo.jpg" alt="Mitali's Photo" className="img-circle"/>
        </div>
        <div id='name'>
          <span>MITALI PALEKAR</span>
        </div>
        <div id='about'>
          I am a rising junior pursuing <b>Computer Science</b> with <b>Interdiscplinary Honors</b> at
          the <b>University of Washington, Seattle</b>.  This past summer, I interned at <b>Uber</b> as
          a Software Engineering Intern (Site Reliability), on the Platform Infrasctructure Team.
          I am also an <b>Undergraduate Research Assistant</b> in the <a href='https://seclab.cs.washington.edu/' target='_blank'>UW CSE Security 
          & Privacy Lab</a> and the <b>President</b> of the <a href='http://uwswe.com/' target='_blank'>UW Society of Women Engineers</a>.  
          In the past, I have interned at <b>NASA</b> as a full-stack software engineer in the Human Systems Lab.
          I am interested in the fields of machine learning, natural language processing and
          computer security.  In my free time, I love dancing, travelling, and gorging on guacamole.
        </div>
      </div>
    );
  }
}