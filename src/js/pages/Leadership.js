import React from 'react'
import ReactDOM from 'react-dom'

export default class Leadership extends React.Component {
  constructor() {
    super()
    this.state = {
      positions: [
        {
          photo: './photos/placeholder.jpg',
          photoAlt: 'UW SWE',
          title: 'President',
          company: 'UW Society of Women Engineers',
          description: 'Leading a 500+ member organization and a 20-member officer team to organize professional development, community outreach and leadership development workshops through events, collaborations with other engineering groups and local organizations as well as connections with national SWE groups',
        },
        {
          photo: './photos/coe.png',
          photoAlt: 'CoE Peer Mentor',
          title: 'Peer Mentor',
          company: 'UW College of Engineering Peer Mentor',
          description: 'Answering questions related to the engineering application process, UW engineering experience, industry experience as well as possible career paths with an engineering major for underclassmen interested in engineering',
        },
        {
          photo: './photos/daily.jpg',
          photoAlt: 'UW Daily',
          title: 'News/Special Sections Reporter',
          company: 'UW Daily',
          description: 'Responsible for producing bi-weekly content for News, Opinion and Science as well as working with photo and news editors to develop cohesive and coherent content for both the print and online media',
        },
        {
          photo: './photos/coe.png',
          photoAlt: 'COESAC',
          title: 'Student Advisory Board Member',
          company: 'College of Engineering Student Advisory Council',
          description: 'Responsible for working closely with the Dean of the College of Engineering, Outreach Directors as well as the Engineering Advising staff to voice student concerns, act as a liaison between the student body and faculty as well as represent the UW CSE department in college-wide changes; suggest reforms to the first/second year Engineering curriculum to increase collaborative, cohesive and comprehensive aspect',
        },
        {
          photo: './photos/peereducator.jpg',
          photoAlt: 'UW Honors ',
          title: 'Peer Mentor & Educator',
          company: 'UW Interdisciplinary Honors Program',
          description: 'Responsible for answering any questions to UW Honors students about student life, the Honors Program as well as other involvement activities; served as the voice of the Honors Program to the student government as well as other student organizations and prospective students; led efforts to welcome incoming UW students to the Interdisciplinary Honors Community though leading weekly quiz sections, introducing students to resources at UW and serving as a mentor to students',
        },
        {
          photo: './photos/coe.png',
          photoAlt: 'Emerging Leaders in Engineering Program',
          title: 'Program Participant',
          company: 'Emerging Leaders in Engineering Program',
          description: '',
        },
        {
          photo: './photos/tunehouse.png',
          photoAlt: 'TUNE House',
          title: 'TUNE House Roadshow Participant',
          company: 'TUNE House Scholars Program',
          description: '',
        },
      ]
    };
  }

  render() {
    var positionsHTML = this.state.positions.map(function(position, i) {
      return (
        <div id='position' key={i}>
          <img src={position.photo} alt={position.photoAlt}/>
          <div id='position-title'>{position.title}</div>
          <div><b>{position.company}</b></div>
          <p id='position-description'>{position.description}</p>
          <p><em>{position.technologies}</em></p>
        </div>
      );
    }.bind(this));

      return (
        <div>

          <div id='title'>
            <span>LEADERSHIP</span>
          </div>
          {positionsHTML}
        </div>
      );
  }
}