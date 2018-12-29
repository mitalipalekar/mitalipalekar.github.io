import React from 'react'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div id='profile-photo'>
          <img src={require("./photos/profile-photo.jpg")} alt="mitali" className="img-circle"/>
        </div>
        <div id='name'>
          <span><b>MITALI PALEKAR</b></span>
        </div>
        <div id='about'>
          I am a senior pursuing <b>Computer Science</b> with <b>Interdiscplinary Honors</b> at the  
          <a href='https://www.washington.edu/' target='_blank' rel="noopener noreferrer"> University of Washington</a>.
          I am interested in using technology to build products that benefit my community and empower the voices of others, 
          through the lens of <b>machine learning</b>, <b>natural language processing</b> and <b>computer security</b>.  I have been fortunate 
          to be able to work towards this goal by interning at many top Silicon Valley tech companies like <a><b>Facebook</b></a>, <a><b>LinkedIn</b></a>,
          <a> <b>Stripe</b></a>, <a href='https://eng.uber.com/sre-internship/' target='_blank' rel="noopener noreferrer"><b>Uber</b></a> and  <a><b>NASA</b></a>. 
          I am also an <b>Undergraduate Research Assistant</b> in the <a href='https://seclab.cs.washington.edu/' target='_blank' rel="noopener noreferrer">UW Security 
          and Privacy Lab Resarch</a>, the <b>Senior Adviser</b> (and past <b>President</b>) of the <a href='http://uwswe.com/' target='_blank' rel="noopener noreferrer">
          UW Society of Women Engineers</a>, a <b><a href="http://scholars.tune.com/" target='_blank' rel="noopener noreferrer">TUNE House</a> Scholar</b> and a <b><a href="https://twitter.com/neo?lang=en" target='_blank' rel="noopener noreferrer">Neo</a> Scholar</b>.  
          In my free time, I love dancing, travelling, and gorging on guacamole.
        </div>
      </div>
    );
  }
}