import React from 'react'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div id='profile-photo'>
          <img src={require("./photos/profile-photo.png")} alt="mitali" className="img-circle"/>
        </div>
        <div id='name'>
          <span><b>MITALI PALEKAR</b></span>
        </div>
        <div id='about'>
          I am currently a <b>software engineer</b> on the <a href='https://www.linkedin.com/learning/' target='_blank' rel='noopener noreferrer'>
          LinkedIn Learning</a> team where I help to build the platform that powers all of LinkedIn Learning! Personally, I am interested in 
          using technology to build products that benefit my community and empower the voices of others, through the lens of <b>machine learning</b>, 
          <b> natural language processing</b> and <b>computer security</b>. This past spring, I graduated from the <a href='https://www.washington.edu/' target='_blank' 
          rel="noopener noreferrer"> University of Washington</a> with a degree in <b>Computer Science</b> and <b>Interdiscplinary Honors</b>. 
          During my time at the UW, I held a variety of roles -- as a <b>research assistant</b> in the <a href='https://seclab.cs.washington.edu/' 
          target='_blank' rel="noopener noreferrer">UW Security and Privacy Lab Research</a>, as an <b>Allen School peer adviser</b> as well as the 
          <b> President/Senior Adviser</b> of the <a href='http://uwswe.com/' target='_blank' rel="noopener noreferrer">UW Society of Women Engineers</a>. 
          I also took some time off from school to intern as a software engineer at some 
          cool tech companies including <a><b>Facebook</b></a>, <a><b>LinkedIn</b></a>, <a> <b>Stripe</b></a>, and <a href='https://eng.uber.com/sre-internship/' 
          target='_blank' rel="noopener noreferrer"><b>Uber</b></a>. I'm a sucker for recognition and feel privileged to have been a 
          <b><a href="http://scholars.tune.com/" target='_blank' rel="noopener noreferrer"> TUNE House</a> Scholar</b> and a 
          <b><a href="https://neo.com" target='_blank' rel="noopener noreferrer"> Neo</a> Scholar</b> as well as awarded the 
          <a href='https://news.cs.washington.edu/2019/06/18/at-the-allen-schools-2019-graduation-a-celebration-of-academic-achievement-inspirational-leadership-and-real-world-impact/' 
          target='_blank' rel="noopener noreferrer"> Allen School Outstanding Computer Science Senior Award</a> and the 
          <a href='https://www.washington.edu/husky100/#name=mitali-palekar' target='_blank' rel="noopener noreferrer"> Husky 100</a> award. 
          Outside of work and in my free time, I love dancing, travelling, and gorging on guacamole.
        </div>
      </div>
    );
  }
}