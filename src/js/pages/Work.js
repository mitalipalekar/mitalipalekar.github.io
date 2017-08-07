import React from 'react'
import ReactDOM from 'react-dom'

export default class Work extends React.Component {
  constructor() {
    super()
    this.state = {
      positions: [
        {
          photo: './photos/placeholder.jpg',
          photoAlt: 'Intern at Uber',
          title: 'Software Engineering Intern (Site Reliability)',
          company: 'Uber, Platform Infrastructure',
          description: 'Architected and implemented in-production rack distribution analysis support allowing a rack aware distribution of service instances and preventing services from violating their service-level agreements, improving service reliability.',
          technologies: 'Technologies: Golang, Mesos, Aurora, Uber’s Internal Tooling (service store, infrastructure store, indexing service)'
        },
        {
          photo: './photos/seclab.png',
          photoAlt: 'Research Assistant at UW CSE Security & Privacy Lab',
          title: 'Undergraduate Research Assistant',
          company: 'UW CSE Security and Privacy Lab',
          description: 'Developing and maintaining Confidante, an encrypted email client using Keybase for automatic key management; implemented new features such as encrypted drafts, the user interface to allow for interactions with email threads when composing an email and optional private key signing',
          technologies: 'Technologies: JavaScript, React, Flux, Node.js'
        },
        {
          photo: './photos/daily.jpg',
          photoAlt: 'Web Editor at Daily',
          title: 'Web Editor',
          company: 'The Daily - UW Newspaper',
          description: 'Responsible for managing our online presence - more details to come!',
          technologies: 'Technologies: TBD'
        },
        {
          photo: './photos/NASA.jpg',
          photoAlt: 'Intern at NASA',
          title: 'Software Engineering Intern',
          company: 'NASA Ames, Human Systems Lab',
          description: 'Designed and developed a path-finding tool and in-procedure execution guide using the Microsoft HoloLens for safety procedures and experiment conduction on the International Space Station, possibly replacing the current manual procedure execution process',
          technologies: 'Technologies: Unity, C#, HoloToolkit API, Node.js, Git'
        },
        {
          photo: './photos/gdtc.jpg',
          photoAlt: 'Research Assistant at Georgian Digital Text Collective',
          title: 'Undergraduate Research Intern',
          company: 'UW Georgian Digital Text Collective',
          description: 'Developed PHP scripts to convert Georgian to XML and JavaScript scripts to transpose XML to XHTML; proposed UI design changes to the front-end and managed the social media for the research group',
          technologies: 'Technologies: PHP, Javascript, Ajax, HTML, CSS'
        }
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
            <span>WORK EXPERIENCE</span>
          </div>
          {positionsHTML}
        </div>
      );
  }
}