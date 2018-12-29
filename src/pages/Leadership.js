import React from 'react'

export default class Leadership extends React.Component {
  constructor() {
    super()
    this.state = {
      positions: [
        {
          photo: './photos/swe.jpg',
          photoAlt: 'UW SWE',
          title: 'President & Adviser',
          company: 'UW Society of Women Engineers',
          description: 'Leading a 500+ member organization and a 20-member officer team aimed at encouraging young women to pursue STEM.',
        },
        {
          photo: './photos/peeradviser.jpg',
          photoAlt: 'Peer Adviser',
          title: 'Peer Adviser',
          company: 'Paul G. Allen School of Computer Science & Engineering',
          description: 'Advising underclassmen and current UW CSE students on the computer science program, admissions and experience.',
        },
        {
          photo: './photos/tunehouse.jpeg',
          photoAlt: 'TUNE House',
          title: 'TUNE House Roadshow Member',
          company: 'TUNE House Scholars Program',
          description: 'TUNE House Scholar for the 2017-18 and 2018-19 academic year; as part of the TUNE House Roadshow, visited local high schools to talk to young women about the field of computer science!',
        },
        {
          photo: './photos/daily.jpg',
          photoAlt: 'The UW Daily',
          title: 'Editor, Writer & Reporter',
          company: 'The UW Daily',
          description: 'Writer and reporter for news, opinion and special sections.  Previous Web Editor for The Daily.',
        },
        {
          photo: './photos/coe.png',
          photoAlt: 'UW College of Engineering Leadership',
          title: 'UW College of Engineering Leadership',
          company: 'Engineering Peer Mentor, Student Advisory Council Member and Emerging Leader in Engineering',
          description: 'Involved in several leadership experiences in the UW College of Engineering as a peer mentor, student advisory board member and 2-time emerging leader in engineering program participant.',
        },
        {
          photo: './photos/peereducator.jpg',
          photoAlt: 'UW Honors ',
          title: 'Peer Mentor & Educator',
          company: 'UW Interdisciplinary Honors Program',
          description: 'Responsible for interacting with students on behalf of the UW Interdisciplinary Honors Program.',
        },
      ]
    };
  }

  render() {
    var positionsHTML = this.state.positions.map(function(position, i) {
      return (
        <div id='position' key={i}>
          <img src={require(`${position.photo}`)} alt={position.photoAlt}/>
          <div id='position-title'><b>{position.title}</b></div>
          <div><em>{position.company}</em></div>
          <p id='position-description'>{position.description}</p>
          <p><em>{position.technologies}</em></p>
        </div>
      );
    });

      return (
        <div>
          <div id='title'>
            <span><b>LEADERSHIP</b></span>
          </div>
          {positionsHTML}
        </div>
      );
  }
}