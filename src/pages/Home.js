import React from 'react'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div id='profile-photo'>
          <img src={require("./photos/profile-photo.jpg")} alt="mitali" className="img-circle"/>
        </div>
        <div id='name'>
          <span>MITALI PALEKAR</span>
        </div>
        <div id='about'>
          I am a rising senior pursuing <b>Computer Science</b> with <b>Interdiscplinary Honors</b> at
          the <b>University of Washington, Seattle</b>.  I am really interested in using technology to empower 
          the voices of others and create products that benefit my community.  Over the last few years, I have 
          been able to work towards this goal by interning at top Silicon Valley companies like <b>Facebook, LinkedIn,
          Stripe, Uber</b> and <b>NASA</b>. I am also an <b>Undergraduate Research Assistant</b> in the <a href='https://seclab.cs.washington.edu/' target='_blank' rel="noopener noreferrer">UW CSE Security 
          & Privacy Lab</a> and the <b>Senior Adviser</b> (and past <b>President</b>) of the <a href='http://uwswe.com/' target='_blank' rel="noopener noreferrer">UW Society of Women Engineers</a>.  
          I am interested in the fields of machine learning, natural language processing and
          computer security.  In my free time, I love dancing, travelling, and gorging on guacamole.
        </div>
      </div>
    );
  }
}